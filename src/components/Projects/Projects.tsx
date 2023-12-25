import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.scss'
import projectsData from '../../data/projects'

const Projects = () => {

    // const projectData = [];

    return (
        <div className="projects-page flex justify-center py-16 px-2">
            <div className="flex flex-col text-center">
                <h1 className="heading">Projects</h1>
                <p className="pt-4">See some of the past projects I've worked on.</p>
                <div className="project-grid grid md:grid-cols-2 md:grid-rows-2 p-4">
                    {/* <ProjectCard /> */}
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Projects