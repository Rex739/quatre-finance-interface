import Link from 'next/link';
import styles from '../styles/local/components/navbar.module.css'
import ActiveLink from './activeLink';

const DesktopNav = () => {
    return ( 
        <div className={styles.desktopNav}>
            <nav className={styles.topNav}>
                <ul className="d-flex list-unstyled my-3">
                    <li className="m-0">
                        <Link href="/">
                            <a>
                                <img src="/images/logo.svg" alt="company logo" className="logo" width={85} height={85} />
                            </a>
                        </Link>
                    </li>
                    <li className="my-auto ms-auto">
                        <ActiveLink href="/">
                            <img src="images/farm.svg" alt="farm" width={32} height={20} className="mr-1" /> Farm
                        </ActiveLink>
                    </li>
                    <li className="my-auto">
                        <ActiveLink href="/">
                            <img src="images/app.svg" alt="app" width={32} height={20} className="mr-1" /> App
                        </ActiveLink>
                    </li>
                    <li className="my-auto">
                        <ActiveLink href="/">
                            <img src="images/team.svg" alt="team" width={32} height={20} className="mr-1" /> Team
                        </ActiveLink>
                    </li>
                    <li className="my-auto">
                        <ActiveLink href="/">
                            <img src="images/contact.svg" alt="contact" width={32} height={20} className="mr-1" /> Contact
                        </ActiveLink>
                    </li>
                    <li className="my-auto">
                        <ActiveLink href="/">
                            <img src="images/github.svg" alt="github" width={32} height={20} className="mr-1" /> Github
                        </ActiveLink>
                    </li>
                    <li className="my-auto">
                        <ActiveLink href="/">
                            <img src="images/docs.svg" alt="docs" width={32} height={20} className="mr-1" /> Docs
                        </ActiveLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default DesktopNav;