import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="wrapper">
            <Navbar />
            { children }
            <Footer />
        </div>
    )
}

export default Layout;
