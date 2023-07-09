<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DealsController extends Controller
{
    //
    function Userinsert(Request $req)
    {
        $category_id = $req->input('category_id');
        $deal_name = $req->input('deal_name');
        $deal_description = $req->input('deal_description');
        $location = $req->input('location');
        $deal_price = $req->input('deal_price');
        $image = $req->input('image');
        $deal_discount = $req->input('deal_discount');
        $deal_expiry_date = $req->input('deal_expiry_date');
        try {
            $data = DB::table('deals')
            ->insert(['category_id' => $category_id,'deal_name' => $deal_name,'deal_description' => $deal_description,'location' => $location,'deal_price' => $deal_price,'deal_discount' => $deal_discount,'image' => $image,'deal_expiry_date' => $deal_expiry_date]);
            if ($data) {
                echo 'Data inserted successfully in deals.';
            } else {
                echo'Failed to insert data.';
            }
        }
        catch (\Exception $e) {
            echo('Database error: ' . $e->getMessage());
        }
    }
    function insertMany()
    {
        $deals=[['category_id'=>'8','deal_name'=>'Heavenly Massage','deal_description'=>'Heavenly Massage loremsdadasddasdasas asdasdas','location'=>'Chicago','deal_price'=>'60','image'=>'https://img.grouponcdn.com/bynder/4VvYWjQmkSYkRdGLGwkTYVsbpw84/4V-2048x1229/v1/c349x211.webp','deal_discount'=>'8','deal_expiry_date'=>'2023-6-26'],
        ['category_id'=>'1','deal_name'=>'Food and Drink at Derno','deal_description'=>'Food and Drink at Derno loremsdadasdas asdasdas','location'=>'Chicago','deal_price'=>'25','image'=>'https://img.grouponcdn.com/iam/2UBuw6HbkXfdpwGfh3bFoQoTpkmc/2U-2048x1229/v1/c349x211.webp','deal_discount'=>'60','deal_expiry_date'=>'2023-6-28'],
        ['category_id'=>'1','deal_name'=>'Indian Food and Drink at Moti Cafe','deal_description'=>'Indian Food and Drink at Moti Cafe loremsdadasdas asdasdas','location'=>'Chicago','deal_price'=>'12','image'=>'https://img.grouponcdn.com/bynder/vkLYNDxrZRZy81saRbqKNAHxxd6/vk-2048x1229/v1/c349x211.webp','deal_discount'=>'36','deal_expiry_date'=>'2023-6-20'],
        ['category_id'=>'3','deal_name'=>'Craft Beer and Comfort Food at Spotted Fox Ale House','deal_description'=>'Ale House loremsdadasdas asdasdas','location'=>'California','image'=>'https://img.grouponcdn.com/deal/2hQQDV8SL2kobjHzBpz3G7EFbC7p/2h-1066x639/v1/c349x211.webp','deal_price'=>'25','deal_discount'=>'50','deal_expiry_date'=>'2023-6-28'],
        ['category_id'=>'4','deal_name'=>'Up to 48% Off on Personal Trainer at Flexit','deal_description'=>'Flexit loremsdadasdas asdasdas','location'=>'California','image'=>'https://img.grouponcdn.com/metro_draft_service/Dch3vVzeWK6hZEAcYEXvCFCAs6r/Dc-1763x1442/v1/c349x211.webp','deal_price'=>'149','deal_discount'=>'48','deal_expiry_date'=>'2023-6-24'],
        ['category_id'=>'5','deal_name'=>'Beats By Geishadoll','deal_description'=>'Geishadoll loremsdadasdas asdasdas','location'=>'Austin','deal_price'=>'75','deal_discount'=>'37','image'=>'https://img.grouponcdn.com/iam_raw/pn9ZvZUWKC7Ma2N5EXHv/ZL-5760x3840/v1/c349x211.webp','deal_expiry_date'=>'2023-6-27'],
        ['category_id'=>'8','deal_name'=>'Up to 59% Off on Swedish Massage at Versailles Massage','deal_description'=>'Swedish Massage at Versailles Massage loremsdadasdas asdasdas','image'=>'https://img.grouponcdn.com/deal/2SB8AmRu6Ms41pc3XBx7aN7C2fU1/2S-1000x600/v1/c349x211.webp','location'=>'Austin','deal_price'=>'50','deal_discount'=>'48','deal_expiry_date'=>'2023-6-21'],
        ['category_id'=>'8','deal_name'=>'Up to 38% Off on Full Body Massage at All Body Spa','deal_description'=>'Full Body Massage at All Body Spa loremsdadasdas asdasdas','image'=>'https://img.grouponcdn.com/iam/kFqRkagMZiCjPqjb1D71/s9-2048x1229/v1/c349x211.webp','location'=>'Austin','deal_price'=>'245','deal_discount'=>'38','deal_expiry_date'=>'2023-7-18']];

        try{
            $data =DB::table('deals')
            ->insert($deals);

            if ($data) {
                echo "Data inserted successfully in deals.";
            } 
            else {
                echo "Failed to insert data.";
            }
        }
        catch(Exception $e){
            echo('Database error: ' . $e->getMessage());
        }   
    }
    function getDeals()
    {
        return DB::table('deals')
        ->join('categories', 'categories.id', '=', 'deals.category_id')
        ->select('deals.*', 'categories.category_name')
        ->get();
    }

    public function getDealsbyCategory($id)
    {
        return DB::table('deals')
        ->where('category_id', $id)
        ->get();   
    }
}
