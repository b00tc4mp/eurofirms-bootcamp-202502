export const Confirm = ({ message, onCancelled, onAccepted }) => {
    const handleCancelConfirm = () => onCancelled()
    const handleAcceptConfirm = () => onAccepted()

    return <div className="p-10 bg-gray-500/70  absolute w-full h-full flex flex-col justify-center">
        <div className="bg-white border-2 border-black p-2 flex flex-col gap-2">
            <p>{message}</p>{/* cambiamos confirmMessage por la props que recibimos que tiene su contenido */}

            <div className="self-end flex gap-2">
                <button className="text-black border-black border-2 px-2" type="button" onClick={handleCancelConfirm}>Cancel</button>

                <button className="bg-black text-white px-2" type="button" onClick={handleAcceptConfirm}>Accept</button>
            </div>
        </div>
    </div>
}