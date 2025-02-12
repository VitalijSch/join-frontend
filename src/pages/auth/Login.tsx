import './../../features/auth/styles/Login.css'
import mailIcon from './../../assets/images/auth/mail.svg'
import lockIcon from './../../assets/images/auth/lock.svg'
import Button from './../../features/auth/components/Button'
import Input from './../../features/auth/components/Input'
import { loginSchema } from './../../features/auth/schemas/loginSchema'
import { useCustomForm } from './../../features/auth/hooks/useForm'
import { useLoginUserMutation } from './../../features/auth/hooks/useLoginUserMutation'

function Login() {
    const { register, handleSubmit, errors, isValid, watch } = useCustomForm(loginSchema)
    const { passwordError, mutate } = useLoginUserMutation()

    const onSubmit = () => {
        const email = watch('email')
        const password = watch('password')
        if (isValid) mutate({ email, password })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="login">
            <div className="login__headline-container">
                <h2 className="login__headline">Log in</h2>
                <div className="login__line"></div>
            </div>

            <Input
                register={register('email')}
                errorMessage={errors.email?.message}
                placeholder="Email"
                type="email"
                icon={mailIcon}
            />

            <Input
                register={register('password')}
                errorMessage={errors.password?.message}
                passwordError={passwordError}
                placeholder="Password"
                type="password"
                icon={lockIcon}
            />

            <div className="login__button-container">
                <Button
                    button="dark"
                    type="submit"
                    name="Log in"
                />
                <Button
                    button="light"
                    type="button"
                    name="Guest Log in"
                />
            </div>
        </form>
    )
}

export default Login