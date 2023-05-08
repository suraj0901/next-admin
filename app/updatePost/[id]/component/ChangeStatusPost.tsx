"use client";
import Spinner from "@/component/Spinner";
import { useUpdatePost } from "@/lib/service/postService";
import { useRouter } from "next/navigation";

interface Prop {
  published: boolean;
  id: string;
}

export default function ChangeStatusPost({ published, id }: Prop) {
  const { mutate } = useUpdatePost();
  const handleUpdate = () => {
    mutate({ published: !published, id });
  };
  return (
    <button
      onClick={handleUpdate}
      className={`px-5 py-2 text-sm font-medium tracking-wide flex rounded-full ${
        published
          ? "ring-1 ring-green-500 text-green-500 hover:bg-green-700 hover:text-white "
          : "bg-green-700 text-white "
      }`}
    >
      {published ? "UnPublish" : "Publish"}
    </button>
  );
}
