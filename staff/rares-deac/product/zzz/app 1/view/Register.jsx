import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const Register = () => {
    const navigate = useNavigate();
    console.log('Register -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>

        <div className="mt-2">

        <h1 className="text-xl">Register</h1>


            <form className="flex flex-col gap-2">
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
                    <Link className="underline" to="/login">Login</Link>
                    <button onClick={() => navigate('/login')} className="bg-black text-white px-2" type="submit">Register</button>
                </div>

            </form>
        </div>
    </div >
}