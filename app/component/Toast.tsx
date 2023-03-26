"use client";

import { toast } from "react-toastify";

const Toast = () => {
  const handleToast = () => {
    toast.success("This is success toast from");
  };
  return <button onClick={handleToast}>Show Toast</button>;
};

export default Toast;
