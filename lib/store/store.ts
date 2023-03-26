import createStore from "./createStore";

export const { updateStore, useStore } = createStore({
  toastVisibility: false,
  toastMessage: "",
});

export const hideToast = () => {
  updateStore({ toastVisibility: false });
};

export const showToast = (message: string) => {
  updateStore({ toastVisibility: true, toastMessage: message });
};
