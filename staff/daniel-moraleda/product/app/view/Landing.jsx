export const Landing = (props) => {
    const onRegisterClicked = props.onRegisterClicked
    const onLoginClicked = props.onLoginClicked

    const handleRegisterClick = () => onRegisterClicked()

    const handleLoginClick = () => onLoginClicked()

    console.log('Landing -> render')

    return <div className="mt-2">
        <a className="underline" href="#" onClick={handleRegisterClick}>Register</a>
        &nbsp;or&nbsp;
        <a className="underline" href="#" onClick={handleLoginClick}
        >Login</a>
    </div>

}