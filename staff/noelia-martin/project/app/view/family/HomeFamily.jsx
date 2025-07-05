import { useEffect, useState } from 'react'
import { logic } from '../../logic'
import { useContext } from '../../context'

export const HomeFamily = ({ onUserLoggedOut }) => {
    const { alert } = useContext()

    const [nameChild, setNameChild] = useState('World')

    useEffect(() => {
        try {
            logic.getUserFamilyNameChild()
                .then(nameChild => setNameChild(nameChild))
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }, [])

    const handleLogoutClick = () => {
        try {
            logic.logoutUser()

            onUserLoggedOut()
        } catch (error) {
            alert(error.message)
        }
    }

    console.log('HomeFamily -> render')

    return <div className="flex flex-col justify-between items-center min-h-screen px-4 bg-white text-center mt-6">
        <div className="w-full max-w-xs space-y-6">
            <h1 className="text-xl font-bold mb-8">Home family</h1>
            <div className="bg-green-700 text-white text-sm p-4 w-full max-w-md rounded">
                Ha accedido al usuario del menor {nameChild}.

                Complemente los siguientes formularios o si lo desea puede ver el estado actuál del documento de salud
            </div>

            <button className="bg-black text-white px-4 py-2 text-sm font-semibold rounded" type='button' onClick={handleLogoutClick}>Cerrar Sesión</button>


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