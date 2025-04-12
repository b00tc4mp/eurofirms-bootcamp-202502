import { logic } from '../logic'

export const Login = (props) => {
    const onregisterClicked = props.onregisterClicked
    const onUserLoggedIn = props.onUserLoggedIn

    const handleRegisterClick = () => onregisterClicked()

    const handleLoginSubmit = event => {
        event.preventDefault()

        const form = event. target

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

    return <div className="p-20px">

        <i>Logo</i>

        <h1>Login page</h1>
        <form className="flex flex-col gap-20px" onSubmit={handleLoginSubmit}>

            <div className="flex flex-col gap-10px">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Your username" />
            </div>

            <div className="flex flex-col gap-10px">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Your password" />
            </div>

            <div className="flex justify-between">
                <a href='#' onClick={handleRegisterClick}>Register</a>
                <button className="black-button" type="submit">Login</button>
            </div>
        </form>
    </div>
}