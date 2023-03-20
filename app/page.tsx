// import Image from "next/image";
import { Post } from "@prisma/client";
import { getAllPost } from "@/lib/postApi";
import PostComponent from "./component/PostComponent";

export default async function PostPage() {
  const posts: Post[] = await getAllPost();

  const content = posts.map((post) => (
    <PostComponent key={post.id} post={post} />
  ));
  return content;
}
