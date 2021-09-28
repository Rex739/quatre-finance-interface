// Page Layout
// Navbar and Footer Component
import Navbar from "./appNavbar/navbar";
import Footer from "./footer";


const Layout = ({ handleClick, isClicked, toggleMode, lightMode, children }) => {
    return (
        <main>
            <Navbar 
                handleClick={handleClick}
                isClicked={isClicked}
                toggleMode={toggleMode}
                lightMode={lightMode}
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