import React from "react"


// custom hooks to toggle password visibility in login and signup page
export const  useTogglePassword = () => {
    const  [type, setType] = React.useState("password")    
    const  togglePassword = () => {
        type === "password" ? setType("text") : setType("password")
    }
    return {
        type,
        togglePassword
    }
}