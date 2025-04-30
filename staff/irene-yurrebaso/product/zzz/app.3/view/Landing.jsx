//el parametro 'props' es un objeto con propiedades (se suele usar el nombre 'props'). En este objeto cogemos la propiedad 'onRegisterClick' que hemos puesto en App.jsx

export const Landing = (props) => {
    //utilizamos el mismo nombre para la variable (onRegisterClick) q la propiedad para q sea facil de seguir
    const onRegisterClicked = props.onRegisterClicked
    const onLoginClicked = props.onLoginClicked

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