export const Landing = (props) => { //props es un objeto, se utiliza para indicar que hay al menos una propiedad para que la tenga en cuenta

    //Primero creamos variables para cada propiedad: el nombre es indiferente, pero la llamada a la propiedad debe tener el mismo que nuestra app
    const onRegisterDeLanding = props.onRegisterClick

    //Tercero, creamos la funcion handle(manejar), nombres idem que lo anterior. Esta funcion llama a la propiedad que le interesa creada en el paso primero y ya pasamos el control a la app, que es la que se encargara de hacer los pintados
    //en llamadas a propiedades hay que acabar con ()
    const handleRegisterClickDeLanding = () => onRegisterDeLanding()

    console.log('Landing -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>
        <div className="mt-2">
            <a className="underline" href="#" onClick={handleRegisterClickDeLanding}>Register</a> {/* Segundo con el evento que se dispara al hacer click, indicamos la llamada a la funcion handle */}
            &nbsp;or&nbsp;
            <a className="underline" href="#" onClick={props.onLoginClick}>Login</a>
        </div>
    </div>
}
//onClick se debe referenciar a una función o a una props la cual referencia tras referencia es una función
//Este codigo está bien para comprender el funcionamiento de los estados, pero sería mucho mas rapido poner directamente en onClick la llamada a la propiedad que me interese. Asi lo hice en el enlace de Login y en todos los demas enlaces de view

//version sin navegacion entre enlaces
// export const Landing = () => {
//     console.log('Landing -> render')

//     return <div className="p-20px">
//         <i className="block">Logo</i>
//         <a href="#">Register</a> or <a href="#">Login</a>
//     </div>
// }

