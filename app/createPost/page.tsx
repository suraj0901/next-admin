"use client";
import { useReducer, useState } from "react";
// import { useRouter } from "next/navigation";

const Spinner = (
  <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export default function CreatePostPage() {
  const [post, updatePost] = useReducer(
    (prev: PostType, next: Partial<PostType>) => {
      return { ...prev, ...next };
    },
    {
      title: "",
      content: "",
    }
  );
  const [isSaving, setIsSaving] = useState(false);
  // const router = useRouter();
  const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSaving(true);
    fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log({ res });
        // router.push("/");
      })
      .catch((err) => {
        console.log({ err });
      })
      .finally(() => {
        setIsSaving(false);
      });
  };

  const disableSaveButton = !post.title.trim() || !post.content.trim();
  return (
    <div className="shadow-sm p-5 rounded bg-gray-50 ">
      <div className="mx-auto max-w-4xl py-5 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span className="text-3xl text-gray-700 font-medium tracking-tighter mb-5">
            Create Post
          </span>
          <button
            onClick={handleSave}
            disabled={disableSaveButton}
            className={`rounded py-2 px-8 font-medium flex items-center tracking-wide ${
              disableSaveButton
                ? "text-gray-500 bg-gray-300 hover:cursor-not-allowed"
                : "text-white bg-teal-500"
            }`}
          >
            {isSaving ? Spinner : <span>Save</span>}
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
              updatePost({ title: e.target.value });
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
            rows={5}
            onChange={(e) => {
              updatePost({ content: e.target.value });
            }}
          />
        </section>
      </div>
    </div>
  );
}
