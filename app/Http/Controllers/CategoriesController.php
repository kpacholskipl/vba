<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Resources\CategoryResources;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class CategoriesController extends Controller
{
    public function index(Request $request)
    {
        $limit = Arr::get($request->all(), 'limit', 15);
        return CategoryResources::collection(Category::paginate($limit));
    }
}
