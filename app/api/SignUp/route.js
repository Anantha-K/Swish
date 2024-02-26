import connectDb from "../../../db";
import User from "../../Models/User";

import { NextRequest, NextResponse } from "next/server";


connectDb();

export const POST = async (request, response) => {
    const name="Anandu";
    const email="hi@hi.com";
    const password= "1234";

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return NextResponse.json(
                { message: "Email already exists" },
                { status: 400 }
            );
        }

        const newUser = new User({ name, email, password });
        await newUser.save();
       
        return NextResponse.json({ message: "User created" }, { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error.message);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
};