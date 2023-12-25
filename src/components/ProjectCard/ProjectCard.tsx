import { motion } from 'framer-motion'
import { useState, FC } from 'react'
import { NavLink } from 'react-router-dom'
import './ProjectCard.scss'
import lex_heroes from '../../assets/images/projects/lex-heroes.png'
// import lex_heroes from '../../../public/images/projects/lex-heroes.png'
// import projectImages from '../../assets/images/projects'

interface Project {
    id: number;
    title: string;
    image: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {

    const [isHovered, setIsHovered] = useState(false);
    // const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [isTapped, setIsTapped] = useState(false)

    // const projectImage = './public/projects/lex-heroes/png';
    // const projectImage = require('./lex-heroes.png').default;
    // console.log("hi " + projectImage)
    // console.log("Project Image:", projectImage);


    return (
        <motion.div
            className="project-card m-2"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onTap={() => setIsTapped(!isTapped)}
            onScroll={() => setIsTapped(false)}
        >
            <motion.img
                src={lex_heroes}
                // src='./public/images/projects/lex-heroes.png'
                // src={projectImage}
                // src={require('../../assets/images/projects/lex-heroes.png').default}
                // alt="lex heroes"
                alt={project.title}
                initial={{ scale: 1 }}
                animate={{
                    scale: (isHovered || isTapped) ? 1.1 : 1,
                    opacity: (isHovered || isTapped) ? 0 : 1,
                }}
                whileHover={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.5 }}
            />
            <NavLink to="/lex-heroes">
                <motion.button
                    className="learn-button rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: (isHovered || isTapped) ? 1 : 0 }}
                    whileHover={{ backgroundColor: '#578eba' }}
                    transition={{ duration: 0.3 }}
                >
                    Learn More
                </motion.button>
            </NavLink>

        </motion.div>

    )
}

export default ProjectCard
