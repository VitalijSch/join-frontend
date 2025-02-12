import './../styles/Input.css'
import visibilityOffIcon from './../../../assets/images/auth/visibility_off.svg'
import visibilityIcon from './../../../assets/images/auth/visibility.svg'
import { useState } from 'react'

interface InputProps {
    password?: string
    confirmPassword?: string
    usernameError?: string
    emailError?: string
    passwordError?: string
    register: any
    errorMessage: any
    placeholder: string
    type: 'text' | 'email' | 'password'
    icon: string
}

function Input({ usernameError, emailError, passwordError, password, confirmPassword, register, errorMessage, placeholder, type, icon }: InputProps) {
    const [inputIcon, setInputIcon] = useState<string>(icon)
    const [inputType, setInputType] = useState<'text' | 'email' | 'password'>(type)

    const handleInputIcon = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (type !== 'password') return
        setInputIcon(e.target.value !== '' ? (inputType === 'password' ? visibilityOffIcon : visibilityIcon) : icon)
    }

    const handleInputType = () => {
        if (type !== 'password') return
        setInputType(prevType => prevType === 'password' ? 'text' : 'password')
        setInputIcon(prevIcon => prevIcon === visibilityOffIcon ? visibilityIcon : visibilityOffIcon)
    }

    const checkPasswordMatch = (): string => {
        if (password === confirmPassword) return ''
        return "Your passwords don't match. Please try again"
    }

    return (
        <div className="input__container">
            <input
                {...register}
                onChange={(e) => {
                    register.onChange(e)
                    handleInputIcon(e)
                }}
                className="input__field"
                placeholder={placeholder}
                type={inputType}
            />
            <img
                onClick={handleInputType}
                style={{ pointerEvents: inputIcon === visibilityIcon || inputIcon === visibilityOffIcon ? "visible" : "none" }}
                className="input__icon"
                src={inputIcon}
                alt="icon"
            />
            <small className="input__error-message">{errorMessage ? errorMessage : (confirmPassword ? checkPasswordMatch() : "")}{usernameError} {emailError} {passwordError}</small>
        </div>
    )
}

export default Input