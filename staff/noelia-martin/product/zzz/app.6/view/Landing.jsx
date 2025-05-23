// export const Landing = (props) => { 
//const onRegisterDeLanding = props.onRegisterClicked
//const onLoginClicked = props.onLoginClicked
//otra forma: 
// const { onRegisterClicked, onLoginClicked } = props
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
//he borrado comentarios de creacion de este fichero para poner el destructuring. Recuerda que están en la version app.2 (tambien he modificado algunas lineas, ya que use landing con codigo propio para comprender las variaciones que se podian hacer)
//aunque los comentarios se fueron arrastrando hasta app.5, también se pueden mirar ahi