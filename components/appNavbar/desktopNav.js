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
                                 Home
                            </a>
                        </Link>
                    </li>
                    <li className="my-auto">
                        <Link href="https://app.quatre.finance/" rel="noreferrer" target="_blank">
                            <a>
                               Learn
                            </a>
                        </Link>
                    </li>
                    <li className="my-auto">
                        <Link href="https://github.com/Quatre-Finance/Q-paper/blob/main/TEAM.md">
                            <a target="_newtab">
                                Community
                            </a>
                        </Link>
                    </li>

                    <li className="my-auto">
                        <Link href="#app" >
                            <a target="_newtab">
                                 
                            </a>
                        </Link>
                    </li>
                    {/* <i onClick={switchMode} className={lightMode ? "bi bi-sun-fill sun-icon  my-auto px-2" : "bi bi-moon-fill moon-icon my-auto px-2"}></i> */}
                </ul>
            </nav>
        </div>
    );
}
 
export default DesktopNav;