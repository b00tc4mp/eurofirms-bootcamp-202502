export const Register = (props) => {
    console.log('Register -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>
        <div className="mt-2">
            <h1 className="text-xl">Register</h1>
            <form className="mt-2 flex flex-col gap-4">
                <div className="flex flex-col gap">
                    <label htmlFor="name">Name</label>
                    <input className="border-2 px-1" type="text" id="name" name="name" placeholder="your full name" />
                </div>
                <div className="flex flex-col gap">
                    <label htmlFor="email">E-mail</label>
                    <input className="border-2 px-1" type="email" id="email" name="email" placeholder="your e-mail" />
                </div>
                <div className="flex flex-col gap">
                    <label htmlFor="username">Username</label>
                    <input className="border-2 px-1" type="text" id="username" name="username" placeholder="your username" />
                </div>
                <div className="flex flex-col gap">
                    <label htmlFor="password">Password</label>
                    <input className="border-2 px-1" type="password" id="password" name="password" placeholder="your password" />
                </div>
                <div className="flex justify-between">
                    <a className="underline" href="#" onClick={props.onLoginClick}>Login</a>
                    <button className="bg-black text-white px-2" type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>

}
//Para el funcionamiento de los enlaces, creamos el objeto props, gracias a él podremos obtener las propiedades que necesitamos de nuestra app
//configuramos el evento onclick para que coja la propiedad que necesita

// // version sin navegacion entre enlaces
// export const Register = () => {
//     console.log('Register -> render')

//     return <div className="p-5">
//         <i className="text-2xl">Logo</i>
//         <div className="mt-2">
//             <h1 className="text-xl">Register</h1>
//             <form className="mt-2 flex flex-col gap-4">
//                 <div className="flex flex-col gap">
//                     <label htmlFor="name">Name</label>
//                     <input type="text" id="name" name="name" placeholder="your full name" />
//                 </div>
//                 <div className="flex flex-col gap">
//                     <label htmlFor="email">E-mail</label>
//                     <input type="email" id="email" name="email" placeholder="your e-mail" />
//                 </div>
//                 <div className="flex flex-col gap">
//                     <label htmlFor="username">Username</label>
//                     <input type="text" id="username" name="username" placeholder="your username" />
//                 </div>
//                 <div className="flex flex-col gap">
//                     <label htmlFor="password">Password</label>
//                     <input type="password" id="password" name="password" placeholder="your password" />
//                 </div>
//                 <div className="flex justify-between">
//                     <a className="underline" href="#">Login</a>
//                     <button className="bg-black text-white px-2" type="submit">Register</button>
//                 </div>
//             </form>
//         </div>
//     </div>

// }
//este cogido es copiado de la herramienta desarrolador Element; he copiado todo el div que me interesa; asi en todos
// Hay que corregir todos los input para que se cierren (antes de su > final hay que poner una barra
// Hay que cambiar class pòr className
//Hay que cambiar for por htmlFor