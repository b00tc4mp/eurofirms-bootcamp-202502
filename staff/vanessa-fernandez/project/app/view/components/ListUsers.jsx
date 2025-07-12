import { useEffect, useState } from 'react'
import { logic } from '../../logic'
import { useContext } from '../../context'

export const ListUsers = ({ onUserSelected }) => {
    const { alert } = useContext()
    const [users, setUsers] = useState([])

    useEffect(() => {
        try {
            logic.getUsers()
                .then(users => {
                    setUsers(users)
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch(error) {
            console.error(error)

            alert(error.message)
        }
        
    }, [])

    console.log('ListUser -> render')


    return (
        <div className="mt-8 w-full max-w-md">
            <h2 className="text-xl font-bold text-[#0ab5ee] mb-4 text-center">All Users</h2>
            <ul className="space-y-3">
                {users.map(user => (
                    <li key={user._id} className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
                        <span>{user.username}</span>
                        <button
                            onClick={() => onUserSelected(user)}
                            className="bg-[#0ab5ee] text-white px-3 py-1 rounded-lg text-sm hover:bg-[#099ecf]"
                        >Manage</button>
                    </li>
                ))}
            </ul>
        </div>
    )
    
}