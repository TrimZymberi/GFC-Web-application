<?php
$products = DB::table('product')->get();


foreach ($products as $product) {
    echo $product->name;
}
?>