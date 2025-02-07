import { useNavigate } from 'react-router-dom'
import './Button.css'

interface ButtonProps {
    location?: boolean
    button: 'dark' | 'light'
    type: "submit" | "button"
    name: string
}

function Button({ location, button, type, name }: ButtonProps) {
    const navigate = useNavigate()

    const navigateToSignUp = () => {
        if (!location) return
        navigate("/auth/sign-up")
    }

    const buttonModifiers: Record<string, string> = {
        "Log in": 'button--login',
        "Sign up": 'button--sign-up',
        "Guest Log in": 'button--login',
    }

    return (
        <button
            onClick={navigateToSignUp}
            type={type}
            className={`button button--${button} ${buttonModifiers[name]}`}
        >
            {name}
        </button>
    )
}

export default Button