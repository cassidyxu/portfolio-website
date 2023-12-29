import Navbar from '../../components/Navbar/Navbar';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Projects/Projects'
import './Main.scss'
import Footer from '../../components/Footer/Footer';


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