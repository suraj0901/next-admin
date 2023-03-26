import axios from "redaxios"

const base = axios.create({
    baseURL: "/api"
})

export const createPost = (body:any) => base.post('/post', body)
export const updatePost = ({published, id}:{published:boolean, id:string}) => base.put(`/post/${id}`, {published})
export const deletePost = (id:string) => base.delete(`/post/${id}`)