import { Link } from 'react-router-dom'

export const Landing = () => {
    console.log('Landing -> render')

    return <div className="p-20-px">
        <i className="block">Logo</i>
        <h1>Landing page</h1>
        <Link to='/register'>Register</Link> or <Link to='/login'>Login</Link>
    </div>
}