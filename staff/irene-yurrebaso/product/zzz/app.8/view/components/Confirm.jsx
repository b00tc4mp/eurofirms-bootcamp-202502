export const Confirm = ({ message, onCancelled, onAccepted }) => {
    const handleCancelConfirm = () => onCancelled()

    const handleAcceptConfirm = () => onAccepted()

    return <div className="p-10 bg-yellow-500/70 absolute w-full h-full flex flex-col justify-center">
        <div className="bg-white border-2 border-black p-2 flex flex-col gap-2">
            <p>{message}</p>
            <div className="self-end flex gap-4">
                <button className="text-black border-2 py-1 px-4" type="button" onClick={handleCancelConfirm}>Cancel</button>
                <button className="bg-black text-white py-1 px-4" type="button" onClick={handleAcceptConfirm}>Accept</button>
            </div>
        </div>
    </div>
}