export const Home = () => {
    console.log("Home -> render")

    return <div classname="p-5">
        <i className="text-2xl">Logo</i>

        <div className="mt-2">
            <h1 className="text-xl">Hello, World!</h1>
        </div>
        <button classname="bg-black text-white px-2">Logout</button>
    </div>
}