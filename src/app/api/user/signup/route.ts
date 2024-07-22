



import connectToDatabase from "@/app/LIB/db";
import { User } from "@/app/LIB/Shema/user";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";


// Define the Zod schema for request body validation


export async function POST(req: NextRequest) {

  try{
    //@ts-ignore
    await connectToDatabase();
    const body = await req.json();
    // Parse and validate the request body


    const existuser = await User.findOne({ email:body.email });
    if (existuser) {
      return NextResponse.json(
        { message: "User alredy exist" },
        { status: 404 }
      );
    }

    // first hash password then save to db
    const user = new User(body);
    await user.save();

    // Create a token
    // add user._id in token
  } 
  
  catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
  return NextResponse.json({
    message: "User created successfully",
  });
}


//its working fine on http://localhost:3000/api/user/signin