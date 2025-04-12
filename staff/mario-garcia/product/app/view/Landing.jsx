export const Landing = (props) => {

    const onRegisterClick = props.onRegisterClick
    const onLoginClick = props.onLoginClick

    const handleRegisterClick = () => onRegisterClick()

    const handleLoginClick = () => onLoginClick()


    console.log('Landing -> render')

    return <div className="p-5">

        <i className="text-xl">Logo</i>

        <h1 className="text-3xl text-blue-900 font-semibold py-2">LANDING Page</h1>

        <a href="#" className="underline" onClick={handleRegisterClick}>Register</a>   or   <a href="#" className="underline" onClick={handleLoginClick}>Login</a>
    </div>

}