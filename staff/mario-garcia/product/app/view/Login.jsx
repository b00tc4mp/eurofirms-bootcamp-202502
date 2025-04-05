export const Login = () => {

    console.log('Login -> render')

    return <div className="p-xy-20px">

        <i>Logo</i>

        <h1>LOGIN Page</h1>

        <form className="flex flex-col gap-20px">

            <div className="flex flex-col gap-10px">

                <label htmlFor="username">Username:</label>

                <input className="placeholder" type="text" name="username" id="username" placeholder="Your Username" />

            </div>

            <div className="flex flex-col gap-10px">

                <label htmlFor="password">Password:</label>

                <input className="placeholder" type="text" name="password" id="password" placeholder="Introduce your password" />

            </div>

            <div className="flex justify-between">

                <a href="#">Register</a>

                <button className="loginButton" type="submit" style="background-color: floralwhite; cursor: pointer;">Login</button>

            </div>

        </form>

    </div>

}