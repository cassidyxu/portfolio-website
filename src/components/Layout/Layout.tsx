import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';


const Layout = () => {
    return <>
        <div className="App">
            <Navbar />
            <div className="page">
                <Home />
            </div>
        </div>

    </>
}

export default Layout