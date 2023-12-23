import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo2.png'
import './Navbar.scss'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="py-4 navbar w-full fixed top-0">
            <div className="items-center justify-between md:flex">
                <Link className="flex items-center ml-4" to='/'>
                    <img className='h-9' src={logo} alt="logo" />
                    <span className='font-bold ml-2'>Cassidy</span>
                </Link>

                <div className="fixed top-4 right-4 z-50">
                    <button
                        id="toggleMenu"
                        className="flex flex-col items-center justify-center w-10 h-10 md:hidden"
                        onClick={() => setIsOpen(!isOpen)} // Toggle isOpen state
                    >
                        <span className="block w-6 h-0.5 bg-white rounded-full"></span>
                        <span className="block w-6 h-0.5 bg-white rounded-full mt-1"></span>
                        <span className="block w-6 h-0.5 bg-white rounded-full mt-1"></span>
                    </button>
                </div>


                <ul className={`${isOpen ? 'flex' : 'hidden'
                    } md:flex flex-col md:flex-row space-x-4 md:mt-0 mt-4 pr-4 bg-white text-primaryColor md:bg-primaryColor md:text-white`}>
                    <li className="ml-4 mt-4 md:m-0">
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                    <li className="mt-4 md:m-0">
                        <NavLink to="/projects">
                            Projects
                        </NavLink>
                    </li>
                    <li className="mt-4 md:m-0">
                        <NavLink to="/travel">
                            Travel
                        </NavLink>
                    </li>
                    <li className="mt-4 mb-4 md:m-0">
                        <NavLink to="/resume">
                            Resume
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav >

    )
}

export default Navbar