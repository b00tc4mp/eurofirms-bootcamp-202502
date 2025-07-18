import { logic } from '../logic'
import { DuplicityError, ValidationError } from 'com'
import { useContext } from '../context'

export const Register = ({ onLoginClicked, onUserRegistered }) => {
    const { alert } = useContext()

    const handleLoginClick = () => onLoginClicked()
    const handleRegisterSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value
        const name = form.name.value
        const healthCareNumber = form.healthCareNumber.value
        const dateOfBirth = form.dateOfBirth.value


        try {
            logic.registerUser(username, password, name, healthCareNumber, dateOfBirth)

                .then(() => {
                    form.reset()
                    onUserRegistered()
                })
                .catch(error => {
                    console.error(error)
                    if (error instanceof DuplicityError)
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

    console.log('Register -> render')

    return <div>
        <div className="flex flex-col justify-between items-center min-h-screen px-4 bg-white text-center mt-6">
            <h1 className="text-xl font-bold mb-8">Registro</h1>
            <form className="w-full max-w-xs space-y-6" onSubmit={handleRegisterSubmit}>
                <div className="text-left">
                    <label className="block mb-1 font-medium" htmlFor="username">Nombre de Usuario</label>
                    <input className="w-full bg-green-700 text-white px-3 py-2 rounded focus:outline-none" type="text" id="username" name="username" placeholder="your full username" />
                </div>
                <div className="text-left">
                    <label className="block mb-1 font-medium" htmlFor="password">Contraseña</label>
                    <input className="w-full bg-green-700 text-white px-3 py-2 rounded focus:outline-none" type="password" id="password" name="password" placeholder="your password" />
                </div>
                <div className="text-left">
                    <label className="block mb-1 font-medium" htmlFor="name">Nombre del Menor</label>
                    <input className="w-full bg-green-700 text-white px-3 py-2 rounded focus:outline-none" type="text" id="name" name="name" placeholder="your name" />
                </div>
                <div className="text-left">
                    <label className="block mb-1 font-medium" htmlFor="healthCareNumber">Número tarjeta Sanitaria</label>
                    <input className="w-full bg-green-700 text-white px-3 py-2 rounded focus:outline-none" type="text" id="healthCareNumber" name="healthCareNumber" placeholder="your healthCareNumber" />
                </div>
                <div className="text-left">
                    <label className="block mb-1 font-medium" htmlFor="dateOfBirth">Fecha Nacimiento</label>
                    <input className="w-full bg-green-700 text-white px-3 py-2 rounded focus:outline-none" type="text" id="dateOfBirth" name="dateOfBirth" placeholder="your dateOfBirth" />
                </div>
                <div className="flex justify-between items-center mt-4">
                    <a className="underline font-medium text-sm" href="#" onClick={handleLoginClick}>Iniciar Sesión</a>
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