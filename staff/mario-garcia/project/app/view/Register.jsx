import { logic } from '../logic'

import { useContext } from '../context'

export const Register = ({ onLoginClicked, onUserRegistered }) => {

    const { alert } = useContext()

    const handleLoginClick = () => onLoginClicked()
    // Arrow's Function App.jsx NAVIGATE = Line 25 -- Login is SHOWED 
    // ROUTES LANDING = Line 85 + ROUTES REGISTER = Line 94
    // It is LINKED to the Button -- Login is SHOWED

    const handleRegisterSubmit = event => {

        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        try {
            logic.registerUser(name, email, username, password)
                .then(() => {
                    form.reset()

                    onUserRegistered() //This prop lets me to communicate with App.jsx NAVIGATE (Line 27) and ROUTES REGISTER = Line 95 -- Login is SHOWED
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    console.log('Register -> render')

    return <div className="p-5">

        <i className="text-2xl font-extrabold text-blue-900">ACONPP</i>

        <h1 className="text-3xl text-blue-700 font-bold py-2">REGISTER Page</h1>

        <form className="mt-2 flex flex-col gap-4" onSubmit={handleRegisterSubmit}>

            <div className="flex flex-col gap">

                <label htmlFor="name" className="text-xl text-blue-500 font-semibold">Name:</label>

                <input className="my-2 border-2 px-1 rounded-md bg-blue-100 border-blue-300 py-1" type="text" id="name" name="name" placeholder="Your full name" />

            </div>

            <div className="flex flex-col gap">

                <label htmlFor="email" className="text-xl text-blue-500 font-semibold">Email:</label>

                <input className="my-2 border-2 px-1 rounded-md bg-blue-100 border-blue-300 py-1" type="email" name="email" id="email" placeholder="Your e-mail" />

            </div>

            <div className="flex flex-col gap">

                <label htmlFor="username" className="text-xl text-blue-500 font-semibold">Username:</label>

                <input className="my-2 border-2 px-1 rounded-md bg-blue-100 border-blue-300 py-1" type="text" name="username" id="username" placeholder="Your Username" />

            </div>

            <div className="flex flex-col gap-10px">

                <label htmlFor="password" className="text-xl text-blue-500 font-semibold">Password:</label>

                <input className="my-2 border-2 px-1 rounded-md bg-blue-100 border-blue-300 py-1" type="password" name="password" id="password" placeholder="Introduce a password" />

            </div>

            <div className="my-2 flex justify-between">

                <button className="border-2 rounded-md bg-blue-50 text-blue-900 px-2 font-medium cursor-pointer" type="button" onClick={handleLoginClick}>Login</button>

                <button className="border-2 rounded-md bg-orange-50 text-blue-900 px-2 font-medium cursor-pointer" type="submit">Register</button>

            </div>

        </form>

    </div>

}