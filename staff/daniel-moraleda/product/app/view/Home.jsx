export const Home = props => {
    const onUserLoggedOut = props.onUserLoggedOut
    const handleLogoutClick = () => onUserLoggedOut()
    console.log('Home -> render')


    return <div className="p-5">
        <i className="text2x1">Logo</i>

        <div className="mt-2">
            <h1 classname="text-x1">Hello, World!</h1>

            <button
                className="bg-black text-white px-2"
                type="button"
                onClick={handleLogoutClick}
            >Logout</button>
        </div>
    </div>
}