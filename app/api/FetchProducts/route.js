import Product from "../../Models/Product";
import connectDb from "../../../db";
import { NextRequest, NextResponse } from "next/server";

connectDb();



export const GET = async (request)=>{
    let Products = await Product.find();
    return NextResponse.json({Products})


}

