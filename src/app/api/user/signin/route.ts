import { connecttodb } from "@/app/LIB/db";
import { User } from "@/app/LIB/Shema/user";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
const key = process.env.JWT_KEY ||"";
import cookie from "cookie"
connecttodb();

// Define the Zod schema for request body validation


export async function POST(req: NextRequest) {

  try{
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


    const token = jwt.sign({userid:existuser._id},key);

    const res =  NextResponse.json({
      message: "User Login successfully",
      token:token
    });

    res.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Set to true in production
      maxAge: 24*3600, // Token expiry time in seconds
      path: '/', // Path for which the cookie is valid
    });
    return res;

  } 
  
  catch (error) {

    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}


//its working fine on http://localhost:3000/api/user/signin
//all comment work done by somya