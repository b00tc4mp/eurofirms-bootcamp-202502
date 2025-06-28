//Creamos el componente Alert que contendrá la cajita aleert propia que habiamos creado en App.
export const Alert = ({ message, onAccepted }) => {
    //Configuramos el handle de mio cajita, que contendrá la prop que indica que se ha clicado en aceptar
    const handleAcceptAlert = () => onAccepted()

    //Retornamos la cajita
    return <div className="p-10 bg-gray-500/70  absolute w-full h-full flex flex-col justify-center">
        <div className="bg-white border-2 border-black p-2 flex flex-col gap-2">
            <p>{message}</p> {/* cambiamos alertMessage por la props que recibimos que tiene su contenido */}

            <button className="bg-black text-white px-2 self-end" type="button" onClick={handleAcceptAlert}>Accept</button>
        </div>
    </div>
}