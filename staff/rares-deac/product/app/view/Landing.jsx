import { Link } from 'react-router-dom'


export const Landing = () => {

    console.log('Landing -> render')

    return (
        <div className="p-20x">
            <i className="block bold">Logo</i>

            <div className="mt-10px">
                <Link to="/register" >Register
                </Link> or <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}