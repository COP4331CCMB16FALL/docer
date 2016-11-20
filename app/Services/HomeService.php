<?php

namespace App\Services;
use Illuminate\Database\Eloquent\Model;
use DB;
use App;
use Auth;
use Response;

class HomeService
{
    public function getUser()
    {
        $docService = app(DocumentService::class);
        $user = DB::table('users')
            ->where('users.id', Auth::id())
            ->select('users.id as user_id', 'users.name')
            ->first();

		$user->groups = DB::table('users_groups')
        	 ->join('groups', 'groups.id', '=', 'users_groups.group_id')
             ->where('users_groups.user_id', Auth::id())
             ->select('groups.id', 'groups.name')
             ->get();
        foreach($user->groups as &$group) {
            $group->Members = DB::table('users_groups')
                ->join('users', 'users.id', '=', 'users_groups.user_id')
                ->where('users_groups.group_id', '=', $group->id)
                ->select('users.id', 'users.name')
                ->get();
        }

		$tmp = DB::table('documents')
            ->where('documents.user_id', Auth::id())
            ->select('documents.id as document_id')
            ->get();

		$docs = [];
		foreach($tmp as $doc)
		{
			$docs[] = $doc->document_id;
		}
        $user->documents = $docService->getDocuments($docs);

        return response()->json($user);
    }

    public function searchDocument($search, $user)
    {
        $paramArray = array();
        $strings = explode(' ', $search);
        #$stmt  = 'SELECT documents.*, document_meta_tags.value ';
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
