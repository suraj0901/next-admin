import { useReducer } from "react";
interface Mutation<T> {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: Object;
  data: T;
}

interface Prop<T, E> {
  mutationFn: (param: T) => Promise<any>;
  initialData?: E;
  onSuccess: (res: T) => void;
  onError: (err: Object) => void;
}

const useMutation = <T, E>({
  mutationFn,
  initialData,
  onError,
  onSuccess,
}: Prop<T, E>) => {
  const [state, updateState] = useReducer(
    (prev: Mutation<E>, next: Partial<Mutation<E>>) => {
      return { ...prev, ...next };
    },
    {
      isLoading: false,
      isError: false,
      isSuccess: false,
      error: "",
      data: initialData ?? ({} as E),
    }
  );

  const mutate = (body: T) => {
    const rollback = structuredClone(state.data);
    updateState({ isLoading: true });
    mutationFn(body)
      .then((res) => {
        updateState({ isSuccess: true });
        onSuccess(res);
      })
      .catch((error) => {
        updateState({ isError: true, error });
        onError(error);
      })
      .finally(() => {
        updateState({ isLoading: false });
      });
  };
  
  return { ...state, mutate };
};

export default useMutation