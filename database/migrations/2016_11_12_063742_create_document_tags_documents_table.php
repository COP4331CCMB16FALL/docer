<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateDocumentTagsDocumentsTable extends Migration
{
    public function up()
    {
        Schema::create('document_tags_documents', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('meta_tag_id')->references('id')->on('meta_data');
            $table->integer('document_id')->references('id')->on('documents');
        });
    }

    public function down()
    {
        Schema::drop('document_tags_documents');
    }
}
