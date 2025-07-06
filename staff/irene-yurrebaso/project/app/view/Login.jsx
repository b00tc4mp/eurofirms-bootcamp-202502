import { CredentialsError, NotFoundError, SystemError, ValidationError } from 'com'

import { logic } from '../logic'

import { useContext } from '../context'
 
export const Login = ({ onRegisterClicked, onUserLoggedIn}) => {
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

                    if (error instanceof NotFoundError || error instanceof CredentialsError)
                        alert('WARNING: ' + error.message)
                    else
                        alert('ERROR: ' + error.message)
                })
        } catch(error) {
            console.error(error)

            if (error instanceof ValidationError)
                alert('WARNING: ' + error.message)
            else
                alert('ERROR: ' + error.message)
        }
    }

    console.log('Login -> render')

    return <div className="p-5">
        <div className="flex flex-col items-center">
                <img src="/logo.jpg" alt="Infinity Travel" />

                <i class="logo">Infinity Travel</i>
            </div>
        <div className="mt-2">

            <form className="mt-2 flex flex-col gap-4" onSubmit={handleLoginSubmit}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="username">Username</label>
                    <input className="border-2 border-solid p-1" type="text" id="username" name="username" placeholder="your username"></input>
                </div>

                <div className="flex flex-col gap">
                    <label htmlFor="password">Password</label>
                    <input className="border-2 border-solid p-1" type="password" id="password" name="password" placeholder="your password" ></input>
                </div>

                <div className="flex justify-between">
                    <a className="underline" href="#" onClick={handleRegisterClick}>Register</a>
                    <button className="bg-rose-800 text-white py-2 px-4 cursor-pointer" type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
}