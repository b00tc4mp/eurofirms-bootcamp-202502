export const Landing = (props) => {
    const onRegisterClicked = props.onRegisterClicked 
    const onLoginClicked = props.onLoginClicked

    const handleRegisterClick = () => onRegisterClicked()

    const handleLoginClick = () => onLoginClicked()

    console.log('Landing -> render')


    return <div className="p-20-px">
        <i className="block">Logo</i>
        <h1>Landing page</h1>
        <a href="#" onClick={handleRegisterClick}>Register</a>
        &nbsp;or&nbsp;
        <a href="#" onClick={handleLoginClick}>Login</a>
    </div>
}


