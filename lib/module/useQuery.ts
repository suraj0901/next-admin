import { useEffect, useReducer } from "react";
import { toast } from "react-hot-toast";
import { getAllPost } from "../service/apiCall";

interface Query {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: Object;
  data: Object;
}

interface Prop {
    id:string,
  fetcher: () => Promise<any>;
  onSuccess?: (res: Object) => void;
  onError?: (err: Object) => void;
  initialData: any
}
const handleError = (err: any) => {
  const message = `${err.status} ${err.statusText}`;
  toast.error(message);
};

const map = new Map();
export const refetch = (path: string) => {
  if (!map.has(path)) return;
  map.get(path)();
};

const useQuery = ({id, fetcher, initialData, onError = handleError, onSuccess }: Prop) => {
  const [state, updateState] = useReducer(
    (prev: Query, next: Partial<Query>) => {
      return { ...prev, ...next };
    },
    {
      isLoading: false,
      isError: false,
      isSuccess: false,
      error: "",
      data: initialData ?? {},
    }
  );
  const refetch = () => {
    updateState({ isLoading: true });
    fetcher()
      .then((res) => {
        updateState({ isSuccess: true, data:res.data});
        onSuccess?.(res);
      })
      .catch((error) => {
        updateState({ isError: true, error });
        onError(error);
      })
      .finally(() => {
        updateState({ isLoading: false });
      });
  };

  useEffect(() => {
    map.set(id, refetch);
    refetch();
  }, []);
  return { ...state, refetch };
};

export default useQuery;
