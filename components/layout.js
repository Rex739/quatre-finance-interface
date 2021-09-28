// Page Layout
// Navbar and Footer Component
import Footer from "./footer";
import Navbar from "./appNavBar/navbar";

const Layout = ({ handleClick, isClicked, toggleMode, lightMode, children }) => {
    return (
        <main>
            <Navbar
                handleClick={handleClick}
                isClicked={isClicked}
                toggleMode ={toggleMode}
                lightMode = {lightMode }
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