import { logic } from '../logic'

export const Register = ({ onLoginClicked, onUserRegistered }) => {
    const handleLoginClick = () => onLoginClicked()
    const handleRegisterSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        // try {
        //     logic.registerUser(name, email, username, password)

        //     form.reset()

        //     onUserRegistered()
        // } catch (error) {
        //     alert(error.message)
        // }

        //Recuerda try / catch es un control de error sincrono. Ahora solo manejará las validaciones de la logica de nuestra app
        try {
            logic.registerUser(name, email, username, password)
                //Usamos dos metodos,then y catch, de nuestro objeto tipo promesa,fetch (control de errores asincrono(ya que no es inmediato, lo que tarde el servidor en atendernos))
                //Si todo ha ido bien: then ... y un catch por si ocurre algun error al registrar el nuevo usuario(errores de la logica de API o los nuevos creados en el fetch)
                .then(() => { //como la logica no ha retornado nada, no tenemos paramentro de entrada
                    form.reset()
                    onUserRegistered()
                })
                .catch(error => {
                    console.error(error) //con esta linea veremos el error en consola
                    alert(error.message) //con esta linea le enviaremos SOLO el mensaje del error al usuario para que este informado
                })
        } catch (error) { //igual que teniamos pero escribimos el error en consola. Configuramos este control de error sincrono igual que el asincrono (recuerda: este catch es solo para los errores de la logica de nuestra app, que solo tiene validaciones de datos)
            console.error(error)

            alert(error.message)
        }
    }

    console.log('Register -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>
        <div className="mt-2">
            <h1 className="text-xl">Register</h1>
            <form className="mt-2 flex flex-col gap-4" onSubmit={handleRegisterSubmit}>
                <div className="flex flex-col gap">
                    <label htmlFor="name">Name</label>
                    <input className="border-2 px-1" type="text" id="name" name="name" placeholder="your full name" />
                </div>
                <div className="flex flex-col gap">
                    <label htmlFor="email">E-mail</label>
                    <input className="border-2 px-1" type="email" id="email" name="email" placeholder="your e-mail" />
                </div>
                <div className="flex flex-col gap">
                    <label htmlFor="username">Username</label>
                    <input className="border-2 px-1" type="text" id="username" name="username" placeholder="your username" />
                </div>
                <div className="flex flex-col gap">
                    <label htmlFor="password">Password</label>
                    <input className="border-2 px-1" type="password" id="password" name="password" placeholder="your password" />
                </div>
                <div className="flex justify-between">
                    <a className="underline" href="#" onClick={handleLoginClick}>Login</a>
                    <button className="bg-black text-white px-2" type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>
}

//Cambiamos el contenido del control de error de la llamada a la logica de register
