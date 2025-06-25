import { logic } from '../logic'
import { useContext } from '../context'


export const Register = ({ onLoginClicked, onUserRegistered }) => {
    const { alert }= useContext()


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

    return <div className="px-5 py-6">

        <i className="text-2xl block">Logo</i>

        <div className="mt-2">
            <h1 className="text-2xl font-semibold text-[#0ab5ee] mb-6">Create your user</h1>

            <form className="flex flex-col gap-5" onSubmit={handleRegisterSubmit}>

                <div className="flex flex-col gap-2">
                    <label
                        className="font-medium"
                        htmlFor="name">Name</label>
                    <input className="border border-gray-400 focus:border-[#0ab5ee] focus:outline-none bg-[#cde5ed] rounded px-3 py-2"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your full name" />
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        className="font-medium"
                        htmlFor="username">E-mail</label>
                    <input className="border border-gray-400 focus:border-[#0ab5ee] focus:outline-none bg-[#cde5ed] rounded px-3 py-2"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Your e-amil" />
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        className="font-medium"
                        htmlFor="username">Username</label>
                    <input className="border border-gray-400 focus:border-[#0ab5ee] focus:outline-none bg-[#cde5ed] rounded px-3 py-2"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Your username" />
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        className="font-medium"
                        htmlFor="username">Password</label>
                    <input className="border border-gray-400 focus:border-[#0ab5ee] focus:outline-none bg-[#cde5ed] rounded px-3 py-2"
                        type="text"
                        id="password"
                        name="password"
                        placeholder="Your password" />
                </div>

                <div className="flex justify-between items-center mt-4">
                    <a className="no-underline text-black font-medium"
                    href="#"
                    onClick={handleLoginClick}>Login</a>
                    <button className="text-white bg-[#0ab5ee] hover:bg-[#119fd3] transition-colors duration-300 rounded-lg px-4 py-2" type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>
}