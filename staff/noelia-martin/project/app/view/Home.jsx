import { useEffect, useState } from 'react'
import { logic } from '../logic'
import { useContext } from '../context'
import { data } from '../data'

export const Home = ({ onLogoutUser }) => {
    const { alert } = useContext()

    const [name, setName] = useState('World')
    const [nameElected, setNameElected] = useState('World')

    let isDoctor
    try {
        isDoctor = logic.isUserDoctor()
    } catch (error) {
        console.error(error)

        alert(error.message)
    }
    useEffect(() => {
        try {
            logic.getNamePacient()
                .then(name => setName(name))
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })

            if (isDoctor) {
                logic.getNamePacient(data.idPacient)
                    .then(nameElected => setNameElected(nameElected))
                    .catch(error => {
                        console.error(error)

                        alert(error.message)
                    })
            }
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }, [])

    const handleLogoutUserClick = () => {
        try {
            logic.logoutUser()

            onLogoutUser()
        } catch (error) {
            alert(error.message)
        }
    }

    console.log('Home -> render')

    return <div className="flex flex-col justify-between items-center min-h-screen px-4 bg-white text-center mt-6">
        <div className="w-full max-w-xs space-y-6">
            <h1 className="text-xl font-bold mb-8">Home</h1>
            <div className="bg-green-700 text-white text-sm p-4 w-full max-w-md rounded">
                {isDoctor ? <div>Hola Doctor {name}. <br></br> Ha accedido al usuario del menor {nameElected} .</div> : <div>Hola, ha accedido al usuario del menor {name}.</div>}
                <br></br>
                Complemente los siguientes formularios o si lo desea puede ver el estado actuál del documento de salud
            </div>

            <button className="bg-black text-white px-4 py-2 text-sm font-semibold rounded" type='button' onClick={handleLogoutUserClick}>Cerrar Sesión</button>


        </div>
        <div className="w-full flex justify-center pb-4">
            <img
                src="public/img/logo-JuntaAndalucia.png"
                alt="Logo Junta de Andalucía"
                className="h-30"
            />
        </div>
    </div>
}