import type { AxiosError } from "axios";
import { axiosInstance } from "./axios";
import type { ActionState } from "./type";

export const HandleSignup = async (_: ActionState, data: FormData) => {
  const email = data.get("email") as string;
  const password = data.get("password") as string;
  const confirmPassword = data.get("confirmpassword") as string;

  // simple validation if password not Match
  if (password !== confirmPassword) {
    return {
      message: "",
      errors: "Passwords does not match",
      success: false,
    };
  }
  try {
    await axiosInstance.post("User", {
      email: email,
      passwordHash: password,
    });
    return {
      message: "Account created successfully.",
      errors: "",
      success: true,
    };
  } catch (error) {
    const err = error as AxiosError<Record<string, string | number>>;
    let errorMsg: string;
    if (err.response?.status === 409) {
      errorMsg = "Please try another email to avoid conflict.";
    } else {
      errorMsg = "Error Occurred upon signup. Try again.";
    }
    return {
      message: "",
      errors: errorMsg,
      success: false,
    };
  }
};
export const HandleLogin = async (_: ActionState, data: FormData) => {
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  try {
    const response = await axiosInstance.post("User/login/", {
      email,
      password,
    });
    localStorage.setItem("userId", response?.data.id);
    localStorage.setItem("email", response?.data.email);
    await FetchTask(response?.data.id);
    return {
      message: "Login Successfully",
      errors: "",
      success: true,
    };
  } catch (error) {
    const err = error as AxiosError<Record<string, string>>;
    return {
      message: "",
      errors: err.response?.data?.message || "Something went wrong.",
      success: false,
    };
  }
};
export const FetchTask = async (userID: string | null) => {
  const response = await axiosInstance.get(`Tasks/${userID}`);
  return response.data;
};
export const CreateTask = async (_: ActionState, data: FormData) => {
  const userId = localStorage.getItem("userId");
  const task = data.get("task") as string;
  try {
    // await FetchTask();
    await axiosInstance.post("Tasks", {
      title: task,
      userId: userId,
      isDone: false,
    });
    // await FetchTask();
    return {
      message: "Task created successfully",
      errors: "",
      success: true,
    };
  } catch (error) {
    const err = error as AxiosError<Record<string, string>>;
    return {
      message: "",
      errors: err.response?.data?.message || "Something went wrong.",
      success: false,
    };
  }
};
export const EditTaskCreated = async (_: ActionState, data: FormData) => {
  const userId = localStorage.getItem("userId");
  try {
    const id = data.get("id");
    const isDone = data.get("isDone") as string;
    const title = data.get("task") as string;
    const done = isDone ? true : false;

    axiosInstance.put(`Tasks/${id}`, {
      userId,
      title,
      isDone: done,
    });

    return {
      message: "Task Update Successfully",
      errors: "",
      success: true,
    };
  } catch (error) {
    const err = error as AxiosError<Record<string, string>>;
    return {
      message: "",
      errors: err.response?.data?.message || "Something went wrong.",
      success: false,
    };
  }
};
export const DeleteTaskCreated = async (_: ActionState, data: FormData) => {
  try {
    const id = data.get("taskId");
    await axiosInstance.delete(`Tasks/${id}`);
    return {
      message: "Task Deleted Successfully",
      errors: "",
      success: true,
    };
  } catch (error) {
    const err = error as AxiosError<Record<string, string>>;
    return {
      message: "",
      errors: err.response?.data?.message || "Something went wrong.",
      success: false,
    };
  }
};
