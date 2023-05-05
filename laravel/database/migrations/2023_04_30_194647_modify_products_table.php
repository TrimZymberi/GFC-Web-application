<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_list', function (Blueprint $table) {
            $table->id();
            $table->string("priview");
            $table->string("productname");
            $table->string("description");
            $table->double("marketprice");
            $table->double("retailprice");
            $table->timestamp("datecreated");
            $table->string("createdby");
            $table->string("category");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('product_list', function (Blueprint $table) {
            //
        });
    }
};
