// export const Welcome = ({ onLandingFamilyClicked, onLoginDoctorClicked }) => {

//     const handleLandingFamilyClick = () => onLandingFamilyClicked()
//     const handleLoginDoctorClick = () => onLoginDoctorClicked()

//     console.log('Welcome -> render')

//     return <div className="p-5">
//         <i className="text-2xl">Logo</i>
//         <div className="mt-2">
//             <a className="underline" href="#" onClick={handleLandingFamilyClick}>Familiar</a>
//             &nbsp;or&nbsp;
//             <a className="underline" href="#" onClick={handleLoginDoctorClick}>Personal Sanitario</a>
//         </div>
//     </div>
// }

export const Welcome = ({ onLandingFamilyClicked, onLoginDoctorClicked }) => {

    const handleLandingFamilyClick = () => onLandingFamilyClicked()
    const handleLoginDoctorClick = () => onLoginDoctorClicked()

    console.log('Welcome -> render')

    return <div className="flex flex-col justify-between items-center min-h-screen px-4 bg-white text-center mt-6">
        <div className="bg-green-700 text-white text-sm p-4 w-full max-w-md rounded">
            Bienvenido al Documento de Salud Infantil de la Consejería de Salud y
            Familias de la Junta de Andalucía
        </div>
        <div className="flex gap-12 mt-10 text-black font-medium underline">
            <a className="hover:text-green-700 " href="#" onClick={handleLandingFamilyClick}>Familiar</a>
            <a className="hover:text-green-700 " href="#" onClick={handleLoginDoctorClick}>Personal Sanitario</a>
        </div>
        <div className="w-full flex justify-center pb-4">
            <img
                src="public/img/logo-JuntaAndalucia.png"
                alt="Logo Junta de Andalucía"
                className="h-30"
            />
        </div>
    </div>
}