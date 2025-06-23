import { logic } from '../logic'

export const Register = ({ onLoginClicked, onUserRegistered, alert }) => {
    // const onLoginClicked = props.onLoginClicked
    // const onUserRegistered = props.onUserRegistered

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

    return <div className="p-5">
        <i className="text-2xl">Logo</i>

        <div className="mt-2">
            <h1 className="text-xl">Register</h1>


            <form className="mt-2 flex flex-col gap-4" onSubmit={handleRegisterSubmit}>
                <div className="flex flex-col gap">
                    <label htmlFor="name">Name</label>
                    <input className="border-2 px-1 rounded-md" type="text" name="name" id="name" placeholder="your Name" />
                </div>

                <div className="flex flex-col gap">
                    <label htmlFor="email">E-mail</label>
                    <input className="border-2 px-1 rounded-md:" type="email" name="email" id="email" placeholder="your email" />
                </div>

                <div className="flex flex-col gap">
                    <label htmlFor="username">Username</label>
                    <input className="border-2 px-1 rounded-md:" type="text" name="username" id="username" placeholder="your username" />
                </div>

                <div className="flex flex-col gap">
                    <label htmlFor="password">Password</label>
                    <input className="border-2 px-1 rounded-md:" type="password" id="password" name="password" placeholder="your password" />
                </div>

                <div className="flex justify-between">
                    <a className="underline" href='#' onClick={handleLoginClick}>Login</a>

                    <button className="bg-black text-white px-2" type="submit">Register</button>
                </div>
            </form>
        </div>
    </div >
}