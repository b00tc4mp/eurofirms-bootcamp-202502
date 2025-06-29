//destructuracion de las propiedades del objeto props, que pasamos como parametro

export const Landing = ({ onRegisterClicked, onLoginClicked }) => {
    
    const handleRegisterClick = () => onRegisterClicked()

    const handleLoginClick = () => onLoginClicked()

    console.log('Landing -> render')

    return <>
        <div className="p-5">

            <i className="text-2xl">Logo</i>

            <h1 className="my-3 text-xl">Landing</h1>

            <a className="underline" href="#" onClick={handleRegisterClick}>Register</a> 
            &nbsp;or&nbsp; 
            <a className="underline" href="#" onClick={handleLoginClick}>Login</a>

        </div>
    </>
}