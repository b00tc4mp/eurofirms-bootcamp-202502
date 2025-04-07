import { useNavigate } from "react-router-dom"
export const Home = () => {
    const navigate = useNavigate();
    console.log('Home -> render')

    return <div className="p-20x">
        <i>Logo</i>

        <h1>Hello, World!</h1>

        <button onClick={() => navigate ('/')} className="black-button">Logout</button>
    </div>
}