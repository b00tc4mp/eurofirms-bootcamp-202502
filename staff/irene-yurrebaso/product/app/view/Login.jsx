export const Login = () => {
    console.log('Login -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>
        <h1 className="text-2xl my-3">Login</h1>
        <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
                <label htmlFor="username">Username</label>
                <input className="border-2 p-1" type="text" id="username" name="username" placeholder="your username"/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="password">Password</label>
                <input className="border-2 p-1" type="password" id="password" name="password" placeholder="your password"/>
            </div>
            <div className="flex justify-between">
                <a className="underline" href="#">Register</a>
                <button className="bg-black text-white py-2 px-4" type="submit">Login</button>
            </div>
        </form>
    </div>
}