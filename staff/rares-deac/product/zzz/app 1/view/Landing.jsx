import { Link } from 'react-router-dom'


export const Landing = () => {

    console.log('Landing -> render')

    return (
        <div className="p-5">
            <i className="text-2xl">Logo</i>

            <div className="mt-2 ">
                <Link to="/register" className="underline" >Register
                </Link> or <Link className="underline" to='/login'>Login</Link>
            </div>
        </div>
    )
}