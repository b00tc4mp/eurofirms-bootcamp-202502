import { logic } from '../logic'

export const Register = (props) => {

    const onLoginClicked = props.onLoginClicked
    const onUserRegistered = props.onUserRegistered

    const handleLoginClick = () => onLoginClicked()

    const handleRegisterSubmit = event => {

        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        try {

            logic.registerUser(name, email, username, password)

            form.reset()

            onUserRegistered()


        } catch (error) {
            alert(error.message)

        }

    }

    console.log('Register -> render')

    return <div className="p-5">

        <i className="text-xl">Logo</i>

        <h1 className="text-3xl text-blue-900 font-semibold py-2">REGISTER Page</h1>

        <form className="mt-2 flex flex-col gap-4" onSubmit={handleRegisterSubmit}>

            <div className="flex flex-col gap">

                <label htmlFor="name" className="text-xl">Name:</label>

                <input className="my-2 border-2 px-1 rounded-md bg-violet-50 py-1" type="text" id="name" name="name" placeholder="Your full name" />

            </div>

            <div className="flex flex-col gap">

                <label htmlFor="email" className="text-xl">Email:</label>

                <input className="my-2 border-2 px-1 rounded-md bg-violet-50 py-1" type="email" name="email" id="email" placeholder="Your e-mail" />

            </div>

            <div className="flex flex-col gap">

                <label htmlFor="username" className="text-xl">Username:</label>

                <input className="my-2 border-2 px-1 rounded-md bg-violet-50 py-1" type="text" name="username" id="username" placeholder="Your Username" />

            </div>

            <div className="flex flex-col gap-10px">

                <label htmlFor="password" className="text-xl">Password:</label>

                <input className="my-2 border-2 px-1 rounded-md bg-violet-50 py-1" type="password" name="password" id="password" placeholder="Introduce a password" />

            </div>

            <div className="my-2 flex justify-between">

                <a className="underline" href="#" onClick={handleLoginClick}>Login</a>

                <button className="border-1 rounded-md bg-blue-50 text-blue-900 px-2 cursor-pointer" type="submit">Register</button>

            </div>

        </form>

    </div>

}