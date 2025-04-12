export const Home = (props) => {
    const onUserLoggedOut = props.onUserLoggedOut

    const handleLogoutClick = () => onUserLoggedOut()

    console.log('Home -> render')

    return <div className="p-20px">

        <i>Logo</i>

        <h1>Hello, World!</h1>
        <button className="black-button" type="button" onClick={handleLogoutClick}>Logout</button>
    </div>
}