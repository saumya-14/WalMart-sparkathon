import {v2 as cloudinary} from "cloudinary"
import { response } from "express";
import fs, { futimesSync } from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET// Click 'View Credentials' below to copy your API secret
});

const uploadoncloudinary=async(localfilepath:any)=>{
    try {
        if(!localfilepath) return null;
        cloudinary.uploader.upload(localfilepath,{
            resource_type:'auto'
        })
        console.log("file is uploaded on cloudinary")
        return response
    } catch (error) {
         fs.unlinkSync(localfilepath)
         return null;
    }
}


export {uploadoncloudinary}