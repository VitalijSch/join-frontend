import { Navigate, Route, Routes } from 'react-router-dom'
import AuthLayout from './pages/auth/AuthLayout'
import HomeLayout from './pages/home/HomeLayout'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/auth" replace />} />
            <Route path="/auth/*" element={<AuthLayout />} />
            <Route path="/home/*" element={<HomeLayout />} />
        </Routes>
    )
}

export default App