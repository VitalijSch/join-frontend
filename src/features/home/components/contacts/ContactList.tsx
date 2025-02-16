import './../../styles/contacts/ContactList.css'
import personAddIcon from './../../../../assets/images/home/contacts/person-add.svg'
import scrollbarTopIcon from './../../../../assets/images/home/contacts/scrollbar-top.svg'
import scrollbarBottomIcon from './../../../../assets/images/home/contacts/scrollbar-bottom.svg'
import React from "react"

type ContactListProps = {
    setShowAddContact: React.Dispatch<React.SetStateAction<boolean>>
}

function ContactList({ setShowAddContact }: ContactListProps) {
    const musterArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    return (
        <div className="contact-list">
            <div className="contact-list__button-container">
                <button onClick={() => setShowAddContact(true)} className="contact-list__button">
                    <span className="contact-list__text">Add new contact</span>
                    <img src={personAddIcon} alt="person add icon" />
                </button>
            </div>
            <div className="contact-list__contact-list">
                <img className="contact-list__scrollbar-top" src={scrollbarTopIcon} alt="scrollbar top icon" />
                {musterArray.map((item, index) => (
                    <React.Fragment key={index}>
                        <span className="contact-list__letter">A</span>
                        <div className="contact-list__line"></div>
                        <div className="contact-list__contact">
                            <div className="contact-list__contact-logo">AM</div>
                            <div className="contact-list__name-email-container">
                                <span className="contact-list__name">Anton Mayer</span>
                                <span className="contact-list__email">antom@gmail.com</span>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
                <img className="contact-list__scrollbar-bottom" src={scrollbarBottomIcon} alt="scrollbar bottom icon" />
            </div>
        </div>
    )
}

export default ContactList