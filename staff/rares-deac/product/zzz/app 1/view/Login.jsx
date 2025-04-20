import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export const Login = () => {

    const navigate = useNavigate();
    console.log('Login -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>
        <div className="mt-2">
            <h1 className="text-xl">Login</h1>

            <form className="flex flex-col gap-2">
                <div className="flex flex-col gap">
                    <label htmlFor="username" >Username</label>
                    <input className="border-2 px-1 rounded-md" type="text" id="username" name="username" placeholder="nombre de usuario" />
                </div>

                <div className="flex flex-col gap">
                    <label htmlFor="password" >Password</label>
                    <input className="border-2 px-1 rounded-md" type="password" name="password" id="password" placeholder="Type your password" />
                </div>

                <div className="flex justify-between">
                    <Link className="underline" to="/register">Register</Link>
                    <button onClick={() => navigate('/home')} className="bg-black text-white px-2" type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
}