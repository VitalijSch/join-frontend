import './../styles/Header.css'
import helpIcon from './../../../assets/images/home/help.svg'
import { useState } from 'react'
import { useLogout } from '../hooks/useLogout'
import { useAuthenticated } from '../hooks/useAuthenticated'
import { useNavigation } from '../../../hooks/useNavigation'
import { useLocation } from 'react-router-dom'

function Header() {
    const [showSubmenu, setShowSubmenu] = useState<boolean>(false)
    const logout = useLogout()
    const { navigateTo } = useNavigation()
    const isLoggedIn = useAuthenticated()
    const location = useLocation()
    const isExcludedPath = location.pathname.includes('privacy-policy') || location.pathname.includes('legal-notice')
    const isHelpPath = location.pathname.includes('help')

    const handleNavigationTo = (route: string) => {
        setShowSubmenu(false)
        navigateTo(route)
    }

    return (
        <div className="header">
            <span className="header__text">Kanban Project Management Tool</span>
            {isLoggedIn && !isExcludedPath &&
                <div className="header__menu-icons">
                    {!isHelpPath &&
                        <img onClick={() => navigateTo("/home/help")} className="header__help-icon" src={helpIcon} alt="help icon" />
                    }
                    <div
                        onClick={() => setShowSubmenu(true)}
                        style={{ backgroundColor: showSubmenu ? "#e1e6ec" : "" }}
                        className="header__user-initials"
                    >SM</div>
                </div>
            }
            {showSubmenu &&
                <div onClick={() => setShowSubmenu(false)} className="header__submenu-background">
                    <div className="header__submenu-container">
                        <div onClick={(e) => e.stopPropagation()} className="header__submenu">
                            <span onClick={() => handleNavigationTo("/home/legal-notice")} className="header__links">Legal Notice</span>
                            <span onClick={() => handleNavigationTo("/home/privacy-policy")} className="header__links">Privacy Policy</span>
                            <span onClick={logout} className="header__links">Log out</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Header