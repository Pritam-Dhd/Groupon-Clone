<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReviewsController extends Controller
{
    //
    function insertMany()
    {
        $reviews=[['deal_id'=>'8','written_by'=>'Pritam','rating'=>'5','comment'=>"This was one of the best spas I've been on.",'created'=>date('Y-m-d H:i:s')],
        ['deal_id'=>'8','written_by'=>'Pritam2','rating'=>'4','comment'=>"Very relaxing.",'created'=>date('Y-m-d H:i:s')],
        ['deal_id'=>'8','written_by'=>'Pritam1','rating'=>'5','comment'=>"Amazing time. Highly recommend. Very clean.",'created'=>date('Y-m-d H:i:s')],
        ['deal_id'=>'8','written_by'=>'Ram','rating'=>'4','comment'=>"Really fun experience!.",'created'=>date('Y-m-d H:i:s')],
        ['deal_id'=>'8','written_by'=>'Shyam','rating'=>'3','comment'=>"Its not worth it anymore the prices went up but very good place.",'created'=>date('Y-m-d H:i:s')],
        ['deal_id'=>'9','written_by'=>'Pritam','rating'=>'4','comment'=>"All the staff is friendly and welcoming. Would definitely recommend this place.",'created'=>date('Y-m-d H:i:s')],
        ['deal_id'=>'9','written_by'=>'Pritam','rating'=>'5','comment'=>"Excellent workout. Nice atmosphere.",'created'=>date('Y-m-d H:i:s')],
        ['deal_id'=>'9','written_by'=>'Hari','rating'=>'4','comment'=>"My first day back was awesome. The manager and staff were amazing. I worked out with Kailee and she is patient, knowledgable, very helpful throughout the session ensuring that you are ok with each station. She is fabulous!!.",'created'=>date('Y-m-d H:i:s')]];

        $data =DB::table('reviews')
            ->insert($reviews);

        if ($data) {
            echo "Data inserted successfully in reviews.";
        } 
        else {
            echo "Failed to insert data.";
        }
    }
    function getReviews($id)
    {
        return DB::table('reviews')
        ->where('deal_id', $id)
        ->get();   
    }
    function insertReview(Request $req)
    {
        $deal_id = $req->input('deal_id');
        $written_by = $req->input('written_by');
        $rating = $req->input('rating');
        $comment = $req->input('comment');
        $data = DB::table('reviews')
            ->insert(['deal_id' => $deal_id,'written_by' => $written_by,'rating' => $rating,'comment' => $comment,'created'=>date('Y-m-d H:i:s')]);

        if ($data) {
            echo 'Data inserted successfully in reviews.';
        } else {
            echo'Failed to insert data.';
        }
    }
}
