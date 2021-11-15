import Link from 'next/link';
import styles from '../../styles/local/components/navbar.module.css'

const DesktopNav = ({ lightMode, toggleMode, sound }) => {
    const switchMode = () => {
        toggleMode();
        sound.play();
    }
    return ( 
        <div className={ lightMode ?  [styles.lightMode, styles.desktopNav].join(" ")  : [styles.darkMode, styles.desktopNav].join(" ")}>
            <nav className={[styles.topNav, 'wrapper'].join(" ")}>
                <ul className="d-flex list-unstyled my-3">
                    <li className="m-0">
                        <Link href="/">
                            <a>
                                <img src="/images/logo.png" alt="company logo" className="logo" width={180} height={50} />
                            </a>
                        </Link>
                    </li>
                    <li className="my-auto ms-auto">
                        <Link href="/">
                            <a>
                                <img src={lightMode ? "images/navbar/home.svg" : "images/navbar/home-dark.svg"} alt="home" width={32} height={20} className="mr-1" /> Home
                            </a>
                        </Link>
                    </li>
                    <li className="my-auto">
                        <Link href="/development">
                            <a>
                                <img src={lightMode ? "images/navbar/app.svg" : "images/navbar/app-dark.svg" } alt="app" width={32} height={20} className="mr-1" /> App
                            </a>
                        </Link>
                    </li>
                    {/* <li className="my-auto">
                        <Link href="/#team">
                            <a>
                                <img src="images/navbar/team.svg" alt="team" width={32} height={20} className="mr-1" /> Team
                            </a>
                        </Link>
                    </li> */}
                    {/* <li className="my-auto">
                        <Link href="/#footer">
                            <a>
                                <img src={lightMode ? "images/navbar/contact.svg" : "images/navbar/contact-dark.svg"} alt="contact" width={32} height={20} className="mr-1" /> Contact
                            </a>
                        </Link>
                    </li> */}
                    <li className="my-auto">
                        <Link href="https://github.com/Quatre-Finance" >
                            <a target="_newtab">
                                <img src={lightMode ? "images/navbar/github.svg" : "images/navbar/github-dark.svg"} alt="github" width={32} height={20} className="mr-1" /> Github
                            </a>
                        </Link>
                    </li>
                    <li className="my-auto">
                        <Link href="https://medium.com/@QuatreFinance" >
                            <a target="_newtab">
                                <img src={lightMode ? "images/navbar/docs.svg" : "images/navbar/docs-dark.svg"} alt="docs" width={32} height={20} className="mr-1" /> Docs
                            </a>
                        </Link>
                    </li>
                    <i onClick={switchMode} className={lightMode ? "bi bi-sun-fill sun-icon  my-auto px-2" : "bi bi-moon-fill moon-icon my-auto px-2"}></i>
                </ul>
            </nav>
        </div>
    );
}
 
export default DesktopNav;