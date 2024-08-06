import { connecttodb } from "@/dbconfig/db";
import { Product } from "@/Shema/product";
import { NextRequest, NextResponse } from "next/server";

// Connect to the database
connecttodb();

export async function GET(req: NextRequest) {
  try {
    // Fetch products from the database
    const products = await Product.find({});

    // Set CORS headers
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    return new NextResponse(JSON.stringify(products), { headers });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new NextResponse("Failed to fetch products", {
      headers,
      status: 500,
    });
  }
}
