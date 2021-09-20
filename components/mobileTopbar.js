import Link from 'next/link';
import styles from '../styles/local/components/navbar.module.css'
import Image from 'next/image'

const TopBar = ({isClicked, handleClick}) => {
    return ( 
        <ul className={[styles.mobileNav, "list-unstyled"].join(" ")}>
            <li className=" d-flex list-unstyled w-100 ">
                <Link href="/" >
                    <a className="d-flex">
                        <Image src="/images/logo.svg" alt="logo" className="logo my-auto" id="logo" width={40} height={40} />
                    </a>
                </Link>
            </li>
            {/* hamburger button */}
            <div className={isClicked ? "py-2 ml-auto" : "my-auto"} onClick={handleClick}>
                <div className={isClicked ? [styles.hamburger, styles.hamburgerX].join(" ") : [styles.hamburger, styles.hamburgerBar].join(" ")} ></div>
                <div className={isClicked ? [styles.hamburger, styles.hamburgerX2].join(" ") : [styles.hamburger, styles.hamburgerBar].join(" ")}></div>
                <div className={isClicked ? [styles.hamburger, styles.ln3].join(" ") : [styles.hamburger, styles.hamburgerBar].join(" ")} ></div>
            </div>
        </ul>
     );
}
export default TopBar;