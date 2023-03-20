import { createPost } from "@/lib/postApi";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse.json({
        msg: 'Invalid Method'
    })
}
export async function POST(req:Request) {
    const body:PostType = await req.json() 
    if(!body.title || !body.content) return NextResponse.error()
    const post = await createPost(body)
    NextResponse.json({post})
}