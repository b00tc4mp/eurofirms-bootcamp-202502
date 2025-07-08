export const Landing = ({ onRegisterClicked, onLoginClicked }) => {

    const handleRegisterClick = () => onRegisterClicked()

    const handleLoginClick = () => onLoginClicked()

    console.log('Landing -> render')

    return <>
        <div className="flex flex-col p-5 gap-8">
            <div className="flex flex-col items-center">
                <img src="/logo.jpg" alt="Infinity Travel" />

                <i class="logo">Infinity Travel</i>
            </div>
            <div>
                
                <p className="text-center px-20">
                    Autism-friendly leisure & travel information, for and by the autistic community.
                </p>
            </div>
            <div className="bg-[url('globe2.jpg')] bg-cover bg-center py-20 flex justify-around">
                <div className="flex flex-col gap-2">
                <p className="text-white font-extralight">New to the app?</p>
                <a className="bg-rose-800 text-white px-10" href="#" onClick={handleRegisterClick}>Register</a>
                </div>
                
                <div className="flex flex-col gap-2">
                <p className="text-white font-extralight">Already registered?</p>
                <a className="bg-rose-800 text-white px-12" href="#" onClick={handleLoginClick}>Login</a>
                </div>
               
            </div>

        </div>
    </>
}