import { connecttodb } from "@/dbconfig/db";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
import { signupSchema } from "@/ValidateSchema/schema";
import { User } from "@/Shema/user";
import { AddtoCart } from "@/Shema/product";
const key = process.env.JWT_KEY||"SECRET"
connecttodb();

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
    
    if(validate(signupSchema)){
      const body = await req.json();
      const {Username,email,password,avatar}=await req.json();
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
      // if (existUsername) {
      //   return NextResponse.json(
      //     { message: "User with this username alredy exist" },
      //     { status: 404 }
      //   );
      // }
  
      // first hash password then save to db
      const hashedPassword = await bcrypt.hash(password, 10);
    
      // Create a new user object
      const newUser = new User({
        Username,
        email,
        password: hashedPassword,
        avatar,
      });


      
      // Save the user to the database
      const user = await newUser.save();

      const usercart = new AddtoCart({
        userId:user._id,
        products:[]
      });

      await usercart.save();
      // Create a token add user._id in token
      const token = jwt.sign({userid:newUser._id},key);

      const res =  NextResponse.json({
        message: "User created successfully",
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
    
    
    return NextResponse.json(
      { 
        message: "incorrect inputs",
      },
      { status: 500 },
    );
  

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
