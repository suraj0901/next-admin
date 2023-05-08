import {
  createPost,
  deletePost,
  getAllPost,
  updatePost,
} from "@/app/api/service/postService";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const post = await getAllPost();
    return NextResponse.json(post);
  } catch (err) {
    return NextResponse.error();
  }
}

export async function PUT(req: NextRequest, res: NextApiResponse) {
  try {
    const body = await req.json();
    const post = await updatePost(body.id!, body);
    return NextResponse.json(post);
  } catch (error) {
    console.log({ error });
    return res.status(500).send("Error");
  }
}

export async function DELETE(req: NextRequest, res: NextApiResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    res.statusCode = 200;

    const post = await deletePost(id!);
    // console.log({id, post})
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function POST(req: Request) {
  const body: PostType = await req.json();
  if (!body.title.trim() || !body.content.trim()) return NextResponse.error();
  const post = await createPost(body);
  return NextResponse.json(post);
}
