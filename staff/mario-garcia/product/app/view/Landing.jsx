export const Landing = (props) => {

    const onRegisterClicked = props.onRegisterClicked
    const onLoginClicked = props.onLoginClicked

    const handleRegisterClick = () => onRegisterClicked()

    const handleLoginClick = () => onLoginClicked()


    console.log('Landing -> render')

    return <div className="p-5">

        <i className="text-xl">Logo</i>

        <h1 className="text-3xl text-blue-900 font-semibold py-2">LANDING Page</h1>

        <a href="#" className="underline" onClick={handleRegisterClick}>Register</a>   or   <a href="#" className="underline" onClick={handleLoginClick}>Login</a>
    </div>

}