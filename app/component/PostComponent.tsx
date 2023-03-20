import { Post } from "@prisma/client";
import Link from "next/link";

export default function PostComponent({ post }: { post: Post }) {
  return (
    <div className="shadow p-5 rounded">
      <Link
        href={`/updatePost/${post.id}`}
        className="text-2xl font-semibold mb-2"
      >
        {post.title}
      </Link>
      <p>{post.content}</p>
    </div>
  );
}
