<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends ModelSeeder
{
    /**
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'name'       => 'Admin',
                'email'      => 'admin@admin.pl',
                'password'   => Hash::make('admin'),
                'is_admin'   => 1,
            ],
            [
                'name'      => 'User',
                'email'      => 'user@user.pl',
                'password'   => Hash::make('user'),
                'is_admin'  => 0,
            ],
        ];

        $this->setAmount(count($data))
            ->useData($data)
            ->setIncrementKey(0)
            ->seedModel(User::class, function ($user, $key) use ($data) {
                $user->name = $data[$key]['name'];
                $user->email = $data[$key]['email'];
                $user->password = $data[$key]['password'];
                $user->is_admin = $data[$key]['is_admin'];
                $user->save();
            });
    }
}
