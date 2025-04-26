import { logic } from '../logic'

export const Register = (props) => {
    const onLoginClicked = props.onLoginClicked
    const onUserRegistered = props.onUserRegistered

    const handleLoginClick = () => onLoginClicked()

    const handleRegisterSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        try {
            logic.registerUser(name, email, username, password)

            form.reset()

            onUserRegistered()
        } catch (error) {
            alert(error.message)
        }
    }

    console.log('Register -> render')

    return <div className="px-5 py-6">

        <i className="text-2xl block">Logo</i>

        <div className='mt-2'>
            <h1 className="text-[22px] font-bold text-[#119fd3] mb-4">Register page</h1>

            <form className="flex flex-col gap-5" onSubmit={handleRegisterSubmit}>

                <div className="flex flex-col gap-[10px]">
                    <label 
                    className="font-medium" 
                    htmlFor="name">Name
                    </label>
                    <input className="border border-black bg-[#cde5ed] rounded px-3 py-2" 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Your full name" />
                </div>

                <div className="flex flex-col gap-[10px]">
                    <label 
                    className="font-medium" 
                    htmlFor="email">E-mail
                    </label>
                    <input className="border border-black bg-[#cde5ed] rounded px-3 py-2" 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Your e-mail" />
                </div>

                <div className="flex flex-col gap-[10px]">
                    <label 
                    className="font-medium" htmlFor="username">Username
                    </label>
                    <input className="border border-black bg-[#cde5ed] rounded px-3 py-2" 
                    type="text" 
                    name="username" 
                    id="username" 
                    placeholder="Your username" />
                </div>

                <div className="flex flex-col gap-[10px]">
                    <label 
                    className="font-medium" htmlFor="password">Password
                    </label>
                    <input className="border border-black bg-[#cde5ed] rounded px-3 py-2" 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Your password" />
                </div>

                <div className="flex justify-between items-center mt-4">
                    <a className="no-underline text-black font-medium" 
                    href='#' 
                    onClick={handleLoginClick}>Login
                    </a>
                    <button 
                    className="text-white bg-[#0ab5ee] font-thin border-none rounded-[10px] cursor-pointer px-4 py-2" type="submit">Register
                    </button>
                </div> 
            </form>
        </div>
      
    </div>
}


