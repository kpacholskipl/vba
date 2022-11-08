<?php

namespace Database\Seeders;

use App\Models\Category;

class CategoriesTableSeeder extends ModelSeeder
{
    /**
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'name' => 'Fronted',
                'color' => 'bg-red-500'
            ],
            [
                'name' => 'Backend',
                'color' => 'bg-yellow-300'
            ],
            [
                'name' => 'UI/UX',
                'color' => 'bg-green-400'
            ],
            [
                'name' => 'Offtop',
                'color' => 'bg-blue-500'
            ],
        ];

        $this->setAmount(count($data))
            ->useData($data)
            ->setIncrementKey(0)
            ->seedModel(Category::class, function ($category, $key) use ($data) {
                $category->name = $data[$key]['name'];
                $category->color = $data[$key]['color'];
                $category->save();
            });
    }
}
