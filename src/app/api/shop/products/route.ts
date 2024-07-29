import { connecttodb } from "@/dbconfig/db";
import { Product } from "@/Shema/product";
import { NextRequest, NextResponse } from "next/server";

connecttodb();
export async function POST(req:NextRequest){
    try {
    const body = await req.json();
    // define scema abd validate it 
    const product = await Product.create(body);
    await product.save();
    return NextResponse.json({
        message: "Product added successfully",
        productId: product._id
    })
    } catch (error) {
        return NextResponse.json({
            message: "Failed to add product",
        })
    }
}

//perctlly working on the server http://localhost:3000/api/shop/products
//praveen change its shcema in lib/shema/product  
// and mongodb url to cheek it in .env folder or directlly in lib/db.ts