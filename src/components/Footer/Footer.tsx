import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="flex justify-center items-center h-24">
            <div className="footer flex justify-center space-x-10">
                <a href="https://www.linkedin.com/in/cassidy-xu" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size='2x' />
                </a>
                <a href="https://github.com/cassidyxu" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size='2x' />
                </a>
                <a href="mailto:chx4@cornell.edu">
                    <FontAwesomeIcon icon={faEnvelope} size='2x' />
                </a>
            </div>
        </footer>
    )
}

export default Footer