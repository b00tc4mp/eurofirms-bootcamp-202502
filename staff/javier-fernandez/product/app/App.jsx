import { useState } from "react"

import { Landing } from "./view/Landing"
import { Register } from "./view/Register"
import { Loging } from "./view/Login"
import { Home } from "./view/Home"


export const App = () => {
    const [view, setView] = useState("landing")

    const handleResisterClick = () => setView("register")

    const handleLoginClick = () => setView("login")

    console.log("App -> render")

    return <>
    {view === "landing" &&
        <Landing 
        onRegisterClick={handleRegisterClick}
        onLoginClick={handleLoginClick}
        >

    }

    {view === "register" &&
        <Register onLoginClick={handleLoginClick}/>

    }

    {view === "login" &&
        <Login onRegisterClick={handleRegisterClick}/>
    }
    
    {view === "home" && <Home />}   
    </>
}