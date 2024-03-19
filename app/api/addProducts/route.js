import Product from "../../Models/Product";
import connectDb from "../../../db";
import { NextRequest, NextResponse } from "next/server";

connectDb();

export const POST = async (request) => {
  try {
    // Hardcoded values for the new product
    const {title,slug,desc,img,category,size,color,price,availableQty}= await request.json();
    const newProduct = new Product({
      title,
      slug,
      desc,
      img,
      category,
      size,
      color,
      price,
      availableQty
    });

    await newProduct.save();

    return NextResponse.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to add product" }, { status: 500 });
  }
};
