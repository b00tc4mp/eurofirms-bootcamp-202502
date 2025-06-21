export const Alert = ({ message, onAccepted }) => {
    const handleAcceptAlert = () => onAccepted()

    return <div className="p-10 bg-orange-500/40 absolute w-full h-full flex flex-col justify-center">
        <div className="bg-orange border-2 border-orange p-2 flex flex-col gap-2 rounded-md self-center">
            <p>{message}</p>

            <button className="border-2 rounded-md bg-orange-50 text-orange-900 px-2 font-medium cursor-pointer" type="button" onClick={handleAcceptAlert}>Accept</button>
        </div>
    </div>
}