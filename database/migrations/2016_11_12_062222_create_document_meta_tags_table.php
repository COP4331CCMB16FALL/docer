<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateDocumentMetaTagsTable extends Migration
{
    public function up()
    {
        Schema::create('document_meta_tags', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('meta_tag_id')->index();
            $table->foreign('meta_tag_id')->references('id')->on('meta_tags');
            $table->unsignedInteger('document_id')->index();
            $table->foreign('document_id')->references('id')->on('documents');
            $table->string('value');
        });
    }

    public function down()
    {
        Schema::drop('document_meta_tags');
    }
}
