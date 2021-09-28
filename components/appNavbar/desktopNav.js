import Link from 'next/link';
import styles from '../../styles/local/components/navbar.module.css'

const DesktopNav = ({lightMode, toggleMode}) => {
    return ( 
        <div className={ lightMode ?  [styles.lightMode, styles.desktopNav].join(" ")  : [styles.darkMode, styles.desktopNav].join(" ")}>
            <nav className={[styles.topNav, 'wrapper'].join(" ")}>
                <ul className="d-flex list-unstyled my-3">
                    <li className="m-0">
                        <Link href="/">
                            <a>
                                <img src="/images/logo.svg" alt="company logo" className="logo" width={85} height={85} />
                            </a>
                        </Link>
                    </li>
                    <li className="my-auto ms-auto">
                        <a href="/">
                            <img src="images/farm.svg" alt="farm" width={32} height={20} className="mr-1" /> Farm
                        </a>
                    </li>
                    <li className="my-auto">
                        <a href="/">
                            <img src="images/app.svg" alt="app" width={32} height={20} className="mr-1" /> App
                        </a>
                    </li>
                    <li className="my-auto">
                        <a href="/">
                            <img src="images/team.svg" alt="team" width={32} height={20} className="mr-1" /> Team
                        </a>
                    </li>
                    <li className="my-auto">
                        <a href="/">
                            <img src="images/contact.svg" alt="contact" width={32} height={20} className="mr-1" /> Contact
                        </a>
                    </li>
                    <li className="my-auto">
                        <a href="/">
                            <img src="images/github.svg" alt="github" width={32} height={20} className="mr-1" /> Github
                        </a>
                    </li>
                    <li className="my-auto">
                        <a href="/">
                            <img src="images/docs.svg" alt="docs" width={32} height={20} className="mr-1" /> Docs
                        </a>
                    </li>
                    {/* <i onClick={toggleMode} className={lightMode ? "bi bi-sun-fill sun-icon  my-auto px-2" : "bi bi-moon-fill moon-icon my-auto px-2"}></i> */}
                </ul>
            </nav>
        </div>
    );
}
 
export default DesktopNav;