import { motion } from 'framer-motion'
import { useState, FC } from 'react'
import { NavLink } from 'react-router-dom'
import './ProjectCard.scss'
import lex_heroes from '../../assets/images/projects/lex-heroes.png'
import shelter_swipe from '../../assets/images/projects/shelter-swipe.png'
import silver_sonics from '../../assets/images/projects/silver-sonics.png'
import rice_classifier from '../../assets/images/projects/rice-classifier.png'

interface Project {
    id: number;
    title: string;
    image: string;
}

interface ProjectCardProps {
    project: Project;
}

interface ProjectImages {
    [key: string]: string;
}

const projectImages: ProjectImages = {
    'Lexington Heroes': lex_heroes,
    'Shelter Swipe': shelter_swipe,
    'Silver Sonics': silver_sonics,
    'Rice Classifier': rice_classifier,
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {

    const [isHovered, setIsHovered] = useState(false);
    const [isTapped, setIsTapped] = useState(false)

    const projectImage = projectImages[project.title];

    return (
        <motion.div
            className="project-card m-2"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onTap={() => setIsTapped(!isTapped)}
            onScroll={() => setIsTapped(false)}
        >
            <motion.img
                src={projectImage}
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
