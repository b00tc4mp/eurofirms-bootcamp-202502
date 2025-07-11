export const Landing = ({ onRegisterClicked, onLoginClicked }) => {

    const handleRegisterClick = () => onRegisterClicked()

    const handleLoginClick = () => onLoginClicked()

    console.log('Landing -> render')

    return <>
        <div className="flex flex-col gap-8 px-10 py-8 max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center">
                <img src="/logo.jpg" alt="Infinity Travel" />

                <i class="logo">Infinity Travel</i>
            </div>
            <div>
                
                <p className="text-center px-20">
                    Autism-friendly leisure & travel information, for and by the autistic community.
                </p>
            </div>
            <div className="bg-[url('globe2.jpg')] bg-cover bg-center py-30 flex justify-around">
                <div className="flex flex-col gap-2">
                <p className="text-white font-extralight">New to the app?</p>
                <a className="bg-rose-800 text-white px-10 py-2 hover:bg-rose-900" href="#" onClick={handleRegisterClick}>Register</a>
                </div>
                
                <div className="flex flex-col gap-2">
                <p className="text-white font-extralight">Already registered?</p>
                <a className="bg-rose-800 text-white px-12 py-2 hover:bg-rose-900" href="#" onClick={handleLoginClick}>Login</a>
                </div>
               
            </div>

        </div>
    </>
}