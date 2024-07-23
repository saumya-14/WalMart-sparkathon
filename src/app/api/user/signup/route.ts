import connectToDatabase from "@/app/LIB/db";
import { User } from "@/app/LIB/Shema/user";
import { signupSchema } from "@/app/LIB/ValidateSchema/signupSchema";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs'

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
    //@ts-ignore
    await connectToDatabase();
    
    
   
    
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
      if (existUsername) {
        return NextResponse.json(
          { message: "User with this username alredy exist" },
          { status: 404 }
        );
      }
  
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
      // Create a token
      // add user._id in token
      return NextResponse.json({
        message: "User created successfully",
      });
    } 
    
    
    
  

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
