import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo2.png'
import './Navbar.scss'

const Navbar = () => {
    return (

        <nav className="py-4 navbar">
            <div className="containe mx-4 flex items-center justify-between">
                <Link className="flex items-center" to='/'>
                    <img className='h-9' src={logo} alt="logo" />
                    <span className='font-bold ml-2'>Cassidy Xu</span>
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/travel">
                            Travel
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume">
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
        </nav >

    )
}

export default Navbar