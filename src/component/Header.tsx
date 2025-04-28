import { useContext, useState } from 'react';
import { CandidateContext } from '../Provider/CandidateContext';
import { useNavigate } from 'react-router-dom';
// import { useLocation } from "react-router-dom"

const Header = () => {
  const { dispatch } = useContext(CandidateContext);

  const navigate = useNavigate();

  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  // const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // const isActive = (path:string) => location.pathname === path;

  const Logout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'SET_LOGIN', payload: false });
    navigate('/login');
  };

  return (
    <>
      <div className='bg-untitled-ui--primary600'>
        <div className='max-w-7xl mx-auto max-xl:max-w-5xl'>
          <header className=' bg-transparent  py-4' id='navbar'>
            <div className='mx-auto max-sm:w-11/12 max-lg:w-11/12'>
              <nav className='flex justify-between items-center'>
                <div className='logo font-bold flex items-center text-sm'>
                  <div className='mr-2'>
                    <a href='/'>
                      <img
                        src='https://infinity.devcodefire.com/wp-content/uploads/2024/10/infinityteam.png'
                        className='h-14 '
                        alt=''
                      />
                    </a>
                  </div>
                </div>
                <div className='nav-links flex gap-7 text-lg max-md:hidden max-lg:text-base text-gray-800'>
                  <a
                    className={`text-white text-base cursor-pointer`}
                    onClick={Logout}
                  >
                    Logout
                  </a>

                  {/* <a href="/candidatelist" className={`text-white text-base ${isActive("/candidatelist") ? "opacity-100" : "opacity-50"}`}>Candidate List</a>
                                    <a href="/services" className={`text-white text-base ${isActive("/services") ? "opacity-100" : "opacity-50"}`}>Services</a>
                                    <a href="/about" className={`text-white text-base ${isActive("/about") ? "opacity-100" : "opacity-50"}`}>About</a>

                                    <a href="/contact" className={`text-white text-base ${isActive("/contact") ? "opacity-100" : "opacity-50"}`}>Contact</a> */}
                </div>

                <div className='md:hidden'>
                  <button
                    type='button'
                    onClick={toggleSidebar}
                    id='sidebar-btn'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='#fff'
                        d='M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z'
                      />
                    </svg>
                  </button>
                </div>
              </nav>
            </div>
          </header>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 z-50 text-white transition-transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='p-4 flex justify-between items-center'>
          <span className='text-xl font-bold'>Menu</span>
          <button onClick={closeSidebar}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6'
              viewBox='0 0 24 24'
            >
              <path
                fill='none'
                stroke='#fff'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1'
                d='M18 6L6 18M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <nav className='flex flex-col gap-4 p-4'>
          <a className={`text-white text-base cursor-pointer`} onClick={Logout}>
            Logout
          </a>
          {/* <a href="/services" className={`text-white text-base ${isActive("/services") ? "opacity-100" : "opacity-50"}`}>
                        Services
                    </a>
                    <a href="/about" className={`text-white text-base ${isActive("/about") ? "opacity-100" : "opacity-50"}`}>
                        About
                    </a>
                    <a href="/contact" className={`text-white text-base ${isActive("/contact") ? "opacity-100" : "opacity-50"}`}>
                        Contact
                    </a> */}
        </nav>
      </div>

      {isSidebarOpen && (
        <div
          className='fixed z-20 inset-0 bg-black opacity-50'
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
};

export default Header;
