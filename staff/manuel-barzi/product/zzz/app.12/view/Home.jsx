export const Home = () => {
    console.log('Home -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>

        <div className="mt-2">
            <h1 className="text-xl">Hello, World!</h1>

            <button className="bg-black text-white px-2">Logout</button>
        </div>
    </div>
}