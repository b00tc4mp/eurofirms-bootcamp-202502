import { logic } from '../logic'

export const Login = ({ onRegisterClicked, onUserLoggedIn }) => {
    //const onRegisterClicked = props.onRegisterClicked
    //const onUserLoggedIn = props.onUserLoggedIn

    const handleRegisterClick = () => onRegisterClicked()

    const handleLoginSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)

            form.reset()

            onUserLoggedIn()
        } catch (error) {
            alert(error.message)
        }
    }

    console.log('Login -> render')

    return <div className="px-5 py-6">

        <i className="text-2xl block mb-4">Logo</i>

        <div className="mt-2">
            <h1 className="text-[22px] font-bold text-[#119fd3] mb-4">Login page</h1>

            <form className="flex flex-col gap-5" onSubmit={handleLoginSubmit}>

                <div className="flex flex-col gap-[10px]">
                    <label 
                    className="font-medium" htmlFor="username">Username
                    </label>
                    <input 
                    className="border border-black bg-[#cde5ed] rounded px-3 py-2" 
                    type="text" 
                    name="username" 
                    id="username" 
                    placeholder="Your username" />
                </div>

                <div className="flex flex-col gap-[10px]">
                    <label 
                    className="font-medium" htmlFor="password">Password
                    </label>
                    <input 
                    className="border border-black bg-[#cde5ed] rounded px-3 py-2" 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Your password" />
                </div>

                <div className="flex justify-between items-center mt-4">
                    <a 
                    className="no-underline text-black font-medium" href='#' 
                    onClick={handleRegisterClick}>Register
                    </a>
                    <button 
                    className="text-white bg-[#0ab5ee] font-thin border-none rounded-[10px] cursor-pointer px-4 py-2" type="submit">Login
                    </button>
                </div>
            </form>
        </div>
    </div>
}


