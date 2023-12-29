import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './LexHeroes.scss'
import monument from '../../../assets/images/projects/monument.png'
import BackButton from '../../../components/BackButton/BackButton'

const LexHeroes = () => {
    return (
        <div className="lex-heroes h-screen ">
            <BackButton />
            <div className="flex flex-col md:flex-row md:space-x-8 justify-center items-center p-16">
                <img src={monument} className="w-full md:w-450" />
                <div className="container flex flex-col justify-center items-center pt-8 md:pt-0 md:w-420">
                    <h1 className="title text-center">Lexington Heroes</h1>
                    <p className="description text-center pt-4">
                        A project by a student team working in collaboration with the Monuments and Memorials Committee
                        of Lexington to a establish a comprehensive public database of all memorials in Lexington
                        to commemorate citizens, events, and places.
                    </p>
                    <h2 className="description text-center pt-6">
                        Lexington Memorial Pathfinder
                    </h2>
                    <div className="pt-2">
                        <a
                            href="https://brainana.github.io/LexMemorialPathfinder/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center"
                        >
                            <FontAwesomeIcon icon={faLink} />
                            <p className="ml-2">Try it out!</p>
                        </a>
                        <a
                            href="https://github.com/Brainana/LexMemorialPathfinder"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                            <p className="ml-2">Source Code</p>
                        </a>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default LexHeroes