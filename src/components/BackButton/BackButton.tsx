import './BackButton.scss'
import { motion } from 'framer-motion';

const BackButton = () => {

    const goBack = () => {
        window.history.back();
    };

    return (
        <motion.button
            className="back-button p-4"
            onClick={goBack}
            whileHover={{ color: '#578eba' }}
        >
            &#8592; Go Back
        </motion.button>
    )

}

export default BackButton