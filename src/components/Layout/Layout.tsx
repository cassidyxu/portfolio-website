import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from './../Skills/Skills'
import Projects from './../Projects/Projects'
import './Layout.scss'
import Footer from '../Footer/Footer';


const Layout = () => {
    return <>
        <div className="App">
            <Navbar />
            <div className="page">
                <Home />
                <About />
                {/* <hr className="divider solid w-3/4 mx-auto"></hr> */}
                <Skills />
                <Projects />
            </div>
            <Footer />
        </div>

    </>
}

export default Layout