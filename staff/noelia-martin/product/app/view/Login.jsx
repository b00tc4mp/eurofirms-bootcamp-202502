export const Login = (props) => {
    console.log('Login -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>
        <div className="mt-2">
            <h1 className="text-xl">Login</h1>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap">
                    <label htmlFor="username">Username</label>
                    <input className="border-2 px-1" type="text" id="username" name="username" placeholder="your username" />
                </div>
                <div className="flex flex-col gap">
                    <label htmlFor="password">Password</label>
                    <input className="border-2 px-1" type="password" id="password" name="password" placeholder="your password" />
                </div>
                <div className="flex justify-between">
                    <a className="underline" href="#" onClick={props.onRegisterClick}>Register</a>
                    <button className="bg-black text-white px-2" type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
}
//Para el funcionamiento de los enlaces, creamos el objeto props, gracias a él podremos obtener las propiedades que necesitamos de nuestra app
//configuramos el evento onclick para que coja la propiedad que necesita

//version sin navegacion entre enlaces
// export const Login = () => {
//     console.log('Login -> render')

//     return <div className="p-5">
//         <i className="text-2xl">Logo</i>
//         <div className="mt-2">
//             <h1 className="text-xl">Login</h1>
//             <form className="flex flex-col gap-4">
//                 <div className="flex flex-col gap">
//                     <label htmlFor="username">Username</label>
//                     <input className="border-2 px-1" type="text" id="username" name="username" placeholder="your username" />
//                 </div>
//                 <div className="flex flex-col gap">
//                     <label htmlFor="password">Password</label>
//                     <input className="border-2 px-1" type="password" id="password" name="password" placeholder="your password" />
//                 </div>
//                 <div className="flex justify-between">
//                     <a className="underline" href="#">Register</a>
//                     <button className="bg-black text-white px-2" type="submit">Login</button>
//                 </div>
//             </form>
//         </div>
//     </div>
// }