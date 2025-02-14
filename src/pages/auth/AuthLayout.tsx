import './../../features/auth/styles/AuthLayout.css'
import logoIcon from './../../assets/images/auth/logo.svg'
import Login from './Login'
import SignUp from './SignUp'
import Button from './../../features/auth/components/Button'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigation } from '../../hooks/useNavigation'

function AuthLayout() {
    const [isLoginPage, setIsLoginPage] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const location = useLocation()
    const { navigateTo } = useNavigation()
    const isIntroAnimation = sessionStorage.getItem("introPlayed") ? false : true

    useEffect(() => {
        if (!sessionStorage.getItem("introPlayed")) {
            const timer = setTimeout(() => {
                sessionStorage.setItem("introPlayed", "true")
            }, 1200)

            return () => clearTimeout(timer)
        }
    }, [])

    useEffect(() => {
        setIsLoginPage(location.pathname.includes('/login'))
        if (location.pathname.includes('/login')) {
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
        }
    }, [location.pathname])

    return (
        <div className="auth-layout">
            <div
                style={{ justifyContent: isLoginPage ? "" : "flex-end" }}
                className="auth-layout__container"
            >
                <img className={`auth-layout__logo ${isIntroAnimation ? "auth-layout__logo--intro" : ""}`} src={logoIcon} alt="logo" />

                <div
                    style={{ display: isLoginPage ? "" : "none" }}
                    className={`auth-layout__sign-up-container ${isIntroAnimation ? "auth-layout__intro-opacity" : ""}`}
                >
                    <span className="auth-layout__sign-up-text">Not a Join user?</span>

                    <Button
                        location={isLoginPage}
                        button="dark"
                        type="button"
                        name="Sign up"
                    />
                </div>

                <div className={`auth-layout__main-container ${isIntroAnimation ? "auth-layout__intro-opacity" : ""}`}>
                    <Routes>
                        <Route path="/" element={<Navigate to="login" replace />} />
                        <Route path="login" element={<Login />} />
                        <Route path="sign-up" element={<SignUp setIsLoading={setIsLoading} />} />
                    </Routes>
                </div>

                <div className={`auth-layout__legal-links ${isIntroAnimation ? "auth-layout__intro-opacity" : ""}`}>
                    <span onClick={() => navigateTo("/home/privacy-policy")} className="auth-layout__legal-text">Privacy Policy</span>
                    <span onClick={() => navigateTo("/home/legal-notice")} className="auth-layout__legal-text">Legal notice</span>
                </div>
            </div>

            {isLoading &&
                <div className="toast-message">
                    <div className="toast-message__text">You Signed Up successfully</div>
                </div>
            }
        </div>
    )
}

export default AuthLayout