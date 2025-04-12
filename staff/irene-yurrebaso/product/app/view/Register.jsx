export const Register = () => {
    console.log('Register -> render')

    return <div className="p-5">
        <i>Logo</i>
        <h1>Register</h1>
        <form className="flex flex-col gap-20px">
            <div className="flex flex-col gap-10px">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="full name"/>
            </div>
            <div className="flex flex-col gap-10px">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="your email"/>
            </div>
            <div className="flex flex-col gap-10px">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="your username"/>
            </div>
            <div className="flex flex-col gap-10px">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="your password"/>
            </div>
            <div className="flex justify-between">
                <a href="#">Login</a><button className="black-button" type="submit">Register</button>
            </div>
        </form>
        </div>
}