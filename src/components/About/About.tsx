import './About.scss'

const About = () => {
    return (
        <div className="about-page flex flex-col items-center justify-center">
            <div className="blurb w-1/2 m-16 text-center max-w-700">
                <h1 className="heading">About Me</h1>
                <p className="description pt-4">
                    I'm from Boston, MA and I'm currently a freshman at Cornell University
                    studying Computer Science in the College of Engineering. I've been coding
                    for six years and have some experience with web development, machine
                    learning, and app development. Besides programming, I also enjoy hiking,
                    figure skating, window shopping and art.
                </p>
            </div>
        </div>
    )
}

export default About