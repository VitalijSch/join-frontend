import Header from './../../features/home/components/Header'
import Sidebar from './../../features/home/components/Sidebar'
import './../../features/home/styles/HomeLayout.css'
import AddTask from './AddTask'
import Board from './Board'
import Contacts from './Contacts'
import Summary from './Summary'
import { Navigate, Route, Routes } from 'react-router-dom'
import LegalNotice from './LegalNotice'
import PrivacyPolicy from './PrivacyPolicy'
import Help from './Help'

function HomeLayout() {
    return (
        <div className="home-layout">
            <Sidebar />
            <div className="home-layout__sidebar-main-container">
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="summary" replace />} />
                    <Route path="summary" element={<Summary />} />
                    <Route path="add-task" element={<AddTask />} />
                    <Route path="board" element={<Board />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="legal-notice" element={<LegalNotice />} />
                    <Route path="privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="help" element={<Help />} />
                </Routes>
            </div>
        </div>
    )
}

export default HomeLayout