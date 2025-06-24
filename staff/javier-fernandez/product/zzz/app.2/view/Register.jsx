export const Register = () => {
    console.log("register -> render")

    return <div className="p-5">
        <i className="text-2xl">Logo</i>

        <div className="mt-2">
            <h1 className="text-xl">Register</h1>

            <form className="mt-2 flex flex-col gap-4">
                <div className="flex flex-col gap">
                    <label htmlFor="name">Name</label>
                    <input className="border-2 px-1" type="text" id="name" name="name" placeholder="your full name" /> 
                </div>

                <div className="flex flex-col gap">
                    <label htmlFor="email">E-mail</label>
                    <input className="border-2 px-1" type="text" id="email" name="email" placeholder="your e-mail" />
                </div>

                <div className="flex flex-col gap">
                    <label htmlFor="username">Username</label>
                    <input className="border-2 px-1" type="text" id="username" name="username" placeholder="your username" />
                </div>

                <div className="flex flex-col gap">
                    <label htmlFor="password">Password</label>
                    <input className="border-2 px1" type="text" id="password" name="password" placeholder="your password" />
                </div>

                <div className="flex justify-between">
                    <a className="underline" href="#">Login</a>
                    <button className="bg-black text-white px-2" type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>
}