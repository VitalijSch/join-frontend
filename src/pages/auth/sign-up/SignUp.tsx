import './SignUp.css'
import personIcon from './../../../assets/images/auth/person.svg'
import mailIcon from './../../../assets/images/auth/mail.svg'
import lockIcon from './../../../assets/images/auth/lock.svg'
import Input from '../../../components/input/Input'
import Button from '../../../components/button/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const navigate = useNavigate()

    const toggleIsChecked = () => {
        setIsChecked(prev => !prev)
    }

    const navigateToLogin = () => {
        navigate("/auth/login")
    }

    return (
        <div className="sign-up">
            <div onClick={navigateToLogin} className="sign-up__arrow-icon-container">
                <svg className="sign-up__arrow-icon" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.43701 8.63255H19.333C20.0694 8.63255 20.6663 9.2295 20.6663 9.96588C20.6663 10.7023 20.0694 11.2992 19.333 11.2992H4.43701L10.6463 17.5085C11.167 18.0292 11.167 18.8733 10.6463 19.3939C10.1257 19.9145 9.28163 19.9145 8.76101 19.3939L0.74722 11.3801C-0.0338288 10.599 -0.0338272 9.33272 0.747221 8.55167L8.76101 0.537881C9.28163 0.0172601 10.1257 0.0172609 10.6463 0.537881C11.167 1.0585 11.167 1.90259 10.6463 2.42322L4.43701 8.63255Z" fill="#29ABE2" />
                </svg>
            </div>

            <div className="sign-up__headline-container">
                <h2 className="sign-up__headline">Sign up</h2>
                <div className="sign-up__line"></div>
            </div>

            <Input
                placeholder="Name"
                type="text"
                fieldName="name"
                icon={personIcon}
            />

            <Input
                placeholder="Email"
                type="email"
                fieldName="email"
                icon={mailIcon}
            />

            <Input
                placeholder="Password"
                type="password"
                fieldName="password"
                icon={lockIcon}
            />

            <Input
                placeholder="Confirm Password"
                type="password"
                fieldName="confirmPassword"
                icon={lockIcon}
            />

            <div className="sign-up__privacy-policy-container">
                <div
                    onClick={toggleIsChecked}
                    className={`sign-up__checkbox ${isChecked ? "sign-up__checkbox--checked" : ""}`}
                ></div>
                <div className="sign-up__text">I accept the <span className="sign-up__privacy-policy">Privacy policy</span></div>
            </div>

            <Button
                button="dark"
                type="submit"
                name="Sign up"
            />
        </div>
    )
}

export default SignUp