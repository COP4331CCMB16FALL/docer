<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateDocumentsGroupsTable extends Migration
{
    public function up()
    {
        Schema::create('documents_groups', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('document_id')->references('id')->on('documents');
            $table->integer('group_id')->references('id')->on('groups');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('documents_groups');
    }
}
