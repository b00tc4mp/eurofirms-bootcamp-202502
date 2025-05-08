import { logic } from '../logic'

// export const Login = props => {
//     const onRegisterClicked = props.onRegisterClicked
//     const onUserLoggedIn = props.onUserLoggedIn
export const Login = ({ onRegisterClicked, onUserLoggedIn }) => {
    const handleRegisterClick = () => onRegisterClicked()
    const handleLoggedSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)

            form.reset()

            onUserLoggedIn()
        } catch (error) {
            alert(error.mensage)
        }
    }

    console.log('Login -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>
        <div className="mt-2">
            <h1 className="text-xl">Login</h1>
            <form className="flex flex-col gap-4" onSubmit={handleLoggedSubmit}>
                <div className="flex flex-col gap">
                    <label htmlFor="username">Username</label>
                    <input className="border-2 px-1" type="text" id="username" name="username" placeholder="your username" />
                </div>
                <div className="flex flex-col gap">
                    <label htmlFor="password">Password</label>
                    <input className="border-2 px-1" type="password" id="password" name="password" placeholder="your password" />
                </div>
                <div className="flex justify-between">
                    <a className="underline" href="#" onClick={handleRegisterClick}>Register</a>
                    <button className="bg-black text-white px-2" type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
}
//Borro todos los comentarios, recuerda que estan en app.3(que se configuro la navegacion completa)
//aunque los comentarios se fueron arrastrando hasta app.5, también se pueden mirar ahi

//En landing hay otro ejemplo de forma de destruccturing que se puede utilizar
