export const Landing = ({ onRegisterClicked, onLoginClicked }) => {

    const handleRegisterClickDeLanding = () => onRegisterClicked()
    const handleLoginClick = () => onLoginClicked()

    console.log('Landing -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>
        <div className="mt-2">
            <a className="underline" href="#" onClick={handleRegisterClickDeLanding}>Register</a>
            &nbsp;or&nbsp;
            <a className="underline" href="#" onClick={handleLoginClick}>Login</a>
        </div>
    </div>
}