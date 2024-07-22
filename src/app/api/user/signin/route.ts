


import connectToDatabase from "@/app/LIB/db";
import { User } from "@/app/LIB/Shema/user";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";


// Define the Zod schema for request body validation


export async function POST(req: NextRequest) {

  try{
    await connectToDatabase();
    const body = await req.json();
    // Parse and validate the request body


    const existuser = await User.findOne({ email:body.email });
    if (!existuser) {
      return NextResponse.json(
        { message: "User does not exist. Signup first" },
        { status: 404 }
      );
    }

    // first hasr password to Compare passwords
    if(existuser.password!=body.password) {
        return NextResponse.json(
            { message: "Incorrect password" },
            { status: 401 }
          );
    }


    // Create a token
    // add user._id in token

  } 
  
  catch (error) {

    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
  return NextResponse.json({
    message: "User login successfully",
  });
}


//its working fine on http://localhost:3000/api/user/signin