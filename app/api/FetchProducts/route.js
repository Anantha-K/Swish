import connectDb from "../../../db";
import User from "../../Models/User";

import { NextRequest, NextResponse } from "next/server";


connectDb();

export const POST = async (request)=>{
    const {email,password}=await request.json();
    
    try{
       
        
        const Users=await User.findOne({email});
        if(Users){
            if(Users.password === password){
            
                        
                        return NextResponse.json({message:"Successully logged in"},{status:200})
                       
                
            }else{
              return  NextResponse.json({message:"Incorrect password"},{status:400})

            }
        }else{
            return NextResponse.json({message:"No user"},{status:400})

        }
    }
    catch(error){
        return NextResponse.json({message:"No user"},{status:400})
    }
}
