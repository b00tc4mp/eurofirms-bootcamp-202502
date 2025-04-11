export const Home = () => {

    console.log('Home -> render')

    return <div className="p-5">

        <i className="text-xl">Logo</i>

        <h1 className="text-3xl text-blue-900 font-semibold py-2">HOME Page</h1>

        <h2 className="text-xl text-orange-700 py-2">Hello, World!</h2>

        <button className="border-1 rounded-md bg-orange-50 text-orange-900 px-2 font-medium">Logout</button>

    </div>

}