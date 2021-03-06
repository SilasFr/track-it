import { useState, React } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Habits from './Habits'
import Login from './Login'
import SignUp from './SignUp'
import Today from './Today'
import UserContext from './contexts/UserContext'
import HabitsContext from './contexts/HabitsContext'
import History from './History'

export default function App() {
    const [currentUser, setCurrentUser] = useState()
    const [habits, setHabits] = useState([])
    const [daylyHabits, setDaylyHabits] = useState([])
    const [percentage, setPercentage] = useState(0)
    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            <HabitsContext.Provider value={{ habits, setHabits, daylyHabits, setDaylyHabits, percentage, setPercentage }} >
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/cadastro' element={<SignUp />} />

                        <Route path='/habitos' element={<Habits />} />
                        <Route path='/hoje' element={<Today />} />
                        <Route path='/historico' element={<History />} />
                    </Routes>
                </BrowserRouter>
            </HabitsContext.Provider>
        </UserContext.Provider>
    )
}