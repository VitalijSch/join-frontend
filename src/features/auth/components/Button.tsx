import './../styles/Button.css'
import { useNavigation } from '../../../hooks/useNavigation'

interface ButtonProps {
    location?: boolean
    button: 'dark' | 'light'
    type: "submit" | "button"
    name: string
}

const buttonModifiers: Record<string, { className: string, path: string }> = {
    'Log in': { className: 'button--login', path: '/auth/login' },
    'Sign up': { className: 'button--sign-up', path: '/auth/sign-up' },
    'Guest Log in': { className: 'button--login', path: '/auth/guest-login' },
}

function Button({ location, button, type, name }: ButtonProps) {
    const { navigateTo } = useNavigation()

    const handleClick = () => {
        if (location && buttonModifiers[name]) {
            navigateTo(buttonModifiers[name].path)
        }
    }

    return (
        <button
            onClick={location ? handleClick : undefined}
            type={type}
            className={`button button--${button} ${buttonModifiers[name].className}`}
        >
            {name}
        </button>
    )
}

export default Button