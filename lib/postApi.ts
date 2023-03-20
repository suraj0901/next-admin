import prisma from "./prisma";
import { Post } from "@prisma/client";

export const getAllPost = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};

export const createPost = async (data: PostType) => {
  const post = await prisma.post.create({ data });
  return post
};

export const updatePost = async (id: string, data: Partial<Post>) => {
  const post = await prisma.post.update({
    where:{
      id
    },
    data
  })
  return post
}

export const deletePost = async (id:string) => {
  const post = await prisma.post.delete({
    where: {
      id
    }
  })
  return deletePost
}