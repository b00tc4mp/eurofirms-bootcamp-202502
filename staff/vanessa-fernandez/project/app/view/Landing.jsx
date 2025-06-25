export const Landing = ({ onRegisterClicked, onLoginClicked }) => {

    const handleRegisterClick = () => onRegisterClicked()

    const handleLoginClick = () => onLoginClicked()

    console.log('Landing -> render')

    return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
            <i className="text-4xl block mb-4 font-bold text-blue"> 🏋️ GymPlan 🏋️</i>
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                Organiza tus entrenamientos con facilidad
            </h1>

            <div className="flex flex-col gap-4">
                <button
                    onClick={handleRegisterClick}
                    className="bg-blue-700 text-white py-2 rounded-xl hover:bg-blue-800 transition">
                        Register
                </button>

                <button
                    onClick={handleLoginClick}
                    className="bg-gray-800 text-white py-2 rounded-xl hover:bg-gray-900 transition">
                        Login
                </button>
            </div>
        </div>
    </div>
    )

}