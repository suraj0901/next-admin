import { deletePost, updatePost } from "@/lib/postApi";
import { NextResponse } from "next/server";

type Context = {
    params: {
        id: string
    }
}

export async function PUT(req: Request, { params }: Context) {
  const body: Partial<PostType> = await req.json();
  const id = params.id;
  const post = await updatePost(id, body);
  NextResponse.json(post);
}

export async function DELTE(req: Request, {params}: Context) {
    const id = params.id
    const post = await deletePost(id)
    return post
}
