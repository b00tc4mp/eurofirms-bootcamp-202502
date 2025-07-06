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
            <div className="bg-[url('globe2.jpg')] bg-cover bg-center py-20 flex justify-center">
                
                <a className="underline text-white px-20" href="#" onClick={handleRegisterClick}>Register</a>
                &nbsp;or&nbsp;
                <a className="underline text-white px-20" href="#" onClick={handleLoginClick}>Login</a>
               
            </div>

        </div>
    </>
}