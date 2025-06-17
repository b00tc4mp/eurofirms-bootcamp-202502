import { CredentialsError, NotFoundError, ValidationError } from 'com'
import { logic } from '../logic'

export const Login = ({ onRegisterClicked, onUserLoggedIn }) => {
    // const onRegisterClicked = props.onRegisterClicked
    // const onUserLoggedIn = props.onUserLoggedIn

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

            alert(error.message)
        }
    }

    console.log('Login -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>

        <div className="mt-2">
            <h1 className="text-xl">Login</h1>

            <form className="flex flex-col gap-4" onSubmit={handleLoginSubmit}>
                <div className="flex flex-col gap">
                    <label htmlFor="username" >Username</label>
                    <input className="border-2 px-1 rounded-md" type="text" id="username" name="username" placeholder="nombre de usuario" />
                </div>

                <div className="flex flex-col gap">
                    <label htmlFor="password" >password</label>
                    <input className="border-2 px-1 rounded-md" type="password" name="password" id="password" placeholder="Type your password" />
                </div>

                <div className="flex justify-between">
                    <a className="underline" onClick={handleRegisterClick}>Register</a>

                    <button className="bg-black text-white px-2" type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
}