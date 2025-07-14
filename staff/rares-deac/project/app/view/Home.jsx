import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router'

import { logic } from '../logic'

import { useContext } from '../context'

import { Routines } from './components/Routines'
import {CreateRoutine } from './components/CreateRoutine.jsx'
import { useContext } from '../context'

export const Home = ({ onUserLoggedOut }) => {
    const navigate = useNavigate()

    const { alert } = useContext()

    const [username, setUsername] = useState('World')

    useEffect(() => {
        try {
            logic.getUserUsername()
                .then(username => {
                    setUsername(username)

                    navigate('/routines')
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }, [])

    const handleLogoutClick = () => {
        try {
            logic.logoutUser()

            onUserLoggedOut()
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCreateRoutineClick = () => navigate('/create-routine')

    const handleCreateRoutineCancelClicked = () => navigate('/routines')

    const handleRoutineCreated = () => navigate('/routines')

    console.log('Home -> render')

    return <div className='p-5'>
        <i classNAme="text-2xl">Logo</i>

        <div className="mt-2">
            <h1 className='text-xl'>Hello, {username}</h1>

            <button
                className="bg-black text-white px-2 mx-1"
                type="button"
                onClick={handleCreateRoutineClick}>+ NUEVO</button>

            <button
                className="bg-black text-white px-2 mx-1"
                type="button"
                onClick={handleLogoutClick}
            >Logout</button>
        </div>

        <Routes>
            <Route path="/routines" element={<Routines alert={alert} confirm={confirm} />} />
            <Route path="/create-routine" element={<CreateRoutine
                onCancelClicked={handleCreateRoutineCancelClicked}
                onRoutineCreated={handleRoutineCreated}
            />} />
        </Routes>

    </div>
}