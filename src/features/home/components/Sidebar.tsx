import './../styles/SideBar.css'
import logoWhiteIcon from './../../../assets/images/home/logo-white.svg'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigation } from '../../../hooks/useNavigation'
import { useAuthenticated } from '../hooks/useAuthenticated'

function Sidebar() {
    const [currentRoute, setCurrentRoute] = useState<string>('')
    const location = useLocation()
    const { navigateTo } = useNavigation()
    const isLoggedIn = useAuthenticated()

    useEffect(() => {
        if (location.pathname.includes('/summary')) setCurrentRoute('summary')
        if (location.pathname.includes('/add-task')) setCurrentRoute('addTask')
        if (location.pathname.includes('/board')) setCurrentRoute('board')
        if (location.pathname.includes('/contacts')) setCurrentRoute('contacts')
        if (location.pathname.includes('/privacy-policy')) setCurrentRoute('privacyPolicy')
        if (location.pathname.includes('/legal-notice')) setCurrentRoute('legalNotice')
        if (location.pathname.includes('/help')) setCurrentRoute('')
    }, [location.pathname])
    return (
        <div className="sidebar">
            <div className="sidebar__icon-login-container">
                <img src={logoWhiteIcon} alt="logo white" />
                {!isLoggedIn &&
                    <div onClick={() => navigateTo("/auth/login")} className="sidebar__nav">
                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_284095_1372" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="31">
                                <rect y="0.965759" width="30" height="30" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_284095_1372)">
                                <mask id="mask1_284095_1372" maskUnits="userSpaceOnUse" x="2" y="3" width="26" height="26">
                                    <rect x="2" y="2.99994" width="26" height="26" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask1_284095_1372)">
                                    <path d="M16.0833 25.7499C15.7764 25.7499 15.5191 25.6461 15.3115 25.4385C15.1038 25.2308 15 24.9736 15 24.6666C15 24.3597 15.1038 24.1024 15.3115 23.8947C15.5191 23.6871 15.7764 23.5833 16.0833 23.5833H22.5833V8.41661H16.0833C15.7764 8.41661 15.5191 8.31279 15.3115 8.10515C15.1038 7.89751 15 7.64022 15 7.33327C15 7.02633 15.1038 6.76904 15.3115 6.5614C15.5191 6.35376 15.7764 6.24994 16.0833 6.24994H22.5833C23.1792 6.24994 23.6892 6.46209 24.1135 6.8864C24.5378 7.3107 24.75 7.82077 24.75 8.41661V23.5833C24.75 24.1791 24.5378 24.6892 24.1135 25.1135C23.6892 25.5378 23.1792 25.7499 22.5833 25.7499H16.0833ZM14.1063 17.0833H6.33333C6.02639 17.0833 5.7691 16.9795 5.56146 16.7718C5.35382 16.5642 5.25 16.3069 5.25 15.9999C5.25 15.693 5.35382 15.4357 5.56146 15.2281C5.7691 15.0204 6.02639 14.9166 6.33333 14.9166H14.1063L12.075 12.8854C11.8764 12.6867 11.7771 12.443 11.7771 12.1541C11.7771 11.8652 11.8764 11.6124 12.075 11.3958C12.2736 11.1791 12.5264 11.0663 12.8333 11.0572C13.1403 11.0482 13.4021 11.152 13.6188 11.3687L17.4917 15.2416C17.7083 15.4583 17.8167 15.7111 17.8167 15.9999C17.8167 16.2888 17.7083 16.5416 17.4917 16.7583L13.6188 20.6312C13.4021 20.8479 13.1448 20.9517 12.8469 20.9426C12.549 20.9336 12.2917 20.8208 12.075 20.6041C11.8764 20.3874 11.7816 20.1301 11.7906 19.8322C11.7997 19.5343 11.9035 19.2861 12.1021 19.0874L14.1063 17.0833Z" fill="#CDCDCD" />
                                </g>
                            </g>
                        </svg>
                        <span className="sidebar__nav-text">Log In</span>
                    </div>
                }
            </div>
            <div className="sidebar__nav-container">
                {isLoggedIn &&
                    <>
                        <div
                            onClick={() => navigateTo("/home/summary")}
                            style={{
                                backgroundColor: currentRoute === "summary" ? "#091931" : "",
                                cursor: currentRoute === "summary" ? "default" : ""
                            }}
                            className="sidebar__nav">
                            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path style={{ fill: currentRoute === "summary" ? "#FFFFFF" : "" }} d="M25.2257 3.48291H4.77114H4.49841C3.39384 3.48291 2.49841 4.37864 2.49841 5.48321C2.49841 5.663 2.49841 5.79037 2.49841 5.82288V26.2774V26.4829C2.49841 27.5875 3.39414 28.4829 4.49871 28.4829C4.64219 28.4829 4.74243 28.4829 4.77113 28.4829H25.2257C25.2544 28.4829 25.3546 28.4829 25.4981 28.4829C26.6027 28.4829 27.4984 27.587 27.4984 26.4824C27.4984 26.3756 27.4984 26.3017 27.4984 26.2774V5.82285C27.4984 5.79035 27.4984 5.66299 27.4984 5.48321C27.4984 4.37864 26.6027 3.48291 25.4981 3.48291C25.3546 3.48291 25.2544 3.48291 25.2257 3.48291ZM17.2711 26.2774H4.77114V17.1865H17.2711V26.2774ZM17.2711 14.9138H4.77114V5.82288L17.2711 5.82285V14.9138ZM25.2257 26.2774H19.5439V5.82288H25.2257V26.2774Z" fill="#CDCDCD" />
                            </svg>
                            <span
                                style={{ color: currentRoute === "summary" ? "#FFFFFF" : "" }}
                                className="sidebar__nav-text">Summary</span>
                        </div>
                        <div
                            onClick={() => navigateTo("/home/add-task")}
                            style={{
                                backgroundColor: currentRoute === "addTask" ? "#091931" : "",
                                cursor: currentRoute === "addTask" ? "default" : ""
                            }}
                            className="sidebar__nav">
                            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_284095_1481" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="31">
                                    <rect y="0.98291" width="30" height="30" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_284095_1481)">
                                    <path style={{ fill: currentRoute === "addTask" ? "#FFFFFF" : "" }} d="M4.62652 28.1853C3.95579 28.1853 3.38161 27.9465 2.90396 27.4688C2.42632 26.9912 2.1875 26.417 2.1875 25.7462V8.67308C2.1875 8.00235 2.42632 7.42816 2.90396 6.95052C3.38161 6.47287 3.95579 6.23405 4.62652 6.23405H15.5107L13.0716 8.67308H4.62652V25.7462H21.6997V17.2706L24.1387 14.8316V25.7462C24.1387 26.417 23.8999 26.9912 23.4223 27.4688C22.9446 27.9465 22.3704 28.1853 21.6997 28.1853H4.62652ZM18.2546 6.93527L19.9924 8.64259L11.9436 16.6914V18.4292H13.6509L21.7302 10.3499L23.468 12.0572L15.3887 20.1365C15.1651 20.3601 14.906 20.5379 14.6113 20.67C14.3166 20.8021 14.0066 20.8682 13.6814 20.8682H10.7241C10.3786 20.8682 10.0889 20.7513 9.85518 20.5176C9.62144 20.2839 9.50457 19.9942 9.50457 19.6487V16.6914C9.50457 16.3662 9.56555 16.0562 9.6875 15.7615C9.80945 15.4668 9.98222 15.2076 10.2058 14.9841L18.2546 6.93527ZM23.468 12.0572L18.2546 6.93527L21.3034 3.88649C21.7912 3.39869 22.3755 3.15479 23.0564 3.15479C23.7373 3.15479 24.3115 3.39869 24.779 3.88649L26.4863 5.6243C26.9538 6.09178 27.1875 6.66088 27.1875 7.33161C27.1875 8.00235 26.9538 8.57145 26.4863 9.03893L23.468 12.0572Z" fill="#CDCDCD" />
                                </g>
                            </svg>
                            <span
                                style={{ color: currentRoute === "addTask" ? "#FFFFFF" : "" }}
                                className="sidebar__nav-text">Add Task</span>
                        </div>
                        <div
                            onClick={() => navigateTo("/home/board")}
                            style={{
                                backgroundColor: currentRoute === "board" ? "#091931" : "",
                                cursor: currentRoute === "board" ? "default" : ""
                            }}
                            className="sidebar__nav">
                            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path style={{ fill: currentRoute === "board" ? "#FFFFFF" : "" }} d="M22.9544 5.75564L22.9545 26.21C22.9538 26.8125 22.7142 27.3903 22.2881 27.8163C21.862 28.2424 21.2843 28.4821 20.6817 28.4827L16.1363 28.4827C15.5338 28.4821 14.956 28.2424 14.53 27.8163C14.1039 27.3903 13.8642 26.8125 13.8636 26.21L13.8636 5.75564C13.8642 5.15306 14.1039 4.57534 14.53 4.14926C14.956 3.72317 15.5338 3.48353 16.1363 3.48293L20.6817 3.48293C21.2843 3.48353 21.862 3.72317 22.2881 4.14926C22.7142 4.57534 22.9538 5.15306 22.9544 5.75564ZM16.1363 26.21L20.6817 26.21L20.6817 5.75564L16.1363 5.75564L16.1363 26.21ZM16.1363 5.75564L16.1363 26.21C16.1357 26.8125 15.8961 27.3902 15.47 27.8163C15.0439 28.2424 14.4662 28.482 13.8636 28.4826L9.31823 28.4826C8.71566 28.482 8.13794 28.2424 7.71185 27.8163C7.28577 27.3902 7.04613 26.8125 7.04553 26.2099L7.04553 5.75561C7.04613 5.15304 7.28577 4.57532 7.71185 4.14923C8.13793 3.72315 8.71566 3.48351 9.31823 3.48291L13.8636 3.48291C14.4662 3.48351 15.0439 3.72315 15.47 4.14923C15.8961 4.57532 16.1357 5.15306 16.1363 5.75564ZM9.31823 26.2099L13.8636 26.21L13.8636 5.75564L9.31823 5.75561L9.31823 26.2099ZM9.31823 5.75561L9.31823 26.2099C9.31763 26.8125 9.07799 27.3902 8.65191 27.8163C8.22582 28.2424 7.6481 28.482 7.04553 28.4826L2.50012 28.4826C1.89755 28.482 1.31983 28.2424 0.893741 27.8163C0.467657 27.3902 0.228019 26.8125 0.227417 26.2099L0.227416 5.75561C0.228018 5.15304 0.467656 4.57532 0.89374 4.14923C1.31982 3.72315 1.89755 3.48351 2.50012 3.48291L7.04553 3.48291C7.6481 3.48351 8.22582 3.72315 8.6519 4.14923C9.07799 4.57532 9.31763 5.15304 9.31823 5.75561ZM2.50012 26.2099L7.04553 26.2099L7.04553 5.75561L2.50012 5.75561L2.50012 26.2099Z" fill="#CDCDCD" />
                                <path style={{ fill: currentRoute === "board" ? "#FFFFFF" : "" }} d="M29.7726 5.75589L29.7726 26.2102C29.772 26.8128 29.5323 27.3905 29.1062 27.8166C28.6802 28.2427 28.1024 28.4823 27.4999 28.4829L22.9545 28.4829C22.3519 28.4823 21.7742 28.2427 21.3481 27.8166C20.922 27.3905 20.6824 26.8125 20.6817 26.21L20.6817 5.75564C20.6823 5.15306 20.922 4.57559 21.3481 4.14951C21.7742 3.72342 22.3519 3.48379 22.9544 3.48318L27.4999 3.48318C28.1024 3.48379 28.6801 3.72342 29.1062 4.14951C29.5323 4.57559 29.772 5.15331 29.7726 5.75589ZM22.9545 26.21L27.4999 26.2102L27.4999 5.75589L22.9544 5.75564L22.9545 26.21Z" fill="#CDCDCD" />
                            </svg>
                            <span
                                style={{ color: currentRoute === "board" ? "#FFFFFF" : "" }}
                                className="sidebar__nav-text">Board</span>
                        </div>
                        <div
                            onClick={() => navigateTo("/home/contacts")}
                            style={{
                                backgroundColor: currentRoute === "contacts" ? "#091931" : "",
                                cursor: currentRoute === "contacts" ? "default" : ""
                            }}
                            className="sidebar__nav">
                            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_284095_1493" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="31">
                                    <rect y="0.98291" width="30" height="30" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_284095_1493)">
                                    <path style={{ fill: currentRoute === "contacts" ? "#FFFFFF" : "" }} d="M15 23.4829C13.8333 23.4829 12.7188 23.6652 11.6563 24.0298C10.5938 24.3944 9.625 24.9412 8.75 25.6704V25.9829H21.25V25.6704C20.375 24.9412 19.4062 24.3944 18.3438 24.0298C17.2812 23.6652 16.1667 23.4829 15 23.4829ZM6.25 24.5454C7.375 23.4412 8.68229 22.5715 10.1719 21.936C11.6615 21.3006 13.2708 20.9829 15 20.9829C16.7292 20.9829 18.3385 21.3006 19.8281 21.936C21.3177 22.5715 22.625 23.4412 23.75 24.5454V8.48291H6.25V24.5454ZM15 18.4829C13.7917 18.4829 12.7604 18.0558 11.9062 17.2017C11.0521 16.3475 10.625 15.3162 10.625 14.1079C10.625 12.8996 11.0521 11.8683 11.9062 11.0142C12.7604 10.16 13.7917 9.73291 15 9.73291C16.2083 9.73291 17.2396 10.16 18.0938 11.0142C18.9479 11.8683 19.375 12.8996 19.375 14.1079C19.375 15.3162 18.9479 16.3475 18.0938 17.2017C17.2396 18.0558 16.2083 18.4829 15 18.4829ZM15 15.9829C15.5208 15.9829 15.9635 15.8006 16.3281 15.436C16.6927 15.0715 16.875 14.6287 16.875 14.1079C16.875 13.5871 16.6927 13.1444 16.3281 12.7798C15.9635 12.4152 15.5208 12.2329 15 12.2329C14.4792 12.2329 14.0365 12.4152 13.6719 12.7798C13.3073 13.1444 13.125 13.5871 13.125 14.1079C13.125 14.6287 13.3073 15.0715 13.6719 15.436C14.0365 15.8006 14.4792 15.9829 15 15.9829ZM6.25 28.4829C5.5625 28.4829 4.97396 28.2381 4.48438 27.7485C3.99479 27.259 3.75 26.6704 3.75 25.9829V8.48291C3.75 7.79541 3.99479 7.20687 4.48438 6.71729C4.97396 6.2277 5.5625 5.98291 6.25 5.98291H7.5V3.48291H10V5.98291H20V3.48291H22.5V5.98291H23.75C24.4375 5.98291 25.026 6.2277 25.5156 6.71729C26.0052 7.20687 26.25 7.79541 26.25 8.48291V25.9829C26.25 26.6704 26.0052 27.259 25.5156 27.7485C25.026 28.2381 24.4375 28.4829 23.75 28.4829H6.25Z" fill="#CDCDCD" />
                                </g>
                            </svg>
                            <span
                                style={{ color: currentRoute === "contacts" ? "#FFFFFF" : "" }}
                                className="sidebar__nav-text">Contacts</span>
                        </div>
                    </>
                }
            </div>
            <div className="sidebar__legal-links-container">
                <span
                    onClick={() => navigateTo("/home/privacy-policy")}
                    style={{
                        backgroundColor: currentRoute === "privacyPolicy" ? "#091931" : "",
                        cursor: currentRoute === "privacyPolicy" ? "default" : "",
                        pointerEvents: currentRoute === "privacyPolicy" ? "none" : "auto",
                    }}
                    className="sidebar__legal-link">Privacy Policy</span>
                <span
                    onClick={() => navigateTo("/home/legal-notice")}
                    style={{
                        backgroundColor: currentRoute === "legalNotice" ? "#091931" : "",
                        cursor: currentRoute === "legalNotice" ? "default" : "",
                        pointerEvents: currentRoute === "legalNotice" ? "none" : "auto",
                    }}
                    className="sidebar__legal-link">Legal notice</span>
            </div>
        </div >
    )
}

export default Sidebar