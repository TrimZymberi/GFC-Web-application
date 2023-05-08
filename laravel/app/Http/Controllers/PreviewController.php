<?php

namespace App\Http\Controllers;

use App\Http\Requests\PreviewRequest;
use App\Models\Preview;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PreviewController extends Controller
{
    /**
     * Create a new preview.
     *
     * @param  \App\Http\Requests\PreviewRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function create(PreviewRequest $request)
    {
        $data = $request->validated();

        /** @var \App\Models\Preview $preview */
        $preview = Preview::create([
            'image' => $data['image'],
            'name' => $data['name'],
            'description' => $data['description'],
            'user_id' => $data['user_id'],
        ]);

        return response([
            'status' => 'success',
            'message' => 'Preview created successfully',
            'preview' => $preview,
        ]);
    }

    /**
     * Update an existing preview.
     *
     * @param  \App\Http\Requests\PreviewRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PreviewRequest $request, int $id)
    {
        $data = $request->validated();

        $preview = Preview::find($id);

        if (!$preview) {
            return response()->json([
                'status' => 'error',
                'message' => 'No preview found'
            ], 404);
        }

        // Check if the user with the updated user_id exists
        $user = User::find($data['user_id']);
        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'No user found'
            ], 404);
        }

        $preview->update([
            'image' => $data['image'],
            'name' => $data['name'],
            'description' => $data['description'],
            'user_id' => $data['user_id'],
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Preview updated successfully',
            'preview' => $preview
        ]);
    }

    /**
     * Retrieve a specific Preview for editing.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $preview = Preview::find($id);

        if (!$preview) {
            return response()->json([
                'status' => 'error',
                'message' => 'No preview found'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'preview' => $preview
        ]);
    }

    /**
     * Retrieve a specific preview for display.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function display($id)
    {
        $preview = Preview::find($id);

        if (!$preview) {
            return response()->json([
                'status' => 'error',
                'message' => 'No preview found'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'preview' => $preview
        ]);
    }

    /**
     * Delete a specific preview.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $preview = Preview::find($id);

        if (!$preview) {
            return response()->json([
                'status' => 404,
                'message' => 'No preview found'
            ], 404);
        }

        $preview->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Preview deleted successfully',
        ], 200);
    }

    public function search(Request $request)
    {
        $query = $request->input('query');

        if (!$query) {
            return response()->json([
                'status' => 'error',
                'message' => 'Please provide a search query'
            ], 400);
        }

        $preview = Preview::where('name', 'LIKE', '%' . $query . '%')
            ->orWhere('description', 'LIKE', '%' . $query . '%')
            ->orWhere('retail_price', 'LIKE', '%' . $query . '%')
            ->orWhere('market_price', 'LIKE', '%' . $query . '%')
            ->get();

        return response()->json([
            'status' => 'success',
            'preview' => $preview
        ], 200);
    }

    public function paginate(Request $request)
    {
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);

        $preview = Preview::paginate($perPage, ['*'], 'page', $page);

        return response()->json([
            'status' => 'success',
            'preview' => $preview
        ], 200);
    }

    public function index()
    {
        $preview = Preview::all();
        if ($preview->count() > 0) {
            return response()->json([
                'status' => 200,
                'preview' => $preview
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'no records found'
            ], 404);
        }
    }


    /**
     * Get the name of a user based on their ID.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getUserName(int $id)
    {
        $user = DB::table('users')->select('name')->where('id', $id)->first();

        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'User not found'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'name' => $user->name
        ]);
    }
}
