import { logic } from '../logic'

import { useContext } from '../context'

export const Register = ({ onLoginClicked, onUserRegistered }) => {
    const { alert } = useContext()

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

    return <div className="p-5  bg-[#C7C6C6] h-screen">
        <i className="text-2xl">Logo</i>

        <div className="mt-2 ">
            <h1 className="text-xl">Register</h1>

            <form className="mt-2 flex flex-col gap-4" onSubmit={handleRegisterSubmit}>
                <div className="flex flex-col gap">
                    <label className="font-semibold" htmlFor="name">Name</label>
                    <input className="border-2 px-1 border-[#6461CC] bg-white" type="text" id="name" name="name" placeholder="your full name" />
                </div>

                <div className="flex flex-col gap">
                    <label className="font-semibold" htmlFor="email">E-mail</label>
                    <input className="border-2 px-1 border-[#6461CC] bg-white" type="email" id="email" name="email" placeholder="your e-mail"/>
                </div>

                <div className="flex flex-col gap">
                    <label className="font-semibold" htmlFor="username">Username</label>
                    <input className="border-2 px-1 border-[#6461CC] bg-white" type="text" id="username" name="username" placeholder="your username" />
                </div>

                <div className="flex flex-col gap">
                    <label className="font-semibold" htmlFor="password">Password</label>
                    <input className="border-2 px-1 border-[#6461CC] bg-white" type="password" id="password" name="password" placeholder="your password" />
                </div>

                <div className="flex justify-between">
                    <a className="underline font-semibold" href="#" onClick={handleLoginClick}>Login</a>

                    <button className="bg-[#6B77B3] py-1 text-white px-4 cursor-pointer" type="submit" >Register</button>
                </div>
            </form>
        </div>
    </div>
}