import Link from 'next/link';
import styles from '../../styles/local/components/navbar.module.css'
import Image from 'next/image'

const TopBar = ({isClicked, handleClick, toggleMode, lightMode}) => {
    return ( 
        <section className={lightMode ? [styles.mobileNav, styles.lightMode, "list-unstyled"].join(" ") : [styles.mobileNav, styles.darkMode, "list-unstyled"].join(" ")}>
            <ul className="d-flex wrapper list-unstyled">
                <li className="d-flex">
                    <Link href="/" >
                        <a className="d-flex">
                            <Image src="/images/logo.svg" alt="logo" className="logo my-auto" id="logo" width={66} height={40} />
                        </a>
                    </Link>
                    
                </li>
                {/* <i onClick={toggleMode} className={lightMode ? "bi bi-sun-fill sun-icon ms-auto my-auto px-2" : "bi bi-moon-fill moon-icon ms-auto my-auto px-2"}></i> */}
                {/* hamburger button */}
                <div className={isClicked ? "py-2 " : "my-auto "} onClick={handleClick}>
                    <div className={isClicked ? [styles.hamburger, styles.hamburgerX].join(" ") : [styles.hamburger, styles.hamburgerBar].join(" ")} ></div>
                    <div className={isClicked ? [styles.hamburger, styles.hamburgerX2].join(" ") : [styles.hamburger, styles.hamburgerBar].join(" ")}></div>
                    <div className={isClicked ? [styles.hamburger, styles.ln3].join(" ") : [styles.hamburger, styles.hamburgerBar].join(" ")} ></div>
                </div>
            </ul>
        </section>
     );
}
export default TopBar;