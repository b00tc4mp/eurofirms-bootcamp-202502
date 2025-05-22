import { logic } from "../logic"

export const Register = ({ onLoginClicked, onUserRegistered }) => {
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
                .then(() => {
                    form.reset()

                    onUserRegistered()
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

    return <div className="p-20x">
        <i className="text-2x1">Logo</i>

        <div className="mt-2">
            <h1>Register</h1>

            <form className="flex flex-col gap-20px" onSubmit={handleRegisterSubmit}>
                <div className="flex flex-col gap-10px">
                    <label htmlFor="name">Name</label>
                    <input className="border-2 px-1" type="text" id="name" name="name" placeholder="your full name" />
                </div>

                <div className="flex flex-col gap-10px">
                    <label htmlFor="email">E-Mail</label>
                    <input className="border-2 px-1" type="email" id="email" name="email"
                        placeholder="your e-mail" />
                </div>

                <div className="flex flex-col gap-10px">
                    <label htmlFor="username">Username</label>
                    <input className="border-2 px-1" type="text" id="username" name="username" placeholder="your username" />
                </div>

                <div className="flex flex-col gap-10px">
                    <label htmlFor="=password">Password</label>
                    <input className="border-2 px-1" type="password" id="password" name="password"
                        placeholder="your password" />
                </div>

                <div className="flex justify-between">
                    <a className="underline" href="#" onClick={handleLoginClick}>Login</a>

                    <button className="black-button" type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>
}