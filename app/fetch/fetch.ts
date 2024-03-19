import connectDb from '/Users/ananthakrishnan/Documents/Anandu/Swish/db.js'
import Product from '../Models/Product'
import { NextRequest, NextResponse } from "next/server";
import { cache } from 'react';

// export const revalidate =3600

const getLatest = cache(async ()=>{
    await connectDb();
    const products = await Product.find({}).sort({_id:-1}).limit(4).lean();
    return products as Product[];

})

const getSlug=cache(async(slug: string)=>{
    await connectDb();
    const product = await Product.find({slug}).lean()
    return product as Product

})

const fetch ={getLatest};
export default fetch