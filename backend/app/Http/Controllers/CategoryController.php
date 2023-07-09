<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    //
    function Userinsert(Request $req)
    {
        $category_name = $req->input('category_name');
        $data = DB::table('categories')
            ->insert(['category_name' => $category_name]);

        if ($data) {
            echo 'Data inserted successfully in category.';
        } else {
            echo'Failed to insert data.';
        }
    }
    function insertMany()
    {
        $categories=[['category_name'=>'Resturants'],
                    ['category_name'=>'Salons'],
                    ['category_name'=>'Bars'],
                    ['category_name'=>'Gyms'],
                    ['category_name'=>'Makeup'],
                    ['category_name'=>'Sightseeing & Tours'],
                    ['category_name'=>'Dental'],
                    ['category_name'=>'Massage']];
        try {
            $data =DB::table('categories')
                ->insert($categories);

            if ($data) {
                echo "Data inserted successfully in category.";
            } 
            else {
                echo "Failed to insert data.";
            }
        } 
        catch (\Exception $e) {
            echo('Database error: ' . $e->getMessage());
        }
    }
    function getCategories()
    {
        return DB::table('categories')
        ->get();
    }
}
