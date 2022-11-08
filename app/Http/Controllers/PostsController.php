<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Resources\PostResources;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class PostsController extends Controller
{
    public function index(Request $request)
    {
        $limit = Arr::get($request->all(), 'limit', 15);
        return PostResources::collection(Post::paginate($limit));
    }

    public function store(StorePostRequest $request)
    {
        $post = Post::create($request->all());
        return new PostResources($post);
    }

    public function show(Request $request, Post $post)
    {
        return new PostResources($post);
    }

    public function update(UpdatePostRequest $request, Post $post)
    {
        $post->update($request->all());
        return new PostResources($post);
    }


    public function destroy(Request $request, Post $post)
    {
        $post->delete();
        return response('', 204);
    }
}
