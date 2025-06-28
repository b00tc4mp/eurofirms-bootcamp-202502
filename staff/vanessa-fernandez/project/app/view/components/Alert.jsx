export const Alert = ({ message, onAccepted }) => {
    const handleAcceptAlert = () => onAccepted()

    return (
        <div className="fixed inset-0 z-50 bg-white/10 backdrop-blur-sm flex items-center justify-center px-4">
            <div className="bg-white border border-black rounded-xl shadow-lg w-full max-w-md p-6 flex flex-col items-center gap-4">
                <div className="text-4xl text-[#119fd3]">⚠️</div>
                <p className="text-center text-gray-800">{message}</p>

                <button className="bg-[#0ab5ee] hover:bg-[#098ec3] text-white font-medium px-4 py-2 rounded transition-transform tranform hover:sclae-105"
                    type="button"
                    onClick={handleAcceptAlert}>Accept</button>
            </div>
        </div>

    )
}