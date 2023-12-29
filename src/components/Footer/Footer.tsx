import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <footer className="footer flex justify-center items-center p-6 pt-16">
            <div className="flex-col justify-center items-center">
                <h1 className="text-center">Get in Touch</h1>
                <div className="flex justify-center space-x-12 pt-6">
                    <motion.a
                        href="https://www.linkedin.com/in/cassidy-xu"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                    >
                        <FontAwesomeIcon icon={faLinkedin} size='2x' />
                    </motion.a>
                    <motion.a
                        href="https://github.com/cassidyxu"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                    >
                        <FontAwesomeIcon icon={faGithub} size='2x' />
                    </motion.a>
                    <motion.a
                        href="mailto:chx4@cornell.edu"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                    >
                        <FontAwesomeIcon icon={faEnvelope} size='2x' />
                    </motion.a>
                </div>
                <p className="text-center pt-24">&copy; 2023 Cassidy Xu. All Rights Reserved.</p>
            </div >
        </footer >
    )
}

export default Footer