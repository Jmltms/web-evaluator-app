
import { axiosInstance } from "./axios";
import type { ActionState } from "./type";

export const HandleSignup = async(prevState: ActionState, data: FormData,) => {

    const email = data.get("email") as string
    const password = data.get("password") as string
    const confirmPassword = data.get("confirmpassword") as string

    if(password !== confirmPassword){
        return {
            message: '',
            errors: "Passwords does not match",
            success: false,
        }
    }

    return {
        message: 'Signed up successfully',
        success: true,
    }

}
export const HandleLogin = async(prevState: ActionState, data: FormData,) => {
    
    const  email = data.get("email") as string
    const  password = data.get("password") as string

    return {
        message: 'Logged in successfully',
        success: true,
    }
}

export const FetchTask = async (id: number) => {
  const response = await axiosInstance.get(`/user/${id}`)
  return response.data
}

export const CreateTask = async(prevState: ActionState, data: FormData,) => {
    
    const  task = data.get("task") as string
    const id = 1

    try {
        if (!task) {
            return {
                message: '',
                errors: "Task is required",
                success: false,
            }
        }
        await axiosInstance.post("/user", {
            id: id,
            task: [{
                id: 4,
                title: task,
                isDone: false
            }]
        })
         return {
      message: "Task created successfully",
      errors: "",
      success: true,
    }
    }catch (error: any) {
  return {
    message: "",
    errors: error?.response?.data?.message ?? "Failed to create task",
    success: false,
  }
}

}