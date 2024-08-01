import { connecttodb } from "@/dbconfig/db";
import { Product } from "@/Shema/product";
import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

// Connect to the database
connecttodb();

export async function POST(req: NextRequest) {
  try {
    // Parse the form data
    const formData = await req.formData(); // Call formData correctly

    // Log the received form data for debugging
    console.log("Received form data:", Array.from(formData.entries()));

    // Handle file upload
    const file = formData.get('image') as File | null; 
    if (!file) {
      return NextResponse.json({
        message: "No file uploaded",
        success: false,
      });
    }

    // Define the path to save the uploaded file
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');

    // Ensure the 'uploads' directory exists
    await mkdir(uploadsDir, { recursive: true });

    const uploadPath = path.join(uploadsDir, file.name);

    // Convert file to buffer and save it
    const bufferData = await file.arrayBuffer();
    const buffer = Buffer.from(bufferData);
    
    console.log("Saving file to:", uploadPath);
    await writeFile(uploadPath, buffer);

    // Extract other form data
    const title = formData.get('title') as string;
    const price = formData.get('price') as string;
    const sellprice = formData.get('sellprice') as string;
    const description = formData.get('description') as string;

    // Validate the data
    if (!title || !price || !sellprice || !description) {
      return NextResponse.json({
        message: "Title, price, sellprice, and description are required fields",
        success: false,
      });
    }

    // Create and save the product
    const product = new Product({
      title,
      price: parseFloat(price),
      sellprice: parseFloat(sellprice),
      description,
      image: `/uploads/${file.name}`, // Save the path to the image
    });

    await product.save();

    return NextResponse.json({
      message: "Product added successfully",
      productId: product._id,
      success: true,
    });
  } catch (error) {
    console.error("Error adding product:", error.message);
    return NextResponse.json({
      message: "Failed to add product",
      success: false,
      error: error.message,
    });
  }
}
