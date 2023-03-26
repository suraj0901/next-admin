// import Image from "next/image";
import { Post } from "@prisma/client";
import { getAllPost } from "@/app/api/service/postService";
import PostComponent from "./component/PostComponent";

export default async function PostPage() {
  const posts: Post[] = await getAllPost();

  const content = posts.map((post) => (
    <PostComponent key={post.id} post={post} />
  ));

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 ">{content}</div>
  );
}
