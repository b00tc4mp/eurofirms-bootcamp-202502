export const Landing = (props) => {
    const onRegisterClick = props.onRegisterClick
    const onLogicClick = props.onLoginClick

    const handleRegisterClick = () => onRegisterClick()

    const handleLoginClick = () => onLoginClick()

    console.log("Landing -> render")

    return <div className="p-5">
        <i className="text-5xl">Logo</i>

        <div className="mt-2">
            <a className="underline" href="#" onClick={handleRegisterClick}>Login</a>
            &nbsp;or&nbsp;
            <a className="underline" href=# onClick={handleLoginClicl}>Login</a>
        </div>
    </div>
}