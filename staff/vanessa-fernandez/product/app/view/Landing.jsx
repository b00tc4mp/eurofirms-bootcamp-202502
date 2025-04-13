export const Landing = (props) => {
    const onRegisterClicked = props.onRegisterClicked
    const onLoginClicked = props.onLoginClicked

    const handleRegisterClick = () => onRegisterClicked()

    const handleLoginClick = () => onLoginClicked()

    console.log('Landing -> render')

    return <div className="px-5 py-6">
        <i className="text-2xl block mb-4">Logo</i>

        <div className="mt-2 text-lg">
            <a className="no-underline text-black font-medium" href="#" onClick={handleRegisterClick}>Register</a>
            &nbsp;or&nbsp;
            <a className="no-underline text-black font-medium" href="#" onClick={handleLoginClick}>Login</a>
        </div>

    </div>
}


