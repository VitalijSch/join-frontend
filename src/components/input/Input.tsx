import './Input.css'
import visibilityOffIcon from './../../assets/images/auth/visibility_off.svg'
import visibilityIcon from './../../assets/images/auth/visibility.svg'
import { useRef, useState } from 'react'

interface InputProps {
    placeholder: string
    type: 'text' | 'email' | 'password'
    fieldName: string
    icon: string
}

function Input({ placeholder, type, fieldName, icon }: InputProps) {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [inputIcon, setInputIcon] = useState<string>(icon)
    const [inputType, setInputType] = useState<'text' | 'email' | 'password'>(type)

    const handleInputIcon = () => {
        if (type !== 'password' || !inputRef.current) return;
        setInputIcon(inputRef.current.value ? (inputType === 'password' ? visibilityOffIcon : visibilityIcon) : icon);
    };

    const handleInputType = () => {
        if (type !== 'password') return;
        setInputType(prevType => prevType === 'password' ? 'text' : 'password');
        setInputIcon(prevIcon => prevIcon === visibilityOffIcon ? visibilityIcon : visibilityOffIcon);
    };

    return (
        <div className="input__container">
            <input
                onChange={handleInputIcon}
                ref={inputRef}
                className="input__field"
                placeholder={placeholder}
                type={inputType}
                name={fieldName}
                id={fieldName}
            />
            <img
                onClick={handleInputType}
                style={{ pointerEvents: inputIcon === visibilityIcon || inputIcon === visibilityOffIcon ? "visible" : "none" }}
                className="input__icon"
                src={inputIcon}
                alt="icon"
            />
        </div>
    )
}

export default Input