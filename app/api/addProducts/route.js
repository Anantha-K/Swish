import Product from "../../Models/Product";
import connectDb from "../../../db";
import { NextRequest, NextResponse } from "next/server";

connectDb();

export const POST = async (request) => {
  try {
    // Hardcoded values for the new product
    const title = "Hardcoded Title";
    const slug = "hardcoded-slug";
    const desc = "This is a hardcoded description.";
    const img = "hardcoded-image-url.jpg";
    const category = "Hardcoded Category";
    const size = "Hardcoded Size";
    const color = "Hardcoded Color";
    const price = 99.99; // Hardcoded price
    const availableQty = 10; // Hardcoded available quantity

    // Create a new product instance
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

    // Save the new product to the database
    await newProduct.save();

    return NextResponse.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to add product" }, { status: 500 });
  }
};
