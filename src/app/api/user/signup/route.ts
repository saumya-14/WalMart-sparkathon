import  { connecttodb } from "@/app/LIB/db";
import { User } from "@/app/LIB/Shema/user";
import { signupSchema } from "@/app/LIB/ValidateSchema/signupSchema";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from "jsonwebtoken"
const key = process.env.JWT_KEY ||"";
connecttodb()

// Define the Zod schema for request body validation
const validate = (Schema: any) => async (req: NextApiRequest, res: NextApiResponse, next: Function) => {
  try {
    const parseBody = await Schema.parseAsync(req.body);
    next();
  } catch (error) {
    res.status(400).send(error);
  }
};

export async function POST(req: NextRequest) {

  try{    
    // Parse and validate the request body
    
    if(validate(signupSchema)){
      const body = await req.json();
      const existuser = await User.findOne({ email:body.email });
      const existUsername=await User.findOne({Username:body.Username});
  
      //checking wether the user with ths email already  exist or not 
      if (existuser) {
        return NextResponse.json(
          { message: "User this email alredy exist" },
          { status: 404 }
        );
      }
  
      //checking wether the user with ths username already  exist or not 
      if (existUsername) {
        return NextResponse.json(
          { message: "User with this username alredy exist" },
          { status: 404 }
        );
      }
  
      // first hash password then save to db
      const user = new User(body);
      await user.save();
  
      const token = jwt.sign({userid:user._id},key);
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
    
    
    return NextResponse.json({
      message: "Please  Enter valid input",
    });

    }
    catch (error:any) {
      return NextResponse.json(
        { 
          message: "Internal server error",
          error:error.message || "Unknown error"
        },
        { status: 500 },
      );
    }
 
}


//its working fine on http://localhost:3000/api/user/signup
//all comment work done by somya