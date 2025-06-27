import { useEffect, useState } from 'react'
import { logic } from '../logic'
import { useContext } from '../context'

export const Home = ({ onuserLoggedOut }) => {
    const { alert } = useContext()

    const [username, setUsername] = useState('World')

    useEffect(() => {
        try{
            logic.getUserUsername()
                .then(username => setUsername(username))
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch(error) {
            console.error(error)

            alert(error.message)
        }
    }, [])

    const handleLogoutClick = () => {
        try{
            logic.logoutUser()
        }
    }
}