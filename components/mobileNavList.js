import styles from '../styles/local/components/navbar.module.css'
import ActiveLink from './activeLink';

const MobileNavList = ({ isClicked, handleClick }) => {
    return ( 
        <nav className={isClicked ? styles.mobileNavWrapper : styles.hideMobileNav}>
            <ul className={isClicked ? "d-flex list-unstyled m-0" : "d-none list-unstyled m-0"}>
                <li onClick={handleClick}>
                    <ActiveLink href="/">
                        <img src="images/home.svg" alt="home" width={32} height={20} className="mr-1" /> Home
                    </ActiveLink>
                </li>
                <li onClick={handleClick}>
                    <ActiveLink href="/">
                        <img src="images/farm.svg" alt="farm" width={32} height={20} className="mr-1" /> Farm
                    </ActiveLink>
                </li>
                <div></div>
                <li onClick={handleClick}>
                    <ActiveLink href="/">
                        <img src="images/app.svg" alt="app" width={32} height={20} className="mr-1" /> App
                    </ActiveLink>
                </li>
                <div></div>
                <li onClick={handleClick}>
                    <ActiveLink href="/">
                        <img src="images/team.svg" alt="team" width={32} height={20} className="mr-1" /> Team
                    </ActiveLink>
                </li>
                <div></div>
                <li onClick={handleClick}>
                    <ActiveLink href="/">
                        <img src="images/contact.svg" alt="contact" width={32} height={20} className="mr-1" /> Contact
                    </ActiveLink>
                </li>
                <li onClick={handleClick}>
                    <ActiveLink href="/">
                        <img src="images/github.svg" alt="github" width={32} height={20} className="mr-1" /> Github
                    </ActiveLink>
                </li>
                <li onClick={handleClick}>
                    <ActiveLink href="/">
                        <img src="images/docs.svg" alt="docs" width={32} height={20} className="mr-1" /> Docs
                    </ActiveLink>
                </li>
                <div></div>
            </ul>
        </nav>
    );
}
export default MobileNavList;