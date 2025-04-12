import { useState } from "react"

import { Landing } from "./view/Landing"
import { Register } from "./view/Register"
import { Loging } from "./view/Login"
import { Home } from "./view/Home"


export const App = () => {
    // const viewState = useState{"landing"}
    // const view = viewState[0]
    // const setView = viewState[1]
    // const [view, setView] = useState{"landing"}

    const {count, setCount} = useState(0)

    const handleCounterClick = () => setCount(count + 1)

    console.log("App -> render")

    return <>
        <button className="border px-5 bg-blue-500 text-white cursor-pointer"
            onClick={handleCounterClick}
        >
            {count}
            </button>

        <Landing/>
        { //  view === "landing" && <Landing/> }

        // { view === "register" && <Register />}

        //{ view === "login" && <Login /> }

        { // view == "home" && <Home />} 
    </>
}