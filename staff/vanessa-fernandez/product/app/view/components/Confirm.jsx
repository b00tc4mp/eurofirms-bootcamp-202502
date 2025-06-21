export const Confirm = ({ message, onCancelled, onAccepted }) => {
    const handleCancelConfirm = () => onCancelled()

    const handleAcceptConfirm = () => onAccepted()

    return (
        <div className="fixed inset-0  z-50 bg-white/10 backdrop-blur-sm flex items-center justify-center px-4">
            <div className="bg-white border border-black rounded-xl shadow-lg w-full max-w-md p-6 flex flex-col items-center gap-4">
                <div className="text-4xl text-[#119fd3]">❓❓❓</div>
                <p className="text-center text-gray-800">{message}</p>

                <div className="flex gap-4">
                    <button className="border border-black text-black px-4 py-2 rounded hover:bg-gray-100 transition"
                        type="button"
                        onClick={handleCancelConfirm}>
                        Cancel
                    </button>

                    <button className="bg-[#0ab5ee] hover:bg-[#098ec3] text-white px-4 py-y rounded transition-transform transform hover:scale-105 "
                        type="button"
                        onClick={handleAcceptConfirm}>
                        Accept
                    </button>
                </div>
            </div>
        </div>
    )
}