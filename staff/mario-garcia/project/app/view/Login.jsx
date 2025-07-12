import { CredentialsError, NotFoundError, SystemError, ValidationError } from 'com'
import { logic } from '../logic'
import { useContext } from '../context'

export const Login = ({ onRegisterClicked, onUserLoggedIn }) => {
    const { alert } = useContext()

    const handleRegisterClick = () => onRegisterClicked()
    // Arrow's Function App.jsx NAVIGATE = Line 23 -- Register is SHOWED
    // ROUTES LANDING = Line 84 + ROUTES LOGIN = Line 104
    // It is LINKED to the Button -- Register is SHOWED

    const handleLoginSubmit = event => {

        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)
                .then(() => {
                    form.reset()

                    onUserLoggedIn() //This prop lets me to communicate with App.jsx NAVIGATE (Line 29) and ROUTES LOGIN = Line 105 -- Home is SHOWED
                })
                .catch(error => {
                    console.error(error)

                    if (error instanceof NotFoundError || error instanceof CredentialsError) alert('WARN: ' + error.message)

                    else
                        alert('ERROR: ' + error.message)
                })
        } catch (error) {
            console.error(error)

            if (error instanceof ValidationError)
                alert('WARN: ' + error.message)
            else
                alert('ERROR: ' + error.message)
        }
    }

    console.log('Login -> render')

    return <>
        <i className="text-2xl font-extrabold text-blue-900">ACONPP</i>

        <h1 className="text-3xl text-blue-700 font-bold py-2">LOGIN Page</h1>

        <form className="mt-2 flex flex-col gap-4" onSubmit={handleLoginSubmit}>

            <div className="flex flex-col gap">
                <label htmlFor="username" className="text-xl text-blue-500 font-semibold">Username:</label>

                <input className="my-2 border-2 px-1 rounded-md bg-blue-100 py-1 border-blue-300" type="text" name="username" id="username" placeholder="Your Username" />
            </div>

            <div className="flex flex-col gap">
                <label htmlFor="password" className="text-xl text-blue-500 font-semibold">Password:</label>

                <input className="my-2 border-2 px-1 rounded-md bg-blue-100 py-1 border-blue-300" type="password" name="password" id="password" placeholder="Introduce your password" />
            </div>

            <div className="my-2 flex justify-between">
                <button className="border-2 rounded-md bg-blue-50 text-blue-900 px-2 font-medium cursor-pointer" type="button" onClick={handleRegisterClick}>Register</button>

                <button className="border-2 rounded-md bg-orange-50 text-blue-900 px-2 font-medium cursor-pointer" type="submit">Login</button>
            </div>
        </form>
    </>
}