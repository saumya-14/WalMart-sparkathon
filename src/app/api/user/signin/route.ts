


import { connecttodb } from "@/dbconfig/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
import { signinSchema } from "@/ValidateSchema/schema";
import { User } from "@/Shema/user";
const key = process.env.JWT_KEY||"SECRET"
connecttodb();



export async function POST(req: NextRequest) {

  try{
    const body = await req.json();
    // Parse and validate the request body
    const { success } = signinSchema.safeParse(body);
    if(!success){
      return NextResponse.json({message: "Invalid input data"}, {status: 400});
    }

    const existuser = await User.findOne({ email:body.email });
    if (!existuser) {
      return NextResponse.json(
        { message: "User does not exist. Signup first" },
        { status: 404 }
      );
    }

    // first hasr password to Compare passwords

    const validpassword=await bcrypt.compare(body.password,existuser.password);
    if(!validpassword) {
        return NextResponse.json(
            { message: "Incorrect password" },
            { status: 401 }
          );
    }


    const token = jwt.sign({userid:existuser._id},key);

      const res =  NextResponse.json({
        message: "User login successfully",
        token:token
      });
      res.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',// Set to false for local development, true for production
        maxAge: 24*3600, // Token expiry time in seconds
        path: '/', // Path for which the cookie is valid
      });
      return res
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
