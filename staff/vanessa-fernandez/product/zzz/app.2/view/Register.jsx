export const Register = (props) => {
    const onLoginClick = props.onLoginClick

    const handleLoginClick = () => onLoginClick()
    console.log('Register -> render')

    return <div className="p-20px">

        <i>Logo</i>

        <h1>Register page</h1>

        <form className="flex flex-col gap-20px">

            <div className="flex flex-col gap-10px">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your full name" />
            </div>

            <div className="flex flex-col gap-10px">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="Your e-mail" />
            </div>

            <div className="flex flex-col gap-10px">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Your username" />
            </div>

            <div className="flex flex-col gap-10px">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Your password" />
            </div>

            <div className="flex justify-between">
                <a href="#" onClick={handleLoginClick}>Login</a>
                <button className="black-button" type="submit">Register</button>
            </div>
        </form>
    </div>
}