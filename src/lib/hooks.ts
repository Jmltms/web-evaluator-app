import React from "react"

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