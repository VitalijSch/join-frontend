import { useState } from 'react'
import AddContact from '../../features/home/components/contacts/AddContact'
import ContactDetails from '../../features/home/components/contacts/ContactDetails'
import ContactList from '../../features/home/components/contacts/ContactList'
import './../../features/home/styles/contacts/Contacts.css'

function Contacts() {
    const [showAddContact, setShowAddContact] = useState<boolean>(false)

    return (
        <div className="contacts">
            <ContactList setShowAddContact={setShowAddContact} />
            <ContactDetails />
            {showAddContact &&
                <AddContact setShowAddContact={setShowAddContact} />
            }
        </div>
    )
}

export default Contacts