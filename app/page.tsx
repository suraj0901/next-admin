"use client"
// import Image from "next/image";
import { Post } from "@prisma/client";
// import { getAllPost } from "@/app/api/service/postService";
import PostComponent from "./component/PostComponent";
import { useGetAllPost } from "@/lib/service/postService";
import Loading from "./loading";
import { useSession } from "next-auth/react";

export default function PostPage({}) {
  // const { } = useSession()
  const {isLoading, data:posts} = useGetAllPost()
  if(isLoading) return <Loading />
  const content = (posts as Post[]).map((post) => (
    <PostComponent key={post.id} post={post} />
  ));

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 ">{content}</div>
  );
}
