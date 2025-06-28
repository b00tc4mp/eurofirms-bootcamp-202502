export const Home = (props) => {

    console.log('Home -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>

        <div className="mt-2">
            <h1 className="text-xl">Hello, World!</h1>

            <button className="bg-black text-white px-2" type='button' onClick={props.onUserLoggedOut}>Logout</button>
        </div>
    </div>
}
//configuro el boton de Logout con el funcionamiento de un onclick(como un enlace)
//pongo la props de app directamente en el button
