import { logic } from '../logic' //necesitamos una funcion de ese fichero

export const Login = (props) => {
    //Variables para las propiedades de App
    const onRegisterClicked = props.onRegisterClicked
    const onUserLoggedIn = props.onUserLoggedIn

    //creo las funciones handle; son llamadas a las variables que tienen las propiedades
    const handleRegisterClick = () => onRegisterClicked()
    const handleLoggedSubmit = event => {
        event.preventDefault() //igual que en DOM

        const form = event.target //target permite saber sobre que elemento del DOM(formulario de la pgweb; tras el trabajo de react) se ha generado ese evento

        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)//igual que DOM pero importando el fichero logic

            form.reset() //igual que dom reseteamos el formulario por seguridad

            onUserLoggedIn()//en vez de borrar y añadir hijos como haciamos en DOM, ahora vamos a usar directamente la propiedad que configuramos en app
        } catch (error) {
            alert(error.mensage)
        }
    }

    console.log('Login -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>
        <div className="mt-2">
            <h1 className="text-xl">Login</h1>
            <form className="flex flex-col gap-4" onSubmit={handleLoggedSubmit}> {/* llamamos al handle si hay un evento submit */}
                <div className="flex flex-col gap">
                    <label htmlFor="username">Username</label>
                    <input className="border-2 px-1" type="text" id="username" name="username" placeholder="your username" />
                </div>
                <div className="flex flex-col gap">
                    <label htmlFor="password">Password</label>
                    <input className="border-2 px-1" type="password" id="password" name="password" placeholder="your password" />
                </div>
                <div className="flex justify-between">
                    <a className="underline" href="#" onClick={handleRegisterClick}>Register</a>
                    <button className="bg-black text-white px-2" type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
}
//Para los botones en react, se trabaja muy parecido como haciamos con DOM
//El fichero logica y datos lo vamos a dejar igual

//Copio la conmfiguración del boton de DOM a continuación para que sea mas facil su comparación con react
// loginFormulario.addEventListener('submit', event => {
//     event.preventDefault() //cancela la accion preterminada, ya que la voy a configurar yo
//     const username = usernameEtiquetaInput.value
//     const password = passwordEtiquetaInput.value
//     //try indica un bloque de codigo a intentar, si se produce una excepcion entonces entramos en catch
//     try {
//         loginUser(username, password) //llamamos a la funcion registerUser con los parametros introducidos en mi pg

//         loginFormulario.reset();
//         body.removeChild(login)
//         body.appendChild(home)
//     } catch (error) {
//         alert(error.message)
//     }
// })
