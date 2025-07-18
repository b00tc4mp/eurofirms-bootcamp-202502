export const Landing = ({ onRegisterClicked, onLoginClicked }) => {
    const handleRegisterClick = () => onRegisterClicked()

    const handleLoginClick = () => onLoginClicked()

    console.log('Landing -> render')

    return <div className="p-5  bg-[#C7C6C6] h-screen">
        <i className="text-2xl">Logo</i>

        <div className="mt-2">
            <a className="underline font-semibold" href="#" onClick={handleRegisterClick}>Register</a>&nbsp;or&nbsp;
            <a className="underline font-semibold" href="#" onClick={handleLoginClick}>Login</a>
        </div>
    </div>
}