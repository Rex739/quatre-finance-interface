import styles from '../../styles/local/components/navbar.module.css'
import ActiveLink from '../activeLink';

const MobileNavList = ({ isClicked, handleClick, lightMode }) => {
    return ( 
        <aside className={isClicked ? styles.mobileNavWrapper : styles.hideMobileNav}>
            <nav className={lightMode ? styles.lightMode : styles.darkMode}>
                <ul className={isClicked ? "d-flex list-unstyled m-0" : "d-none list-unstyled m-0"}>
                    <ActiveLink href="/" handleClick={handleClick}>
                        <img src="images/home.svg" alt="home" width={32} height={20} className="me-2" /> Home
                    </ActiveLink>
                    <ActiveLink href="/farm" handleClick={handleClick}>
                        <img src="images/farm.svg" alt="farm" width={32} height={20} className="me-2" /> Farm
                    </ActiveLink>
                    <ActiveLink href="/app" handleClick={handleClick}>
                        <img src="images/app.svg" alt="app" width={32} height={20} className="me-2" /> App
                    </ActiveLink>
                    <ActiveLink href="/team " handleClick={handleClick}>
                        <img src="images/team.svg" alt="team" width={32} height={20} className="me-2" /> Team
                    </ActiveLink>
                    <ActiveLink href="/contact" handleClick={handleClick}>
                        <img src="images/contact.svg" alt="contact" width={32} height={20} className="me-2" /> Contact
                    </ActiveLink>
                    <ActiveLink href="/github" handleClick={handleClick}>
                        <img src="images/github.svg" alt="github" width={32} height={20} className="me-2" /> Github
                    </ActiveLink>
                    <ActiveLink href="/docs" handleClick={handleClick}>
                        <img src="images/docs.svg" alt="docs" width={32} height={20} className="me-2" /> Docs
                    </ActiveLink>
                </ul>
            </nav>
        </aside> 
    );
}
export default MobileNavList;