import './../styles/Header.css'
import helpIcon from './../../../assets/images/home/help.svg'
import { useState } from 'react'

function Header() {
    const [showSubmenu, setShowSubmenu] = useState<boolean>(false)

    return (
        <div className="header">
            <span className="header__text">Kanban Project Management Tool</span>
            <div className="header__menu-icons">
                <img className="header__help-icon" src={helpIcon} alt="help icon" />
                <div
                    onClick={() => setShowSubmenu(true)}
                    style={{ backgroundColor: showSubmenu ? "#e1e6ec" : "" }}
                    className="header__user-initials"
                >SM</div>
            </div>
            {showSubmenu &&
                <div onClick={() => setShowSubmenu(false)} className="header__submenu-background">
                    <div className="header__submenu-container">
                        <div onClick={(e) => e.stopPropagation()} className="header__submenu">
                            <span className="header__links">Legal Notice</span>
                            <span className="header__links">Privacy Policy</span>
                            <span className="header__links">Log out</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Header