import { useRef } from 'react';
import MobileNav from './mobileNav';
import DesktopNav from './desktopNav';

const Navbar = ({ handleClick, isClicked, toggleMode, lightMode, handleAlert }, props) => {
    const safeDocument = typeof document !== 'undefined' ? document : {};
    const scrollBlocked = useRef();
    const html = safeDocument.documentElement;
    const { body } = safeDocument;

    // mobile navbar blockscroll
    const blockScroll = () => {
        if (!body || !body.style || scrollBlocked.current) return;

        const scrollBarWidth = window.innerWidth - html.clientWidth;
        const bodyPaddingRight = parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;

        html.style.position = 'relative'; /* [1] */
        html.style.overflow = 'hidden'; /* [2] */
        body.style.position = 'relative'; /* [1] */
        body.style.overflow = 'hidden'; /* [2] */
        body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

        scrollBlocked.current = true;
    };
    // mobile navbar allow scroll
    const allowScroll = () => {
        if (!body || !body.style || !scrollBlocked.current) return;

        html.style.position = '';
        html.style.overflow = '';
        body.style.position = '';
        body.style.overflow = '';
        body.style.paddingRight = '';

        scrollBlocked.current = false;
    };

    isClicked ? blockScroll() : allowScroll();

    return (
        <header>
            <MobileNav 
                handleClick = { handleClick }  
                isClicked = { isClicked } 
                toggleMode = { toggleMode } 
                lightMode={lightMode}
                handleAlert={handleAlert}
                
            />
            <DesktopNav 
                toggleMode={toggleMode}
                lightMode={lightMode}
                handleAlert={handleAlert}
            />
        </header>
    );
}
export default Navbar;