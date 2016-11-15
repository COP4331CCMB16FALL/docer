<?php
namespace App\Services;
use Storage;
use Imagick;
use DB;

class DocumentService
{

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
	header('Content-Type: image/jpg');

	$hash = md5_file($filePath);
        $finalPath = $group . '/' . $hash . '.jpg';
        if(!Storage::disk('imageStore')->put(
            $finalPath,
            file_get_contents($filePath))) {
	    return response()->json('Error: Could not save image.', 422);
        }

	$id = DB::table('documents')->insertGetId(
	    [
	        'path' => $finalPath, 
	        'user_id' => $user['id'],
		'group_id' => $group,
		'mime_type' => 'image/jpg',
		'created_at' => time(),
	        'updated_at' => time()
            ]
	);
        $origFileName = $file->getClientOriginalName();
	DB::table('document_meta_tags')->insert(
	    [
	        'meta_tag_id' => 1,
		'document_id' => $id,
		'value' => $origFileName
            ]
	);

	return response()->json($id); #$image; #'yarp '. $filePath;
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

	header('Content-Type: ' . $doc->mime_type);
	return Storage::disk('imageStore')->get($doc->path);
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

}
