import { getDataFromToken } from "@/helpers/getdatafromtoken";
import { AddtoCart } from "@/Shema/product";
import { NextRequest, NextResponse } from "next/server";


export async function PUT(req:NextRequest){
    
      try {
        const userid = getDataFromToken(req);
        if(!userid){
            return NextResponse.json({ message: "User not found" }, { status: 404 }); 
        }
        const { productid } = await req.json();
        const usercart = await AddtoCart.findOne({ userId: userid})
        if (!usercart) {
            await AddtoCart.create({ userId: userid, products: [productid] });
        } else {
            usercart.products.push(productid);
            await usercart.save();
        }
        return NextResponse.json({ success: true, message: "Product added to cart" });
      } catch (error) {
         return NextResponse.json(error); 
      }
      
}