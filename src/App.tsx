import AuthLayout from './pages/auth/auth-layout/AuthLayout'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/auth" replace />} />
            <Route path="/auth/*" element={<AuthLayout />} />
        </Routes>
    )
}

export default App