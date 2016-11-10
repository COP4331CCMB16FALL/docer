<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;

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

        //carefull when running this!! ALL users will be deleted.
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

        Model::reguard();
    }
}
