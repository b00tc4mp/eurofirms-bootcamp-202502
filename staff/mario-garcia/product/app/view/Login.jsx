import { logic } from '../logic'

export const Login = (props) => {

    const onRegisterClicked = props.onRegisterClicked
    const onUserLoggedIn = props.onUserLoggedIn

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

    return <div className="p-5">

        <i className="text-xl">Logo</i>

        <h1 className="text-3xl text-blue-900 font-semibold py-2">LOGIN Page</h1>

        <form className="mt-2 flex flex-col gap-4" onSubmit={handleLoginSubmit}>

            <div className="flex flex-col gap">

                <label htmlFor="username" className="text-xl">Username:</label>

                <input className="my-2 border-2 px-1 rounded-md bg-violet-50 py-1" type="text" name="username" id="username" placeholder="Your Username" />

            </div>

            <div className="flex flex-col gap">

                <label htmlFor="password" className="text-xl">Password:</label>

                <input className="my-2 border-2 px-1 rounded-md bg-violet-50 py-1" type="password" name="password" id="password" placeholder="Introduce your password" />

            </div>

            <div className="flex justify-between">

                <a className="underline" href="#"
                    onClick={handleRegisterClick}>Register</a>

                <button className="border-1 rounded-md bg-blue-50 text-blue-900 px-2" type="submit">Login</button>

            </div>

        </form>

    </div>

}