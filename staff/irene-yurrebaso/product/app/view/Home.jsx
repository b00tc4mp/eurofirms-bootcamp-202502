export const Home = () => {
    console.log('Home -> render')

    return <div class="p-20px">
        <i>Logo</i>
        <h1>Home</h1>
        <h2 className="flex justify-center bold p-20px">Hello, Home!</h2>
        <button className="black-button">Log out</button>
    </div>
}