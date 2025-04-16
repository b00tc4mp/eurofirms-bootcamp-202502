export const Home = props => {
    const onUserLoggedOut = props.onUserLoggedOut

    const handleLogoutClick = () => onUserLoggedOut()

    console.log('Home -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>
        <h1 className="text-2xl my-3">Home</h1>
        <h2 className="flex justify-center my-5 font-semibold">Hello, Home!</h2>
        <button 
            className="bg-black text-white py-2 px-4" 
            type="button"
            onClick={handleLogoutClick}
        >Log out</button>
    </div>
}