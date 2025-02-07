import './AuthLayout.css'
import logoIcon from './../../../assets/images/auth/logo.svg'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Login from '../login/Login'
import SignUp from '../sign-up/SignUp'
import Button from '../../../components/button/Button'
import { useEffect, useState } from 'react'

function AuthLayout() {
    const [isIntroAnimation, setIsIntroAnimation] = useState<boolean>(true)
    const [isLoginPage, setIsLoginPage] = useState<boolean>(false)
    const location = useLocation()

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsIntroAnimation(false)
        }, 1200);
        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        setIsLoginPage(location.pathname.includes('/login'));
    }, [location.pathname])

    return (
        <div className="auth-layout">
            <div
                style={{ justifyContent: isLoginPage ? "" : "flex-end" }}
                className="auth-layout__container"
            >
                <img className='auth-layout__logo' src={logoIcon} alt="logo" />

                <div
                    style={{ display: isLoginPage ? "" : "none" }}
                    className={`auth-layout__sign-up-container ${isIntroAnimation ? "" : "auth-layout__sign-up-container--opacity"}`}
                >
                    <span className="auth-layout__sign-up-text">Not a Join user?</span>

                    <Button
                        location={isLoginPage}
                        button="dark"
                        type="button"
                        name="Sign up"
                    />
                </div>

                <div className="auth-layout__main-container">
                    <Routes>
                        <Route path="/" element={<Navigate to="login" replace />} />
                        <Route path="login" element={<Login />} />
                        <Route path="sign-up" element={<SignUp />} />
                    </Routes>
                </div>

                <div className="auth-layout__legal-links">
                    <span className="auth-layout__legal-text">Privacy Policy</span>
                    <span className="auth-layout__legal-text">Legal notice</span>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout