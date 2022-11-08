<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Post;

class PostTransformer extends TransformerAbstract
{
    /**
     * @var array
     */
    protected $availableIncludes = [
        'category'
    ];

    public function transform(Post $item): array
    {
        return [
            'id'             => $item->id,
            'title'          => $item->title,
            'content'        => $item->content,
            'category_id'    => $item->category_id,
            'likes'          => $item->likes,
        ];
    }
    public function includeCategory(Post $post)
    {
        return $this->item($post->category, new CategoryTransformer());
    }
}
