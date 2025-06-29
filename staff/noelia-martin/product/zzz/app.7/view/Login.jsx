import { logic } from '../logic'

export const Login = ({ onRegisterClicked, onUserLoggedIn }) => {
    const handleRegisterClick = () => onRegisterClicked()
    const handleLoggedSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        // try {
        //     logic.loginUser(username, password)

        //     form.reset()

        //     onUserLoggedIn()
        // } catch (error) {
        //     alert(error.mensage)
        // }
        try {
            logic.loginUser(username, password)
                .then(() => {
                    form.reset()

                    onUserLoggedIn()
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
//Modificamos la llamada de la logica login, para que controle errores (igual que hicimos en la view de register)