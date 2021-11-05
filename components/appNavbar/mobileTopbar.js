import Link from 'next/link';
import styles from '../../styles/local/components/navbar.module.css'
import Image from 'next/image'

const TopBar = ({isClicked, handleClick, toggleMode, lightMode, sound}) => {
    return ( 
        <section className={lightMode ? [styles.mobileNav, styles.lightMode, "list-unstyled"].join(" ") : [styles.mobileNav, styles.darkMode, "list-unstyled"].join(" ")}>
            <ul className="d-flex wrapper list-unstyled my-auto">
                <li className="my-3">
                    <Link href="/" >
                        <a className="d-flex align-items-center">
                            <Image src="/images/logo.png" alt="logo" className="logo my-auto" id="logo" width={66} height={20} />
                        </a>
                    </Link>
                </li>
                {/* hamburger button */}
                <div className={isClicked ? "my-auto ms-auto" : "my-auto ms-auto"} onClick={handleClick}>
                    <div className={isClicked ? [styles.hamburger, styles.hamburgerX, "d-none"].join(" ") : [styles.hamburger, styles.hamburgerBar].join(" ")} ></div>
                    <div className={isClicked ? [styles.hamburger, styles.hamburgerX2, "d-none"].join(" ") : [styles.hamburger, styles.hamburgerBar].join(" ")}></div>
                    <div className={isClicked ? [styles.hamburger, "d-none"].join(" ") : [styles.hamburger, styles.hamburgerBar].join(" ")} ></div>
                </div>
            </ul>
        </section>
     );
}
export default TopBar;