export const Alert = ({ message, onAccepted }) => {
    const handleAcceptAlert = () => onAccepted()

    return <div className="p-10 bg-yellow-500/70 fixed w-full h-full flex flex-col justify-center">
        <div className="bg-white border-2 border-black p-2 flex flex-col gap-2">
            <p>{message}</p>
            <button className="bg-black text-white py-1 px-4 self-end" type="button" onClick={handleAcceptAlert}>Accept</button>
        </div>
    </div>
}

//cuando hacemos onClick en el boton, llamaremos al handleAcceptAlert q esta dentro del componente, y esto a su vez llamara a una prop onAccepted q le indicara al componente superior App q hemos aceptado.