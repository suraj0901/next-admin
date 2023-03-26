import { Post } from "@prisma/client";
import Link from "next/link";

export default function PostComponent({ post }: { post: Post }) {
  return (
    <Link className="shadow p-5 rounded" href={`/updatePost/${post.id}`}>
      <h1 className="text-2xl font-semibold mb-2">{post.title}</h1>
      <p>{post.content}</p>
    </Link>
  );
}
