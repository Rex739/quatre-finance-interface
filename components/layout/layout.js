// Page Layout
// Navbar and Footer Component
import Navbar from "./appNavbar/navbar";
import Footer from "./footer";


const Layout = ({ handleClick, isClicked, toggleMode, lightMode, children, handleAlert }) => {
    return (
        <main>
            <Navbar 
                handleClick={handleClick}
                isClicked={isClicked}
                toggleMode={toggleMode}
                lightMode={lightMode}
                handleAlert={handleAlert}
            />
            {children}
            <Footer
                toggleMode={toggleMode}
                lightMode={lightMode}
            />
        </main>
    );
}

export default Layout;