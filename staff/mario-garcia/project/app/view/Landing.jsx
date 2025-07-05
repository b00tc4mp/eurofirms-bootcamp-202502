export const Landing = ({ onRegisterClicked, onLoginClicked }) => {

    const handleRegisterClick = () => onRegisterClicked()
    const handleLoginClick = () => onLoginClicked()

    console.log('Landing -> render')

    return <div className="p-5">

        <i className="text-2xl font-extrabold text-blue-900">ACONPP</i>

        <div className="py-4">
            <img class="photo" src="https://www.achondroplasia.com/es-ar/wp-content/themes/achondroplasia-ar/images/figure-teen-color.svg" width="100" height="100"></img>

            <h1 className="text-3xl text-blue-700 font-bold py-3">LANDING Page</h1>
        </div>


        <a href="#" className="underline" onClick={handleRegisterClick}>Register</a> or <a href="#" className="underline" onClick={handleLoginClick}>Login</a>

    </div>
}