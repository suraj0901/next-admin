import { createPost } from "@/app/api/service/postService";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    msg: "Invalid Method",
  });
}
export async function POST(req: Request) {
  const body: PostType = await req.json();
  if(!body.title.trim() || !body.content.trim()) return NextResponse.error()
  const post = await createPost(body);
  return NextResponse.json(post);
}
