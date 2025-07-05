export const LandingFamily = ({ onLoginFamilyClicked, onUserFamilyRegistered }) => {

    const handleLoginFamilyClick = () => onLoginFamilyClicked()
    const handleRegisterFamilyClick = () => onUserFamilyRegistered()

    console.log('LandingFamily -> render')

    return <div className="flex flex-col justify-between items-center min-h-screen px-4 bg-white text-center">
        <div className="flex flex-col items-center space-y-10 mt-20">
            <a className="font-semibold underline text-lg hover:text-green-700" href="#" onClick={handleLoginFamilyClick}>Iniciar Sesión</a>
            <a className="font-semibold underline text-lg hover:text-green-700" href="#" onClick={handleRegisterFamilyClick}>Registrarse</a>
        </div>
        <div className="w-full flex justify-center pb-4">
            <img
                src="public/img/logo-JuntaAndalucia.png"
                alt="Logo Junta de Andalucía"
                className="h-30"
            />
        </div>
    </div>
}