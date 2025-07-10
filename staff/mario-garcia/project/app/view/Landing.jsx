export const Landing = ({ onRegisterClicked, onLoginClicked }) => {

    const handleRegisterClick = () => onRegisterClicked()
    // Arrow's Function App.jsx NAVIGATE = Line 23 -- Register is SHOWED
    // ROUTES LANDING = Line 84 + ROUTES LOGIN = Line 104
    // It is LINKED to the Button -- Register is SHOWED

    const handleLoginClick = () => onLoginClicked()
    // Arrow's Function App.jsx NAVIGATE = Line 25 -- Login is SHOWED 
    // ROUTES LANDING = Line 85 + ROUTES REGISTER = Line 94
    // It is LINKED to the Button -- Login is SHOWED

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