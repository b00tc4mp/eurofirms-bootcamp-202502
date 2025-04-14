export const Home = () => {
    console.log('Home -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>
        <h1 className="text-2xl my-3">Home</h1>
        <h2 className="flex justify-center my-5 font-semibold">Hello, Home!</h2>
        <button className="bg-black text-white py-2 px-4">Log out</button>
    </div>
}