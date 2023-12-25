import { motion } from 'framer-motion'
import { useState, FC } from 'react'
import './ProjectCard.scss'
import lex_heroes from '../../assets/images/projects/lex-heroes.png'
// import lex_heroes from '../../../public/images/projects/lex-heroes.png'
// import projectImages from '../../assets/images/projects'

interface Project {
    id: number;
    title: string;
    image: string;
    // Add more fields as needed
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {

    const [isHovered, setIsHovered] = useState(false);
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    // const projectImage = './public/projects/lex-heroes/png';
    // const projectImage = require('./lex-heroes.png').default;
    // console.log("hi " + projectImage)
    // console.log("Project Image:", projectImage);


    return (
        <motion.div
            className="project-card m-2"
        // onHoverStart={() => setIsHovered(true)}
        // onHoverEnd={() => setIsHovered(false)}
        >
            <motion.button
                className="learn-button rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                whileHover={{ backgroundColor: 'red' }}
                transition={{ duration: 0.3 }}
            >
                Learn More
            </motion.button>
            {/* <motion.button
                className="learn-button rounded-full text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: isButtonHovered ? 1 : 0 }}
                whileHover={{ backgroundColor: 'red' }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
            >testing</motion.button> */}
            <motion.img
                src={lex_heroes}
                // src='./public/images/projects/lex-heroes.png'
                // src={projectImage}
                // src={require('../../assets/images/projects/lex-heroes.png').default}
                // alt="lex heroes"
                alt={project.title}
                whileHover={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            />


        </motion.div>

    )
}

export default ProjectCard