import { logic } from '../logic'
import { CredentialsError, NotFoundError, ValidationError } from 'com'
import { useContext } from '../context'

export const Login = ({ onReturnClicked, onUserLoggedInRegular, onUserLoggedInDoctor }) => {
    const { alert } = useContext()



    const handleReturnClick = () => onReturnClicked()
    const handleLogginSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)
                .then(() => {
                    form.reset()
                    let isDoctor
                    try {
                        isDoctor = logic.isUserDoctor()
                    } catch (error) {
                        console.error(error)

                        alert(error.message)
                    }
                    if (isDoctor) onUserLoggedInDoctor()
                    else onUserLoggedInRegular()
                })
                .catch(error => {
                    console.error(error)
                    if (error instanceof NotFoundError || error instanceof CredentialsError)
                        alert('WARN: ' + error.message)
                    else
                        alert('ERROR: ' + error.message)

                })
        } catch (error) {
            console.error(error)
            if (error instanceof ValidationError)
                alert('WARN: ' + error.message)
            else
                alert('ERROR: ' + error.message)
        }
    }

    console.log('Login -> render')

    return <div >
        <div className="flex flex-col justify-between items-center min-h-screen px-4 bg-white text-center">
            <h1 className="text-xl font-bold mb-8">Iniciar Sesión</h1>
            <form className="w-full max-w-xs space-y-6" onSubmit={handleLogginSubmit}>
                <div className="text-left">
                    <label className="block mb-1 font-medium" htmlFor="username">Usuario</label>
                    <input className="w-full bg-green-700 text-white px-3 py-2 rounded focus:outline-none" type="text" id="username" name="username" placeholder="your username" />
                </div>
                <div className="text-left">
                    <label className="block mb-1 font-medium" htmlFor="password">Contraseña</label>
                    <input className="w-full bg-green-700 text-white px-3 py-2 rounded focus:outline-none" type="password" id="password" name="password" placeholder="your password" />
                </div>
                <div className="flex justify-between items-center mt-4">
                    <a className="underline font-medium text-sm" href="#" onClick={handleReturnClick}>Volver</a>
                    <button className="bg-black text-white px-4 py-2 text-sm font-semibold rounded" type="submit">Siguiente</button>
                </div>
            </form>
            <div className="w-full flex justify-center pb-4">
                <img
                    src="public/img/logo-JuntaAndalucia.png"
                    alt="Logo Junta de Andalucía"
                    className="h-30"
                />
            </div>
        </div>
    </div>
} 