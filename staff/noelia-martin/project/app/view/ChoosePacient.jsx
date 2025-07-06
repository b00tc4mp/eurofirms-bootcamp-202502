import { logic } from '../logic'
import { CredentialsError, NotFoundError, ValidationError } from 'com'
import { useContext } from '../context'
import { data } from '../data'

export const ChoosePacient = ({ onPacientElected }) => {
    const { alert } = useContext()

    const handlePacientElectedSubmit = event => {
        event.preventDefault()

        const form = event.target

        const healthCareNumber = form.healthCareNumber.value

        try {
            logic.getChoosePacient(healthCareNumber)
                .then((token) => {
                    form.reset()
                    onPacientElected()
                    data.idPacient = token //guardamos el token en la variable volatil de idPacient
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

    console.log('ChoosePacient -> render')

    return <div >
        <div className="flex flex-col justify-between items-center min-h-screen px-4 bg-white text-center">
            <h1 className="text-xl font-bold mb-8">Elije paciente</h1>
            <form className="w-full max-w-xs space-y-6" onSubmit={handlePacientElectedSubmit}>
                <div className="text-left">
                    <label className="block mb-1 font-medium" htmlFor="healthCareNumber">Número tarjeta sanitaria</label>
                    <input className="w-full bg-green-700 text-white px-3 py-2 rounded focus:outline-none" type="text" id="healthCareNumber" name="healthCareNumber" placeholder="your healthCareNumber" />
                </div>
                <div>
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