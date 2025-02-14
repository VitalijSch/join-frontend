import ContactDetails from '../../features/home/components/contacts/ContactDetails'
import ContactList from '../../features/home/components/contacts/ContactList'
import './../../features/home/styles/contacts/Contacts.css'

function Contacts() {


    return (
        <div className="contacts">
            <ContactList />
            <ContactDetails />
        </div>
    )
}

export default Contacts