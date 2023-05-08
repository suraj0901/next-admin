"use client";

import { useRouter } from "next/navigation";
import Spinner from "@/component/Spinner";
import { useCreatePost } from "@/lib/service/postService";
import { useState } from "react";

export default function CreatePostPage() {
  const [post, updatePost] = useState({
    title: "",
    content: "",
  });
  const { isLoading, mutate } = useCreatePost();
  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    mutate(post);
    // updatePost({ title: "", content: "" });
  };

  const disableSaveButton = !post.title.trim() || !post.content.trim();
  return (
    <div className="shadow-sm p-5 rounded bg-gray-50 ">
      <div className="p-5 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span className="text-3xl text-gray-700 font-medium tracking-tighter mb-5">
            Create Post
          </span>
          {/* <ChangeStatusPost published={false} id={id} /> */}
          <button
            onClick={handleSave}
            disabled={disableSaveButton}
            className={`rounded-full py-2 px-8 font-medium flex items-center tracking-wide ${
              disableSaveButton
                ? "text-gray-500 bg-gray-300 hover:cursor-not-allowed"
                : "text-white bg-teal-500"
            }`}
          >
            {isLoading && <Spinner />} <span>Save</span>
          </button>
        </div>
        <section className="flex flex-col gap-2">
          <label htmlFor="title" className="font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            className="rounded py-2 px-4 outline-0 focus:drop-shadow-md"
            name="title"
            value={post.title}
            onChange={(e) => {
              updatePost((prev) => ({ ...prev, title: e.target.value }));
            }}
          />
        </section>
        <section className="flex flex-col gap-2">
          <label htmlFor="content" className="font-medium text-gray-700">
            Content
          </label>
          <textarea
            className="rounded py-2 px-4 outline-0 focus:drop-shadow-md"
            name="content"
            value={post.content}
            rows={10}
            onChange={(e) => {
              updatePost((prev) => ({ ...prev, content: e.target.value }));
            }}
          />
        </section>
      </div>
    </div>
  );
}
