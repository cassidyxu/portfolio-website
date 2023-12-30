import './Home.scss'
import { useState } from 'react'
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import penguin from '../../assets/images/penguin.gif'


const Home = () => {

    const [rotate, setRotate] = useState(false);

    return (
        <div>
            <div className="home-page py-16 h-screen flex flex-col items-center justify-center">
                <div className="m-16 flex flex-col md:flex-row items-center justify-center flex-1">
                    <motion.img
                        className="h-200 md:h-300"
                        animate={{ rotate: rotate ? 360 : 0 }}
                        transition={{ duration: 3, delay: 0.2 }}
                        src={penguin}
                        alt="penguin"
                        onClick={() => {
                            setRotate(!rotate)
                        }}
                    />
                    <div className="flex-col text-center md:ml-20">
                        <motion.h1
                            className="intro"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2, delay: 0.5, ease: "easeIn" }}
                        >
                            Hi, I'm Cassidy
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 2, ease: "easeIn" }}
                        >
                            Click the penguin to see a trick :)
                        </motion.h2>
                    </div>
                </div>
                <motion.div
                    // className="chevron-icon pb-6 md:pb-0"
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{ duration: 1, delay: 4, ease: "easeIn" }}
                    className="mt-auto flex justify-center pb-6 md:pb-0"
                    initial={{ opacity: 0, y: 0 }}
                    animate={{
                        opacity: 1,
                        y: [0, -10, 0], // Change the values to adjust the bounce
                    }}
                    transition={{
                        duration: 2, // Adjust the duration of each bounce
                        repeat: Infinity,
                        repeatType: 'reverse', // Loop the animation
                        ease: 'easeInOut',
                        delay: 4, // Delay for 5 seconds before the first bounce
                    }}
                >
                    <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                </motion.div>
            </div>

            {/* <div id="aboutPage">
                <About />
            </div> */}

        </div>

    )
}

export default Home