import { logic } from '../logic'

//destructuracion en las variables que se pasan como props
//la alerta 'alert' ahora viene con prop desde la App.jsx, para mostrar ventana customizada
export const Register = ({onLoginClicked, onUserRegistered, alert}) => {
    //creamos una funcion handle que maneja el onClick
    const handleLoginClick = () => onLoginClicked()

    //para envio de formulario de registro onSubmit
    const handleRegisterSubmit = event => {
        
        event.preventDefault()

        const form = event.target //esto me trae el formulario del DOM

        const name = form.name.value //permite llegar al input usando el id, y del input coger el value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        try {
            logic.registerUser(name, email, username, password)
                .then(() => {
                    form.reset()

                    onUserRegistered()
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })  
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    console.log('Register -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>
        <h1 className="text-2xl my-3">Register</h1>
        <form className="flex flex-col gap-5" onSubmit={handleRegisterSubmit}>
            <div className="flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <input className="border-2 border-solid p-1" type="text" id="name" name="name" placeholder="full name"/>
            </div>
            <div className="flex flex-col" gap-1>
                <label htmlFor="email">E-mail</label>
                <input className="border-2 border-solid p-1" type="email" id="email" name="email" placeholder="your email"/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="username">Username</label>
                <input className="border-2 border-solid p-1" type="text" id="username" name="username" placeholder="your username"/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="password">Password</label>
                <input className="border-2 p-1" type="password" id="password" name="password" placeholder="your password"/>
            </div>
            <div className="flex justify-between">
                <a className="underline" href="#" onClick={handleLoginClick}>Login</a>
                <button className="bg-black text-white py-2 px-4" type="submit">Register</button>
            </div>
        </form>
    </div>
}