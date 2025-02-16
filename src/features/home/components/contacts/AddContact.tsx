import './../../styles/contacts/AddContact.css'
import addContactIcon from './../../../../assets/images/home/contacts/add-contact-logo.svg'
import contactBigIcon from './../../../../assets/images/home/contacts/contact-big.svg'
import closeIcon from './../../../../assets/images/home/contacts/Close.svg'
import contactSmallIcon from './../../../../assets/images/home/contacts/contact-small.svg'
import emailIcon from './../../../../assets/images/home/contacts/email.svg'
import callIcon from './../../../../assets/images/home/contacts/call.svg'
import checkIcon from './../../../../assets/images/home/contacts/check.svg'
import { useState } from 'react'
import { useCreateContactMutation } from '../../hooks/useCreateContactMutation'

type AddContactProps = {
    setShowAddContact: React.Dispatch<React.SetStateAction<boolean>>
}

function AddContact({ setShowAddContact }: AddContactProps) {
    const [playAnimation, setPlayAnimation] = useState<boolean>(false)
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone_number, setPhone_number] = useState<string>('')
    const mutate = useCreateContactMutation(setShowAddContact)

    const handleShowAddContact = () => {
        setPlayAnimation(true)
        setTimeout(() => {
            setPlayAnimation(false)
            setShowAddContact(false)
        }, 500);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        mutate({ name, email, phone_number })
    }

    return (
        <div onClick={handleShowAddContact} className="add-contact">
            <div
                onClick={(e) => e.stopPropagation()}
                className={`add-contact__main-container ${playAnimation ? "add-contact__main-container--slide-out" : "add-contact__main-container--slide-in"}`}>
                <div className="add-contact__left-container">
                    <img className="add-contact__logo-icon" src={addContactIcon} alt="add contact icon" />
                    <span className="add-contact__headline">Add contact</span>
                    <p className="add-contact__text">Tasks are better with a team!</p>
                    <div className="add-contact__line"></div>
                </div>
                <div className="add-contact__right-container">
                    <div className="add-contact__contact-icon">
                        <img src={contactBigIcon} alt="contact big icon" />
                    </div>
                    <div className="add-contact__form-container">
                        <div className="add-contact__close-icon-container">
                            <img onClick={handleShowAddContact} className="add-contact__close-icon" src={closeIcon} alt="close icon" />
                        </div>
                        <form onSubmit={handleSubmit} className="add-contact__form">
                            <div className="add-contact__input-container">
                                <input required onChange={(e) => setName(e.target.value)} className="add-contact__input" placeholder="Name" type="text" />
                                <img className="add-contact__input-icon" src={contactSmallIcon} alt="contact small icon" />
                            </div>
                            <div className="add-contact__input-container">
                                <input required onChange={(e) => setEmail(e.target.value)} className="add-contact__input" placeholder="Email" type="email" />
                                <img className="add-contact__input-icon" src={emailIcon} alt="email icon" />
                            </div>
                            <div className="add-contact__input-container">
                                <input
                                    required
                                    onChange={(e) => setPhone_number(e.target.value)}
                                    className="add-contact__input"
                                    placeholder="Phone"
                                    type="tel"
                                    inputMode="numeric"
                                    pattern="[+]?[0-9]*"
                                    title="Only numbers and the '+' symbol are allowed." />
                                <img className="add-contact__input-icon" src={callIcon} alt="call icon" />
                            </div>
                            <div className="add-contact__button-container">
                                <button
                                    onClick={handleShowAddContact}
                                    className="add-contact__button add-contact__button--first"
                                    type="button">
                                    Cancel
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_71720_5528" maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                            <rect x="4" y="4" width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_71720_5528)">
                                            <path d="M16 17.4L11.1 22.3C10.9167 22.4834 10.6834 22.575 10.4 22.575C10.1167 22.575 9.88338 22.4834 9.70005 22.3C9.51672 22.1167 9.42505 21.8834 9.42505 21.6C9.42505 21.3167 9.51672 21.0834 9.70005 20.9L14.6 16L9.70005 11.1C9.51672 10.9167 9.42505 10.6834 9.42505 10.4C9.42505 10.1167 9.51672 9.88338 9.70005 9.70005C9.88338 9.51672 10.1167 9.42505 10.4 9.42505C10.6834 9.42505 10.9167 9.51672 11.1 9.70005L16 14.6L20.9 9.70005C21.0834 9.51672 21.3167 9.42505 21.6 9.42505C21.8834 9.42505 22.1167 9.51672 22.3 9.70005C22.4834 9.88338 22.575 10.1167 22.575 10.4C22.575 10.6834 22.4834 10.9167 22.3 11.1L17.4 16L22.3 20.9C22.4834 21.0834 22.575 21.3167 22.575 21.6C22.575 21.8834 22.4834 22.1167 22.3 22.3C22.1167 22.4834 21.8834 22.575 21.6 22.575C21.3167 22.575 21.0834 22.4834 20.9 22.3L16 17.4Z" fill="#2A3647" />
                                        </g>
                                    </svg>
                                </button>
                                <button className="add-contact__button add-contact__button--second">
                                    Create contact
                                    <img src={checkIcon} alt="check icon" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddContact