<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateDocumentsTable extends Migration
{
    public function up()
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->increments('id');
            $table->string('path');
            $table->integer('user_id')->references('id')->on('users');
            $table->integer('group_id')->references('id')->on('groups');
            $table->string('mime_type');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('documents');
    }
}
