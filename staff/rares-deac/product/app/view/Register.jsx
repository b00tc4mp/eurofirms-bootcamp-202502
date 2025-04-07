import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const Register = () => {
    const navigate = useNavigate();
    console.log('Register -> render')

    return <div className="p-20x">
        <i className="bold">Logo</i>

        <h1 className="bold">Register</h1>

        <form className="flex flex-col gap-20px">
            <div className="flex flex-col gap-10px">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="your Name" />
            </div>
            <div className="flex flex-col gap-10px">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="your email" />
            </div>
            <div className="flex flex-col gap-10px">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="your username" />
            </div>
            <div className="flex flex-col gap-10px">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="your password" />
            </div>
            <div className="flex justify-between">
                <Link to="/login">Login</Link>
                <button onClick={() => navigate('/login')} className="black-button"type="submit">Register</button>
            </div>

        </form>
    </div>
}