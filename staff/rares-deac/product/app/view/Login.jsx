import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export const Login = () => {

    const navigate = useNavigate();
    console.log('Login -> render')

    return <div className="p-20x">
        <i className="block bold">Logo</i>

        <h1 className="bold">Login</h1>

        <form className="flex flex-col gap-20px">
            <div className="flex flex-col gap-10px">
                <label htmlFor="username" >Username</label>
                <input type="text" id="username" name="username" placeholder="nombre de usuario" />
            </div>

            <div className="flex flex-col gap-10px">
                <label htmlFor="password" >Password</label>
                <input type="password" name="password" id="password" placeholder="Type your password" />
            </div>

            <div className="flex justify-between">
                <Link to="/register">Register</Link>
                <button onClick={() => navigate('/home')} className="black-button" type="submit">Login</button>
            </div>
        </form>
    </div>
}