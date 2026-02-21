
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
