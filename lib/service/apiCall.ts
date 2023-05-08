import axios from "redaxios";

const base = axios.create({
  baseURL: "/api",
});


export const getAllPost = () => base.get('/post')
export const createPost = (body: any) => base.post("/post", body);
export const updatePost = ({
  published,
  id,
}: {
  published: boolean;
  id: string;
}) => base.put(`/post`, { published,id });
export const deletePost = (id: string) => base.delete(`/post?id=${id}`);
export const revalidate = (env:string) => {
    console.log(`/revalidate?secret=${env}`)
    return base.get(`/revalidate?secret=${env}`);
}
