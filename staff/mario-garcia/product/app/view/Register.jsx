export const Register = () => {
    console.log('Register -> render')

    return <div className="p-xy-20px">

        <i>Logo</i>

        <h1>REGISTER Page</h1>

        <form className="flex flex-col gap-20px">

            <div className="flex flex-col gap-10px">

                <label htmlFor="name">Name:</label>

                <input className="placeholder" type="text" id="name" name="name" placeholder="Your full name" />

            </div>

            <div className="flex flex-col gap-10px">

                <label htmlFor="email">Email:</label>

                <input className="placeholder" type="email" name="email" id="email" placeholder="Your e-mail" />

            </div>

            <div className="flex flex-col gap-10px">

                <label htmlFor="username">Username:</label>

                <input className="placeholder" type="text" name="username" id="username" placeholder="Your Username" />

            </div>

            <div className="flex flex-col gap-10px">

                <label htmlFor="password">Password:</label>

                <input className="placeholder" type="text" name="password" id="password" placeholder="Introduce a password" />

            </div>

            <div className="flex justify-between">

                <a href="#">Login</a>

                <button className="registerButton" type="submit" style="cursor: pointer;">Register</button>

            </div>

        </form>

    </div>

}