import { connecttodb } from "@/dbconfig/db";
import { getDataFromToken } from "@/helpers/getdatafromtoken";
import  Jwt  from "jsonwebtoken";
import { NextRequest, NextResponse } from 'next/server';
import { Document } from 'mongoose';
import { User } from "@/Shema/user";

const key = process.env.JWT_KEY || "SECRET"

connecttodb();


interface IUser extends Document {
    email: string;
}

export async function POST(req: NextRequest) {
    try {
        const userId = await getDataFromToken(req);
       
        const user = await User.findOne({ _id: userId }).select('-password').lean() as IUser | null;

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        const email = user.email;
        
        const paymenttokenData = {
            id:user._id,
           
            email:user.email,
        }
        const paytoken= await Jwt.sign(paymenttokenData,process.env.JWT_KEY!,{expiresIn:'1d'})

        const response= NextResponse.json({
            message:"You can do payment anytime in 24 hours from now",
            success:true
        })

        response.cookies.set("paytoken",paytoken,{
            httpOnly:true
        })
    
        return response;
        
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
