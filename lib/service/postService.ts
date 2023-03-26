import { toast } from "react-hot-toast";
import { createPost, deletePost, updatePost } from "./apiCall";
import { useRouter } from "next/navigation";
import useMutation from "../module/useMutation";

interface Option {
    refresh?: boolean;
    back?:boolean
}

const postMessage = (message: string) => `Post ${message} Successfully!`;
const configureOption = (message: string, option:Option = {refresh: false, back:false}) => {
    const router = useRouter()
  return {
    onSuccess: (res: any) => {
      if (!res.status) {
        console.log({statusText: res.statusText})
        return toast.error(res.statusText);
      }
      toast.success(message);
      if(option.refresh) router.refresh()
      if(option.back) router.back()
    },
    onError: (err: any) => {
      console.log({err});
      const message = `${err.status} ${err.statusText}`
      toast.error(message);
    },
  };
};


export const useCreatePost = () => {
  const result = useMutation({
    mutationFn: createPost,
    ...configureOption(postMessage("created")),
  });
  return result;
};

export const useUpdatePost = <T>(initialData?:T) => {
  const result = useMutation({
    mutationFn: updatePost,
    initialData,
    ...configureOption(postMessage("updated")),
  });
  return result;
};

export const useDeletPost = () => {
  const result = useMutation({
    mutationFn: deletePost,
    ...configureOption(postMessage("deleted"), {back: true}),
  });
  return result
};
