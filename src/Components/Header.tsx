import { useContext, useState } from "react";
import { CandidateContext } from "../Provider/CandidateContext";
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom"

const Header=()=> {
    

    const {dispatch} = useContext(CandidateContext);
        
    
    const navigate = useNavigate()

    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
    // const location = useLocation();

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    // const isActive = (path:string) => location.pathname === path;

    const Logout =()=>{
        localStorage.removeItem("token")
        dispatch({ type: "SET_LOGIN", payload: false })
        navigate("/login")
    }

    return (
        <>
            <div className="tw-bg-untitled-ui--primary600">
                <div className="tw-max-w-7xl tw-mx-auto max-xl:tw-max-w-5xl">
                    <header className=" tw-bg-transparent  tw-py-4" id="navbar">
                        <div className="tw-mx-auto max-sm:tw-w-11/12 max-lg:tw-w-11/12">
                            <nav className="tw-flex tw-justify-between tw-items-center">
                                <div className="logo tw-font-bold tw-flex tw-items-center tw-text-sm">
                                    <div className="tw-mr-2">
                                        <a href="/">
                                            <img src="https://infinity.devcodefire.com/wp-content/uploads/2024/10/infinityteam.png"
                                                className="tw-h-14 " alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="nav-links tw-flex tw-gap-7 tw-text-lg max-md:tw-hidden max-lg:tw-text-base tw-text-gray-800">
                                <a className={`tw-text-white tw-text-base tw-cursor-pointer`} onClick={Logout}>Logout</a>

                                    {/* <a href="/candidatelist" className={`tw-text-white tw-text-base ${isActive("/candidatelist") ? "tw-opacity-100" : "tw-opacity-50"}`}>Candidate List</a>
                                    <a href="/services" className={`tw-text-white tw-text-base ${isActive("/services") ? "tw-opacity-100" : "tw-opacity-50"}`}>Services</a>
                                    <a href="/about" className={`tw-text-white tw-text-base ${isActive("/about") ? "tw-opacity-100" : "tw-opacity-50"}`}>About</a>

                                    <a href="/contact" className={`tw-text-white tw-text-base ${isActive("/contact") ? "tw-opacity-100" : "tw-opacity-50"}`}>Contact</a> */}
                                </div>

                                <div className="md:tw-hidden">
                                    <button type="button" onClick={toggleSidebar} id="sidebar-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="tw-w-6" viewBox="0 0 24 24"><path fill="#fff" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z" /></svg>
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </header>
                </div>
            </div>

            {/* Sidebar */}
            <div
                className={`tw-fixed tw-top-0 tw-right-0 tw-h-full tw-w-64 tw-bg-gray-900 tw-z-50 tw-text-white tw-transition-transform ${isSidebarOpen ? "tw-translate-x-0" : "tw-translate-x-full"
                    }`}
            >
                <div className="tw-p-4 tw-flex tw-justify-between tw-items-center">
                    <span className="tw-text-xl tw-font-bold">Menu</span>
                    <button onClick={closeSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="tw-w-6" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M18 6L6 18M6 6l12 12" /></svg>
                    </button>
                </div>
                <nav className="tw-flex tw-flex-col tw-gap-4 tw-p-4">
                    <a className={`tw-text-white tw-text-base tw-cursor-pointer`} onClick={Logout}>
                        Logout
                    </a>
                    {/* <a href="/services" className={`tw-text-white tw-text-base ${isActive("/services") ? "tw-opacity-100" : "tw-opacity-50"}`}>
                        Services
                    </a>
                    <a href="/about" className={`tw-text-white tw-text-base ${isActive("/about") ? "tw-opacity-100" : "tw-opacity-50"}`}>
                        About
                    </a>
                    <a href="/contact" className={`tw-text-white tw-text-base ${isActive("/contact") ? "tw-opacity-100" : "tw-opacity-50"}`}>
                        Contact
                    </a> */}
                </nav>
            </div>

            {isSidebarOpen && (
                <div
                    className="tw-fixed tw-z-20 tw-inset-0 tw-bg-black tw-opacity-50"
                    onClick={closeSidebar}
                ></div>
            )}
        </>
    )
}

export default Header;