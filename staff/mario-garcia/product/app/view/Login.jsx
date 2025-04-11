export const Login = () => {

    console.log('Login -> render')

    return <div className="p-5">

        <i className="text-xl">Logo</i>

        <h1 className="text-3xl text-blue-900 font-semibold py-2">LOGIN Page</h1>

        <form className="mt-2 flex flex-col gap-4">

            <div className="flex flex-col gap">

                <label htmlFor="username" className="text-xl">Username:</label>

                <input className="border-2 px-1 rounded-md bg-violet-50 py-1" type="text" name="username" id="username" placeholder="Your Username" />

            </div>

            <div className="flex flex-col gap">

                <label htmlFor="password" className="text-xl">Password:</label>

                <input className="border-2 px-1 rounded-md bg-violet-50 py-1" type="text" name="password" id="password" placeholder="Introduce your password" />

            </div>

            <div className="flex justify-between">

                <a className="underline" href="#">Register</a>

                <button className="border-1 rounded-md bg-blue-50 text-blue-900 px-2" type="submit">Login</button>

            </div>

        </form>

    </div>

}