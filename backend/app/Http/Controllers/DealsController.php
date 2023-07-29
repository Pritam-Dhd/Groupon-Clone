<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

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
        catch (Exception $e) {
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
    public function fetchDealsFromApi()
    {
        $api='https://us-individualizer.databreakers.com/v1/individualizer';
        $body=["accountId"=>"groupon_us","data"=>["dataPoints"=>[["attributes"=>["device"=>["type"=>"desktop","orientation"=>"landscape-primary","resolution"=>["width"=>1095,"height"=>655],"battery"=>["charging"=>"true","level"=>"0.76"],"max_touch_points"=>1,"hardware_concurrency"=>4,"device_pixel_ratio"=>2.0000000298023224],"browser"=>["type"=>"browser","name"=>"Chrome","version"=>"114.0.0.0","family"=>"Chrome","engine"=>"WebKit","engine_version"=>"537.36","user_agent"=>"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36","cookie"=>["_ga"=>"GA1.1.607398079.1687231069","b"=>"0eb4903a-3b2e-b109-a837-dad8f3193fca","c"=>"67e9b8d7f0f2a44e.1687231070.0.1688624986.."],"history"=>["length"=>2],"window_size"=>["width"=>1095,"height"=>655],"language"=>"en-US"],"os"=>["name"=>"Windows","family"=>"Windows","platform"=>"x64","version"=>"10"],"location"=>["ip"=>"10.244.4.1","latitude"=>"null","longitude"=>"null","metro_code"=>"null"],"asn"=>["autonomous_system_number"=>"0","network"=>"null"],"script_id"=>"default","script_version"=>1685109261,"config_version"=>1688483022,"script_type"=>"individualizer","user_identification"=>["id"=>"0eb4903a-3b2e-b109-a837-dad8f3193fca","cross_domain_id"=>"bbbbfe17-2e39-8c77-3a14-c3a3e9ee58bc"],"is_tracking_enabled"=>true,"network"=>["downlink"=>1.9,"effectiveType"=>"4g","rtt"=>200,"saveData"=>false],"custom_attributes"=>["abTestGroup"=>"recommendation","cCookie"=>null,"coordinates"=>"41.88,-87.624","window.databreakersAudience"=>"Control","window.databreakersBucketedInExperiment"=>false],"source_url"=>["page"=>"https=>//www.groupon.com/","pathname"=>"/","hostname"=>"groupon.com","parameters"=>[]]]]]],"recommendation_request"=>["requests"=>[["requestId"=>"homepage_mobile_feed","request"=>["template"=>["templateId"=>"homepage_mobile_feed","count"=>9,"output"=>["scriptAbTest","mainAbTest"],"filter"=>"_customer_item_id is not null AND discount_percent_array is not null AND is_bookable is not null AND med_image is not null AND merchant_name is not null AND price_array is not null AND title_general is not null AND url is not null AND value_array is not null"],"returnedAttributes"=>["title_array","sale_price_start_at","sale_price_end_at","gallery_title","currency","category","inventory_service_id","restricted_reason","restricted","show_discount","_customer_item_id","channel","discount_percent_array","is_bookable","is_travel_bookable_deal","med_image","merchant_name","price_array","purchases_total_displayed","rating_count","rating_value","redemption_locations_short","sale_price","title_general","url","value_array","views_24h"],"contextVariables"=>["city"=>"Chicago","lat"=>"41.88","lng"=>"-87.624","device_type"=>"touch","division_permalink"=>"chicago"],"items"=>[],"userId"=>"0eb4903a-3b2e-b109-a837-dad8f3193fca"]],["requestId"=>"homepage_mobile_inspired_by_history","request"=>["template"=>["templateId"=>"homepage_mobile_inspired_by_history","output"=>["scriptAbTest","mainAbTest"],"filter"=>"_customer_item_id is not null AND discount_percent_array is not null AND is_bookable is not null AND med_image is not null AND merchant_name is not null AND price_array is not null AND title_general is not null AND url is not null AND value_array is not null"],"returnedAttributes"=>["title_array","sale_price_start_at","sale_price_end_at","gallery_title","currency","category","inventory_service_id","restricted_reason","restricted","show_discount","_customer_item_id","channel","discount_percent_array","is_bookable","is_travel_bookable_deal","med_image","merchant_name","price_array","purchases_total_displayed","rating_count","rating_value","redemption_locations_short","sale_price","title_general","url","value_array","views_24h"],"contextVariables"=>["city"=>"Chicago","lat"=>"41.88","lng"=>"-87.624","device_type"=>"touch","division_permalink"=>"chicago"],"items"=>[],"userId"=>"0eb4903a-3b2e-b109-a837-dad8f3193fca"]]],"uniqueRecommendations"=>true,"importanceType"=>"priority"],"synchronous"=>false];
        $response = Http::post($api,$body );
        if ($response->status() == 200) {
            $recommendations = json_decode($response->body(), true)['responses']["homepage_mobile_feed"]["response"]['recommendations'];

            return $recommendations;
        } else {
            return ('error'+ response->body());
        }
    }
    
    public function getDealsUsingApi()
    {
        // Make a request to get the categories data from the API
        $request = Request::create('http://localhost:8000/get-categories', 'GET');
        $categoriesResponse = Route::dispatch($request);
        $categoriesData = $categoriesResponse->getContent();

        // Decode the JSON response of categories data into an associative array
        $categories = json_decode($categoriesData, true);

        // Make a request to get the deals data from the API
        $request1 = Request::create('http://localhost:8000/api-deals', 'GET');
        $dealsResponse = Route::dispatch($request1);
        $deals = json_decode($dealsResponse->getContent(), true);

        // Extract the category names from the $categories data and store them in an array
        $categoryNames = array_column($categories, 'category_name');

        // An array to store the filtered deals
        $filteredDeals = [];

        // Iterate through each deal
        foreach ($deals as $deal) {
            // Get the category data of the deal and decode it into an associative array
            $categoryData = json_decode($deal['attributes']['category'], true);
            // Check if the deal's category or any of its subcategories match any of the given category names
            if (isset($categoryData['Local']) && $this->hasMatchingCategory($categoryData['Local'], $categoryNames, $categories, $deal)) {
    // If there's a match, add the deal to the filteredDeals array
    $filteredDeals[] = $deal;
}

        }

        // Return the filtered deals
        return $filteredDeals;
    }

    // A recursive function to check if the deal's categories or subcategories contain any of the given category names
    private function hasMatchingCategory($categories, $categoryNames, $categoriesData, &$deal)
    {
        foreach ($categories as $category => $subCategories) {
            // Check if the current category matches any of the given category names
            if (in_array($category, $categoryNames, true)) {
                // Find the category ID based on the current category
                foreach ($categoriesData as $categoryData) {
                    if ($categoryData['category_name'] === $category) {
                        // If there's a match, add the category_id to the deal
                        $deal['category_id'] = $categoryData['id'];
                        break; // No need to continue searching once we found the category ID
                    }
                }
                return true;
            }
            // If the current category is an array (subcategories), recursively call the function to check them as well
            if (is_array($subCategories) && $this->hasMatchingCategory($subCategories, $categoryNames, $categoriesData, $deal)) {
                return true;
            }
        }
        // If no match is found in the current category or its subcategories, return false
        return false;
    }

    public function addApiDeals()
    {
        $request = Request::create('http://localhost:8000/get-api-deals', 'GET');
        $Response = Route::dispatch($request);
        $deals = json_decode($Response->getContent(), true);

        foreach ($deals as $deal) {
            $discountPercentArray = json_decode($deal['attributes']['discount_percent_array'], true);
            $discount = $discountPercentArray[0];

            $prices = json_decode($deal['attributes']['price_array'], true);
            $price = $prices[0]/100;

            $redemptionLocations = json_decode($deal['attributes']['redemption_locations_short'], true);
            $city = $redemptionLocations[0]['city'];
            // Check if the deal already exists in the database based on 'deal_name' and 'location'
            $existingDeal = DB::table('deals')
                ->where('deal_name', $deal['attributes']['gallery_title'])
                ->where('location', $city)
                ->first();
            if (!$existingDeal) {
                $data=DB::table('deals')->insert([
                    'category_id' => $deal['category_id'],
                    'deal_name' => $deal['attributes']['gallery_title'],
                    'deal_description' => $deal['attributes']['title_general'],
                    'location' => $city,
                    'image' => $deal['attributes']['med_image'],
                    'deal_price' => $price,
                    'deal_discount' => $discount,
                    'deal_expiry_date' => now()->addDays(30), // Assuming you want to set a default expiry date 30 days from now
                ]);
                if ($data) {
                    echo "Data inserted successfully in deals.";
                } 
                else {
                    echo "Failed to insert deals.";
                }
            }
        }
    }

}
