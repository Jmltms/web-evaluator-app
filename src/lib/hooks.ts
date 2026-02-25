import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// custom hooks to toggle password visibility in login and signup page
export const useTogglePassword = () => {
  const [isPassword, setIsPassword] = React.useState(false);
  const togglePassword = () => {
    setIsPassword(!isPassword);
  };
  return {
    isPassword,
    togglePassword,
  };
};

// since i use useActionState, useNavigate in router dom cannot be use inside server action. so that i create  custom hook
export const useRedirectuser = (
  path: string,
  isSuccess: boolean = false,
  toastMsg: string,
) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      toast.success(toastMsg, {
        position: "top-center",
        style: { color: "green" },
      });
      navigate(path);
    }
  }, [isSuccess, path, navigate, toastMsg]);
};
