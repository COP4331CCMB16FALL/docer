<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateUsersGroupsTable extends Migration
{
    public function up()
    {
        Schema::create('users_groups', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->references('id')->on('users');
            $table->integer('group_id')->references('id')->on('groups');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('users_groups');
    }
}
