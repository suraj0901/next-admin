import { getPost } from "@/app/api/service/postService";
import { Post } from "@prisma/client";
import DeletePost from "./component/DeletePost";
import ChangeStatusPost from "./component/ChangeStatusPost";

interface Context {
  params: {
    id: string;
  };
}

export default async function UpdatePost({ params: { id } }: Context) {
  const post: Post | null = await getPost(id);
  return (
    <div className="rounded shadow p-5">
      <div className="flex justify-end items-center gap-2">
        {post && (
          <>
            <ChangeStatusPost published={post.published} id={id} />
            <DeletePost id={id} />
          </>
        )}
      </div>
      <h1 className="text-2xl font-semibold mb-3">{post?.title}</h1>
      <p>{post?.content ?? "No Post Available"}</p>
    </div>
  );
}
