"use client";
import { useDeletPost } from "@/lib/service/postService";

export default function DeletePost({ id }: { id: string }) {
  const { mutate } = useDeletPost();
  const handleDelete = async () => {
    mutate(id);
  };
  return (
    <button
      onClick={handleDelete}
      className="px-5 py-2 text-sm font-medium tracking-wide bg-red-600 text-white rounded-full"
    >
      Delete
    </button>
  );
}
