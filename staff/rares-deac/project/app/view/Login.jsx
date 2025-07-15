import { CredentialsError, NotFoundError, SystemError, ValidationError } from 'com';

import { logic } from '../logic'

import { useContext } from '../context';

export const Login = ({ onRegisterClicked, onUserLoggedIn }) => {
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
                        alert('WARN: ' + error.message)
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

    return <div className="p-5  bg-[#C7C6C6] h-screen">
        <i className="text-2xl">Logo</i>

        <div className='mt-2'>
            <h1 className="text-xl font-semibold">Login</h1>

            <form className="flex flex-col gap-4" onSubmit={handleLoginSubmit}>
                <div className="flex flex-col gap">
                    <label className="font-medium" htmlFor="username">Username</label>
                    <input className="border-2 px-1 border-[#6461CC] bg-white" type="text" id="username" name="username" placeholder="your username" />
                </div>

                <div className="flex flex-col gap">
                    <label className="font-medium" htmlFor="password">Password</label>
                    <input className="border-2 px-1 border-[#6461CC] bg-white" type="password" id="password" name="password" placeholder="your password" />
                </div>

                <div className="flex justify-between font-semibold">
                    <a className="underline" href="#" onClick={handleRegisterClick}>Register</a>

                    <button className="bg-[#6B77B3] py-1 text-white px-4 cursor-pointer"
                        type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>


}