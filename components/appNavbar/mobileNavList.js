import styles from '../../styles/local/components/navbar.module.css'
import ActiveLink from '../activeLink';

const MobileNavList = ({ isClicked, handleClick, lightMode, handleAlert, sound, toggleMode }) => {
    const switchMode = () => {
        toggleMode();
        sound.play();
    }
    return ( 
       
        <aside className={lightMode ? styles.lightMode : styles.darkMode}>
            <nav className={isClicked ? styles.mobileNavWrapper : styles.hideMobileNav}>
                
                <ul className={isClicked ? "d-flex list-unstyled m-0" : "d-none list-unstyled m-0"}>
                    <ol className="d-flex">
                        <div>
                            <i onClick={switchMode} className={lightMode ? "bi bi-sun-fill sun-icon ms-auto my-auto" : "bi bi-moon-fill moon-icon ms-auto my-auto"}></i>
                        </div>
                        <div className={isClicked ? "py-2 ms-auto me-4 mb-5" : "my-auto ms-auto me-4 mb-5"} onClick={handleClick}>
                            <div className={isClicked ? [styles.hamburger, styles.hamburgerX].join(" ") : [styles.hamburger, styles.hamburgerBar].join(" ")} ></div>
                            <div className={isClicked ? [styles.hamburger, styles.hamburgerX2].join(" ") : [styles.hamburger, styles.hamburgerBar].join(" ")}></div>
                            <div className={isClicked ? [styles.hamburger, "d-none"].join(" ") : [styles.hamburger, styles.hamburgerBar].join(" ")} ></div>
                        </div>
                    </ol>
                    
                    <ActiveLink href="/" handleClick={handleClick}>
                        <img src={lightMode ? "images/navbar/home.svg" : "images/navbar/home-dark.svg"} alt="home" width={40} height={40} className="me-2" /> Home
                    </ActiveLink>
                    {/* <ActiveLink href="/development" handleClick={handleClick} handleAlert={handleAlert}>
                        <img src="images/farm.svg" alt="farm" width={40} height={40} className="me-2" /> Farm
                    </ActiveLink> */}
                    <ActiveLink href="/development" handleClick={handleClick} handleAlert={handleAlert}>
                        <img src={lightMode ? "images/navbar/app.svg" : "images/navbar/app-dark.svg"} alt="app" width={40} height={40} className="me-2" /> App
                    </ActiveLink>
                    <ActiveLink href="https://github.com/Quatre-Finance/Q-paper/blob/main/TEAM.md" handleClick={handleClick}>
                        <img src={lightMode ? "images/navbar/team.svg" : "images/navbar/team-dark.svg"} alt="team" width={40} height={40} className="me-2" /> Team
                    </ActiveLink>
                    {/* <ActiveLink href="/#footer" handleClick={handleClick}>
                        <img src={lightMode ? "images/navbar/contact.svg" : "images/navbar/contact-dark.svg"} alt="contact" width={40} height={40} className="me-2" /> Contact
                    </ActiveLink> */}
                    <ActiveLink href="https://github.com/Quatre-Finance" handleClick={handleClick}>
                        <img src={lightMode ? "images/navbar/github.svg" : "images/navbar/github-dark.svg" } alt="github" width={40} height={40} className="me-2" /> Github
                    </ActiveLink>
                    <ActiveLink href="https://github.com/Quatre-Finance/Q-paper#welcome-to-quatre-finance" handleClick={handleClick}>
                        <img src={lightMode ? "images/navbar/docs.svg" : "images/navbar/docs-dark.svg" } alt="docs" width={40} height={40} className="me-2" /> Docs
                    </ActiveLink>
                </ul>
            </nav>
        </aside> 
    );
}
export default MobileNavList;