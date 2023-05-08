import { toast } from "react-hot-toast";
import { createPost, deletePost, getAllPost, revalidate, updatePost } from "./apiCall";
import { useRouter } from "next/navigation";
import useMutation from "../module/useMutation";
import useQuery, { refetch } from "../module/useQuery";

interface Option {
  refresh?: boolean;
  back?: boolean;
  message?: string;
}

const postMessage = (message: string) => `Post ${message} Successfully!`;

const handleError = (err: any) => {
  const message = `${err.status} ${err.statusText}`;
  toast.error(message);
};

const handleSuccess = (res: any) => {
  if (!res.status) {
    toast.error(res.statusText);
  }
  return res.status;
};

export const useGetAllPost = () => {
  const result = useQuery({
    id: "/",
    initialData: [],
    fetcher: getAllPost,
    onSuccess: (res) => {
      handleSuccess(res)
    }
  })

  return result
}

export const useCreatePost = () => {
  // const {mutate} = useRevalidate()
  const result = useMutation({
    mutationFn: createPost,
    onSuccess: (res) => {
      if (handleSuccess(res)) {
        toast.success(postMessage("created"));
        refetch('/')
      }
    },
    onError: handleError,
  });
  return result;
};

export const useUpdatePost = () => {
  const router = useRouter();
  const result = useMutation({
    mutationFn: updatePost,
    onSuccess: (res) => {
      if (handleSuccess(res)) {
        toast.success(postMessage("updated"));
        router.refresh();
      }
    },
    onError: handleError,
  });
  return result;
};

export const useDeletPost = () => {
  // const {mutate, isSuccess} = useRevalidate()
  const router = useRouter()
  const result = useMutation({
    mutationFn: deletePost,
    onSuccess: (res) => {
      if (handleSuccess(res)) {
        toast.success(postMessage("deleted"));
        refetch("/")
        router.back()
      }
    },
    onError: handleError,
  });
  return result;
};

// export const useRevalidate = () => {
//   const router = useRouter()
//   const result = useMutation({
//     mutationFn: revalidate,
//     onSuccess:(res) => {
//       if(handleSuccess(res)){
//         router.refresh()
//       }
//     },
//     onError: handleError
//   })
//   return result
// }