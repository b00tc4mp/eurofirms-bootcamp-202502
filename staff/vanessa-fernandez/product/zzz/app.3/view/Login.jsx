import { Link } from 'react-router-dom'

export const Login = () => {
    console.log('Login -> render')

    return <div className="p-20px">

        <i>Logo</i>

        <h1>Login page</h1>
        <form className="flex flex-col gap-20px">

            <div className="flex flex-col gap-10px">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Your username" />
            </div>

            <div className="flex flex-col gap-10px">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Your password" />
            </div>

            <div className="flex justify-between">
                <Link to='/register'>Register</Link>
                <button className="black-button" type="submit">Login</button>
            </div>
        </form>
    </div>
}