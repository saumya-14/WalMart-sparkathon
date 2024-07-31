import {z} from "zod";


export const signupSchema=z.object({
    Username:z.string().min(2,"Username must be atleast 2 characters")
    .max(10,"Username must not be more than 10 characters")
    .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character"),
    email:z.string().email({message:"Invalid email address"}),
    passwrod:z.string().min(6,{message:"password must be atleast 6 character"}),
    avatar:z.string().optional()
})

export const signinSchema=z.object({
    email:z.string().email({message:"Invalid email address"}),
    passwrod:z.string().min(6,{message:"password must be atleast 6 character"}),
})