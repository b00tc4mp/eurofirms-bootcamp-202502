export const Login = () => {
    console.log('Login -> render')

    return <div className="p-20px">
        <i>Logo</i>

        <h1>Login</h1>

        <form className="flex flex-col gap-20px">
            <div className="flex flex-col gap-10px">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="your username" />
            </div>

            <div className="flex flex-col gap-10px">
                <label htmlFor="password">password</label>
                <input type="password" id="password" name="password" placeholder="your password" />
            </div>

            <div className="flex justify-between">
                <a href="#">Register</a>
                <button className="black-button" type="submit">Login</button>
            </div>
        </form>
    </div>
}