import './Login.css'
import mailIcon from './../../../assets/images/auth/mail.svg'
import lockIcon from './../../../assets/images/auth/lock.svg'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'

function Login() {
    return (
        <form className="login">
            <div className="login__headline-container">
                <h2 className="login__headline">Log in</h2>
                <div className="login__line"></div>
            </div>

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