export const Confirm = ({ message, onCancelled, onAccepted }) => {
    const handleCancelConfirm = () => onCancelled()
    const handleAcceptConfirm = () => onAccepted()

    return <div className="p-10 bg-blue-500/40 fixed w-full h-full flex flex-col justify-center items-center">
        <div className="bg-blue-500 border-2 rounded-md border-blue p-2 flex flex-col gap-2">
            <p className="text-white">{message}</p>

            <div className="self-end flex gap-2">
                <button className="border-2 rounded-md bg-blue-50 text-blue-900 px-2 font-medium cursor-pointer" type="button" onClick={handleCancelConfirm}>Cancel</button>

                <button className="border-2 rounded-md bg-blue-50 text-blue-900 px-2 font-medium cursor-pointer" type="button" onClick={handleAcceptConfirm}>Accept</button>
            </div>
        </div>
    </div>
}