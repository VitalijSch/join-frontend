import './../../features/auth/styles/SignUp.css'
import personIcon from './../../assets/images/auth/person.svg'
import mailIcon from './../../assets/images/auth/mail.svg'
import lockIcon from './../../assets/images/auth/lock.svg'
import Input from './../../features/auth/components/Input'
import Button from './../../features/auth/components/Button'
import { signUpSchema } from './../../features/auth/schemas/signUpSchema'
import { useCustomForm } from '../../features/auth/hooks/useCustomForm'
import { useSignUpMutation } from './../../features/auth/hooks/useSignUpMutation'
import { useState } from 'react'
import { useNavigation } from '../../hooks/useNavigation'

function SignUp({ setIsLoading }: { setIsLoading: any }) {
    const { register, handleSubmit, errors, isValid, watch } = useCustomForm(signUpSchema)
    const [isChecked, setIsChecked] = useState<boolean | null>(null)
    const { usernameError, emailError, mutate } = useSignUpMutation(setIsLoading)
    const { navigateTo } = useNavigation()

    const toggleIsChecked = () => {
        resetIsCheckedIfNull()
        setIsChecked(prev => !prev)
    }

    const resetIsCheckedIfNull = () => {
        if (isChecked === null) setIsChecked(false)
    }

    const onSubmit = () => {
        const username = watch('username')
        const email = watch('email')
        const password = watch('password')
        if (isValid && isChecked) mutate({ username, email, password })
        resetIsCheckedIfNull()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="sign-up">
            <div onClick={() => navigateTo("/auth/login")} className="sign-up__arrow-icon-container">
                <svg className="sign-up__arrow-icon" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.43701 8.63255H19.333C20.0694 8.63255 20.6663 9.2295 20.6663 9.96588C20.6663 10.7023 20.0694 11.2992 19.333 11.2992H4.43701L10.6463 17.5085C11.167 18.0292 11.167 18.8733 10.6463 19.3939C10.1257 19.9145 9.28163 19.9145 8.76101 19.3939L0.74722 11.3801C-0.0338288 10.599 -0.0338272 9.33272 0.747221 8.55167L8.76101 0.537881C9.28163 0.0172601 10.1257 0.0172609 10.6463 0.537881C11.167 1.0585 11.167 1.90259 10.6463 2.42322L4.43701 8.63255Z" fill="#29ABE2" />
                </svg>
            </div>

            <div className="sign-up__headline-container">
                <h2 className="sign-up__headline">Sign up</h2>
                <div className="sign-up__line"></div>
            </div>

            <Input
                register={register('username')}
                errorMessage={errors.username?.message}
                usernameError={usernameError}
                placeholder="Name"
                type="text"
                icon={personIcon}
            />

            <Input
                register={register('email')}
                errorMessage={errors.email?.message}
                emailError={emailError}
                placeholder="Email"
                type="email"
                icon={mailIcon}
            />

            <Input
                register={register('password')}
                errorMessage={errors.password?.message}
                placeholder="Password"
                type="password"
                icon={lockIcon}
            />

            <Input
                password={watch('password')}
                confirmPassword={watch('confirmPassword')}
                register={register('confirmPassword')}
                errorMessage={errors.confirmPassword?.message}
                placeholder="Confirm Password"
                type="password"
                icon={lockIcon}
            />

            <div className="sign-up__privacy-policy-container">
                <div className="sign-up__checkbox-text-container">
                    <div
                        onClick={toggleIsChecked}
                        className={`sign-up__checkbox ${isChecked ? "sign-up__checkbox--checked" : ""}`}
                    ></div>
                    <div className="sign-up__text">I accept the <span className="sign-up__privacy-policy">Privacy policy</span></div>
                </div>

                <small className="sign-up__privacy-policy-error">{isChecked === false ? "Please accept the privacy policy." : ""}</small>
            </div>

            <Button
                button="dark"
                type="submit"
                name="Sign up"
            />
        </form>
    )
}

export default SignUp