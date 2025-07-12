export const Alert = ({ message, onAccepted }) => {
    const handleAcceptAlert = () => onAccepted()

    return <div className="p-10 bg-yellow-500/70 fixed w-full h-full flex flex-col justify-center items-center">
        <div className="bg-white border-2 border-black p-4 flex flex-col gap-2 min-w-md">
            <p>{message}</p>
            <button className="bg-black text-white py-1 px-4 self-end cursor-pointer" type="button" onClick={handleAcceptAlert}>Accept</button>
        </div>
    </div>
}