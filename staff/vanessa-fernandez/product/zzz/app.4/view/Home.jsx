export const Home = (props) => {
    const onUserLoggedOut = props.onUserLoggedOut

    const handleLogoutClick = () => onUserLoggedOut()

    console.log('Home -> render')

    return <div className="px-5">

        <i className="text-2xl block">Logo</i>

        <div className="mt-2">
            <h1 className="text-[22px] font-bold text-[#7575d2]">Hello, World!</h1>

            <button className=" mt-2 text-white bg-[#0ab5ee] font-thin border-none rounded-[10px] cursor-pointer" 
            type="button" 
            onClick={handleLogoutClick}>Logout
            </button>
        </div>
    </div>
}

