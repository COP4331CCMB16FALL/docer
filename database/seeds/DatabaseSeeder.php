<?php

use App\Document;
use App\Group;
use App\MetaTag;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        Model::unguard();

        // Users
        DB::table('users')->delete();

        $users = array(
                ['name' => 'Maximus 64', 'email' => 'maximus64@khoahoang.com', 'password' => Hash::make('password')],
                ['name' => 'Zero Cool', 'email' => 'zerocool@hacker.com', 'password' => Hash::make('password')],
                ['name' => 'Seg Fault', 'email' => 'seg@fault.com', 'password' => Hash::make('password')],
                ['name' => 'Tom Cruise', 'email' => 'tomcruise@meh.com', 'password' => Hash::make('password')],
        );

        // Loop through each user above and create the record for them in the database
        foreach ($users as $user)
        {
            User::create($user);
        }
        dump('Seeded users');



        // Groups
        DB::table('groups')->delete();

        $groups = array(
            ['name' => 'Group 1', 'created_by' => 1],
            ['name' => 'Group 2', 'created_by' => 2],
            ['name' => 'Group 3', 'created_by' => 3],

        );

        // Loop through each user above and create the record for them in the database
        foreach ($groups as $group)
        {
            Group::create($group);
        }
        dump('Seeded groups');



        // Documents
        DB::table('documents')->delete();

        $documents = array(
            ['path' => '/something/at/something', 'user_id' => 1, 'group_id' => 1, 'mime_type' => 'something'],
            ['path' => '/something/at/something', 'user_id' => 2, 'group_id' => 1, 'mime_type' => 'something'],
            ['path' => '/something/at/something', 'user_id' => 3, 'group_id' => 1, 'mime_type' => 'something'],
            ['path' => '/something/at/something', 'user_id' => 4, 'group_id' => 1, 'mime_type' => 'something'],
        );

        // Loop through each user above and create the record for them in the database
        foreach ($documents as $document)
        {
            Document::create($document);
        }
        dump('Seeded documents');



        // MetaTag
        DB::table('meta_tags')->delete();

        $metaTags = array(
            ['name' => 'first_name'],
            ['name' => 'last_name'],
            ['name' => 'title'],
        );

        // Loop through each user above and create the record for them in the database
        foreach ($metaTags as $metaTag)
        {
            MetaTag::create($metaTag);
        }
        dump('Seeded meta_tags');



        // Users groups pivot table.
        DB::table('users_groups')->insert([
            ['user_id' => 1, 'group_id' => 1],
            ['user_id' => 2, 'group_id' => 2],
            ['user_id' => 3, 'group_id' => 2],
        ]);
        dump('Seeded users_groups');



        // Documents groups pivot table.
        DB::table('documents_groups')->insert([
            ['document_id' => 1, 'group_id' => 1],
            ['document_id' => 2, 'group_id' => 2],
            ['document_id' => 3, 'group_id' => 2],
        ]);
        dump('Seeded documents_groups');



        // Documents groups pivot table.
        DB::table('document_meta_tags')->insert([
            ['document_id' => 1, 'meta_tag_id' => 1],
            ['document_id' => 2, 'meta_tag_id' => 2],
            ['document_id' => 3, 'meta_tag_id' => 2],
        ]);
        dump('Seeded document_meta_tags');

        Model::reguard();

        dump('Successfully Seeded Database');
    }
}
