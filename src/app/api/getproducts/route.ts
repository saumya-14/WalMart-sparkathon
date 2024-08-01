import { connecttodb } from "@/dbconfig/db";
import { Product } from "@/Shema/product";
import { NextResponse } from "next/server";

// Connect to the database
connecttodb();

export async function GET() {
  try {
    // Fetch all products from the database
    const products = await Product.find();

    // Return the products in the response
    return NextResponse.json({
      message: "Products retrieved successfully",
      success: true,
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return NextResponse.json({
      message: "Failed to fetch products",
      success: false,
      error: error.message,
    });
  }
}
