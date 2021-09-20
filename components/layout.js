// Page Layout

// Navbar and Footer Component
import Footer from "./footer";
import Navbar from "../containers/navbar";
import { useState } from "react";

const Layout = ({ children }) => {
    const [isClicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!isClicked);
        console.log("worked")
    }
    return (
        <div className="content">
            <Navbar
                handleClick={handleClick}
                isClicked={isClicked}
            />
            {children}
            <Footer />
        </div>

    );
}

export default Layout;