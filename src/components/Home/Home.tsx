import './Home.scss'
import { useState } from 'react'
import { motion } from "framer-motion"
import penguin from '../../assets/images/penguin.gif'
import About from '../About/About'

const Home = () => {

    const [rotate, setRotate] = useState(false);

    return (
        <div>
            <div className="home-page py-16 h-screen flex items-center justify-center">
                <div className="m-16 flex flex-col md:flex-row items-center justify-center">
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
                            transition={{ duration: 3, delay: 0.5, ease: "easeIn" }}
                        >
                            Hi, I'm Cassidy
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 3, ease: "easeIn" }}
                        >
                            Click the penguin to see a trick :)
                        </motion.h2>
                    </div>
                </div>
            </div>

            {/* <div id="aboutPage">
                <About />
            </div> */}

        </div>

    )
}

export default Home