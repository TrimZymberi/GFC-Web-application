<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductList;
class ProductListController extends Controller
{
    

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = ProductList::all();
        return response()->json($products);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // 
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'priview'=> 'required',
            'productname'=>'required',
            'description'=>'required',
            'marketprice'=>'required',
            'retailprice'=>'required',
            'datecreated'=>'required',
            'createdby'=>'required',
            'category'=>'required',
        ]);

        try{
            // $imageName = Str::random().'.'.$request->image->getClientOriginalExtension();
            // Storage::disk('public')->putFileAs('product/image', $request->image,$imageName);
            ProductList::create($request->post());

            return response()->json([
                'message'=>'Product Created Successfully!!'
            ]);
        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something went wrong when creating a product!'
            ],500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = ProductList::findOrFail($id);

        return response()->json([
            'data' => $product
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ProductList $product)
    {
    $validatedData = $request->validate([
            'priview'=> 'required',
            'productname'=>'required',
            'description'=>'required',
            'marketprice'=>'required',
            'retailprice'=>'required',
            'datecreated'=>'required',
            'createdby'=>'required',
            'category'=>'required',
    ]);

    // update the product with the validated data
    $product->update($validatedData);

    // return a response
    return response()->json([
        'message' => 'Product updated successfully.',
        'data' => $product
    ]);
    }
        
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = ProductList::find($id);
        $product->delete();

        return response()->json([
            'message' => 'Product deleted successfully'
        ]);
    }
}
