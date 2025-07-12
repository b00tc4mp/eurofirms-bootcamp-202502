import { logic } from '../logic'
import { useContext } from '../context'

export const Login =({ onRegisterClicked, onUserLoggedIn }) => {
    const { alert } = useContext()

    const handleRegisterClick = () => onRegisterClicked()

    const handleLoginSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)

            .then(() => {
                form.reset()

                onUserLoggedIn()
            })
            .catch(error => {
                console.error(error)

                alert(error.message)
            })
        } catch(error) {
            console.error(error)

            alert(error.message)
        }
    }

    console.log('Login -> render')

    return (
        <div className="px-5 py-6 min-h-screen flex flex-col justify-center items-center bg-white text-center">
            <div className="w-full max-w-md">
                <i className="text-4xl font-bold block mb-4 text-blue text-center">🏋️ GymPlan 🏋️</i>

                <h1 className="text-2xl font-semibold text-[#0ab5ee] mb-6">Login to your account</h1>

                <form className="flex flex-col gap-5" onSubmit={handleLoginSubmit}>

                    <div className="flex flex-col gap-2">
                        <label className="font-medium" htmlFor="username">Username</label>
                        <input
                            className="border border-gray-400 focus:border-[#0ab5ee] focus:outline-none bg-[#cde5ed] rounded px-3 py-2 transition-colors duration-300"
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Your username"
                        />    
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-medium" htmlFor="password">Password</label>
                        <input
                            className="border border-gray-400 focus:border-[#0ab5ee] focus:outline-none bg-[#cde5ed] rounded px-3 py-2 transition-colors duration-300"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Your password"
                        />    
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <a
                            className="text-sm no-underline text-[#0ab5ee] font-medium hover:underline"
                            href="#"
                            onClick={handleRegisterClick}>Don't have an account</a>

                        <button
                            className="text-white bg-[#0ab5ee] hover:bg[#119fd3] transition-colors duration-300 font-medium rounded-lg px-4 py-2"   
                            type="submit">Login</button> 
                    </div>

                </form>

            </div>
        </div>
    )
}