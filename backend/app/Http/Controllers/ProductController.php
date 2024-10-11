<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller
{
    /**
     * Fetch products from the Dummy JSON API with query parameters.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        try {
            // Get query parameters for pagination, selection, and search
            $limit = $request->query('limit', 10);  // default limit is 10
            $skip = $request->query('skip', 0);     // default skip is 0
            $select = $request->query('select', '');  // default fields to select
            $search = $request->query('search', '');  // default empty search term

            // Build the query parameters for the external API
            $queryParams = [
                'limit' => $limit,
                'skip' => $skip,
                'select' => $select
            ];

            // Add search query if provided
            if (!empty($search)) {
                $queryParams['q'] = $search;
                $url = env('DUMMY_PRODUCT_LIST_ENDPOINT').'/search';  // Use search endpoint for search queries
            } else {
                $url = env('DUMMY_PRODUCT_LIST_ENDPOINT');  // Use general products endpoint for regular fetch
            }

            // Make a request to the external API
            $response = Http::get($url, $queryParams);

            // Check if the response is successful
            if ($response->successful()) {
                $products = $response->json();

                return response()->json([
                    'success' => true,
                    'products' => $products['products'],
                ], 200);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to fetch products',
                ], 500);
            }
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred: ' . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
