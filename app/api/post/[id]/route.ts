import { deletePost, updatePost } from "@/app/api/service/postService";
import { NextApiResponse } from "next";
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
  return NextResponse.json(post);
}

export async function DELETE(req: Request, {params}: Context) {
    const id = params.id
    const post = await deletePost(id)
    return NextResponse.json(post)
}
