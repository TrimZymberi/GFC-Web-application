<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function index(){
        $categorys = Category::all();
        if($categorys->count() > 0){
            return response()->json([
                'status' =>200,
                'category' => $categorys
            ],200);
        }else{
            return response()->json([
                'status' =>404,
                'message' => 'no records found'
            ],404);
        }
       
      
    }

    public function store(Request $request){
      $validator = Validator::make($request->all(),[
        'name'=>'required|string|max:191',
        'description'=>'required|string|max:191',
        'price'=>'required|max:191',

      ]);

      if($validator->fails()){

        return response()->json([
            'status'=>422,
            'errors'=>$validator->messages()
        ],422);
      }else{
        $category = Category::create([
            'name'=> $request->name,
            'description'=> $request->description,
            'price'=> $request->price,
        ]);

        if($category){
           return response()->json([
            'status'=>200,
            'message'=>'Category Created Successfully'
           ],200);
        }else{
            return response()->json([
                'status'=>500,
                'message'=>'Somthing went wrong'
               ],500);
        }
      }
    }


    public function show($id){
        $category = Category::find($id);
        if($category){
            return response()->json([
                'status'=>200,
                'category'=>$category
               ],200);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'No category found'
               ],404);
        }
    }
    public function edit($id){
        $category = Category::find($id);
        if($category){
            return response()->json([
                'status'=>200,
                'category'=>$category
               ],200);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'No category found'
               ],404);
        }
    }
    public function update(Request $request,int $id){
        $validator = Validator::make($request->all(),[
            'name'=>'required|string|max:191',
            'description'=>'required|string|max:191',
            'price'=>'required|max:191',
    
          ]);
    
          if($validator->fails()){
    
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages()
            ],422);
          }else{
            $category = Category::find($id);
           
    
            if($category){
                $category ->update([
                    'name'=> $request->name,
                    'description'=> $request->description,
                    'price'=> $request->price,
                ]);

               return response()->json([
                'status'=>200,
                'message'=>'Category Updated Successfully'
               ],200);
            }else{
                return response()->json([
                    'status'=>404,
                    'message'=>'No category found'
                   ],404);
            }
          }
    }

    public function destroy($id){
        $category = Category::find($id);
        if($category){
            $category->delete();
            return response()->json([
                'status'=>200,
                'message'=>'Category Deleted Successfully'
               ],200);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'No category found'
               ],404);
        }
    }
}
