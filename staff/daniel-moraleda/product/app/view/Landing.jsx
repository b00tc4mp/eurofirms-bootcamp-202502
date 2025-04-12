export const Landing = (props) => {
    const onRegisterClick = props.onRegisterClick
    const onLoginClick = props.onLoginClick

    const handleRegisterClick = () => onRegisterClick()

    const handleLoginClick = () => onLoginClick()

    console.log('Landing -> render')

    return <div className="mt-2">
        <a className="underline" href="#" onClick={handleRegisterClick}>Register</a>
        &nbsp;or&nbsp;
        <a classname="underline" href="#" onClick={handleLoginClick}
        >Login</a>
    </div>

}