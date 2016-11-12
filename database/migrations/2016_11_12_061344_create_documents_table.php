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
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('group_id');
            $table->string('mime_type');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('documents');
    }
}
