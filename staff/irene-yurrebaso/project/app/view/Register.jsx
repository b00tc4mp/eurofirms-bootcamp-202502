import { logic } from '../logic'

import { useContext  } from '../context'

export const Register = ({ onLoginClicked, onUserRegistered }) => {
    const { alert } = useContext()

    const handleLoginClick = () => onLoginClicked()

    const handleRegisterSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const email = form.email.value
        const password = form.password.value

        try {
            logic.registerUser(username, email, password)
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

    return <div className="p-5">
        <div className="flex flex-col items-center">
                <img src="/logo.jpg" alt="Infinity Travel" />

                <i class="logo">Infinity Travel</i>
            </div>
        <form className="mt-2 flex flex-col gap-4" onSubmit={handleRegisterSubmit}>
            <div className="flex flex-col gap-1">
                <label htmlFor="username">Username</label>
                <input className="border-2 border-solid p-1" type="text" id="username" name="username" placeholder="your username"/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email">E-mail</label>
                <input className="border-2 border-solid p-1" type="email" id="email" name="email" placeholder="your email"/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="password">Password</label>
                <input className="border-2 p-1" type="password" id="password" name="password" placeholder="your password"/>
            </div>
            <div className="flex justify-between">
                <a className="underline" href="#" onClick={handleLoginClick}>Login</a>
                <button className="bg-rose-800 text-white py-2 px-4 cursor-pointer" type="submit">Register</button>
            </div>
        </form>
    </div>
}