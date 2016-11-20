<?php

namespace App\Services;
use Illuminate\Database\Eloquent\Model;
use Storage;
use Imagick;
use DB;
use App;
use Auth;
use Response;

class DocumentService
{

    // Pass array of document IDs
    public function getDocuments($docs)
    {
        $docs = DB::table('users')
            ->join('users_groups', 'users.id', '=', 'users_groups.user_id')
            ->join('documents', 'users_groups.group_id', '=', 'documents.group_id')
            ->where('users.id', Auth::id())
            ->whereIn('documents.id', $docs)
            ->select('documents.id as document_id', 'documents.group_id')
            ->get();

        foreach($docs as &$doc) {
            $doc->metaTags = DB::table('document_meta_tags')
                ->join('meta_tags', 'meta_tags.id', '=', 'document_meta_tags.meta_tag_id')
                ->where('document_meta_tags.document_id', $doc->document_id)
                ->select('meta_tags.name', 'document_meta_tags.value')
                ->get();
        }
        return $docs;
    }

    public function createDocument($file, $group, $user)
    {
        $ValidGroup = DB::table('users')
            ->join('users_groups', 'users.id', '=', 'users_groups.user_id')
            ->where([
                ['users.id', $user['id']],
                ['users_groups.group_id', $group]])
            ->count();
        if($ValidGroup == 0) {
            return response()->json('Error: User is not a member of group ' . $group, 422);
        }

        $filePath = $file->getRealPath();

        // Convert image to jpg for simplicity
        $image = new Imagick($filePath);
        $image->setImageFormat('jpg');
        $image->writeImages($filePath, true);

        $hash = md5_file($filePath);
        $finalPath = $group . '/' . $hash . '.jpg';
        if(!Storage::disk('imageStore')->put(
           $finalPath,
           file_get_contents($filePath))) {
            return response()->json('Error: Could not save image.', 422);
        }

        $doc = new App\Document(
            [
                'path' => $finalPath,
                'user_id' => $user['id'],
                'group_id' => (int)$group,
                'mime_type' => 'image/jpeg'
            ]
        );

        $doc->save();

        $nameID = DB::table('meta_tags')->where('name', 'name')->value('id');
        if(is_null($nameID)) {
            $nameID = DB::table('meta_tags')->insertGetId( ['name' => 'name']);
        }
        $origFileName = $file->getClientOriginalName();
        DB::table('document_meta_tags')->insert(
            [
            'document_id' => $doc->id,
                'meta_tag_id' => $nameID,
                'value' => $origFileName
            ]
        );

        return response()->json($doc);
    }

    public function updateDocument($document_id)
    {

    }

    public function readDocument($document_id, $user)
    {
        $doc = DB::table('users')
            ->join('users_groups', 'users.id', '=', 'users_groups.user_id')
            ->join('documents', 'users_groups.group_id', '=', 'documents.group_id')
            ->where([
                ['users.id', $user['id']],
                ['documents.id', $document_id]])
            ->first();
        if(is_null($doc)) {
            return response()->json('Error: User does not have access to document ' . $document_id, 422);
        }

        #return dump(App\Document::find((int)$document_id)->metaTags);
        $response = Response::make(Storage::disk('imageStore')->get($doc->path), 200);
        $response->header('Content-Type', $doc->mime_type);
        return $response;
    }

    public function destroyDocument($document_id, $user)
    {
        $doc = DB::table('users')
            ->join('users_groups', 'users.id', '=', 'users_groups.user_id')
            ->join('documents', 'users_groups.group_id', '=', 'documents.group_id')
            ->where([
                ['users.id', $user['id']],
                ['documents.id', $document_id]])
            ->first();
        if(is_null($doc)) {
            return response()->json('Error: User does not have access to document ' . $document_id, 422);
        }

        DB::table('document_meta_tags')->where('document_id', '=', $doc->id)->delete();
        DB::table('documents')->where('id', '=', $doc->id)->delete();

        if(DB::table('documents')->where('path', '=', $doc->path)->count() == 0) {
            Storage::disk('imageStore')->delete($doc->path);
        }

        return response()->json('File has been deleted');
    }

    public function searchDocument($search, $user)
    {
        $paramArray = array();
        $strings = explode(' ', $search);
        $stmt  = 'SELECT documents.id ';
        $stmt .= 'FROM document_meta_tags ';
        $stmt .= 'INNER JOIN documents ON document_meta_tags.document_id = documents.id ';
        $stmt .= 'INNER JOIN users_groups ON users_groups.group_id = documents.group_id ';
        $stmt .= 'INNER JOIN users ON users.id = users_groups.user_id ';
        $stmt .= 'WHERE users.id = ? and ( ';
        $paramArray[] = $user['id'];

        foreach($strings as $val) {
            $stmt .= 'document_meta_tags.value like ? and ';
            $paramArray[] = '%'.$val.'%';
        }
        $stmt = substr($stmt, 0, -4);
        $stmt .= ')';

        $ret = DB::select($stmt, $paramArray);
        $docs = [];

        foreach($ret as $doc) {
            $docs[] = $doc->id;
        }

        return response()->json(DocumentService::getDocuments($docs));
    }


}
