import Link from 'next/link';
import styles from '../styles/local/components/footer.module.css'

const Footer = ({lightMode}) => {
    return ( 
        <footer className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")} id="footer">
            <div className={["wrapper", styles.sectionContent].join(" ")}>
                <nav>
                    <ul className={["list-unstyled", styles.hideLogo1].join(" ")}>
                        <li>
                            <Link href="/">
                                <a>
                                    <img src="/images/logo.png" alt="company logo" className="logo" width={66} height={20} />
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <ul className={lightMode ? [styles.aboutLight, "list-unstyled"].join(" ") : ["list-unstyled"].join(" ")}>
                        <li>ABOUT</li>
                        <li><a href="mailto:%20support@quatre.finance" target="_newtab">Contact</a></li>
                        <li><a href="mailto:%20hello@quatre.finance" target="_newtab">Brand</a></li>
                        <li><a href="https://medium.com/@QuatreFinance" target="_newtab">Blog</a></li>
                        <li><a href="https://t.me/quatrefinance" target="_newtab">Community</a></li>
                    </ul>
                    <ul className={lightMode ? [styles.helpLight, "list-unstyled"].join(" ") : ["list-unstyled"].join(" ")}>
                        <li>HELP</li>
                        <li><a href="mailto:%20support@quatre.finance" target="_newtab">Customer Support</a></li>
                        {/* <li><a href="">Troubleshooting</a></li> */}
                        {/* <li><a href="">Guides</a></li> */}
                    </ul>
                    <ul className={lightMode ? [styles.devLight, "list-unstyled"].join(" ") : ["list-unstyled"].join(" ")}>
                        <li>DEVELOPERS</li>
                        <li><a href="https://github.com/Quatre-Finance" target="_newtab">Github</a></li>
                        <li><a href="https://github.com/Quatre-Finance/Q-paper#welcome-to-quatre-finance" target="_newtab">Documentation</a></li>
                        {/* <li><a href="">Bug Bounty</a></li>
                        <li><a href="">Audits</a></li>
                        <li><a href="">Careers</a></li> */}
                    </ul>
                    <ul className={["list-unstyled"].join(" ")}>
                        <li className={styles.hideLogo2}> 
                            <Link href="/">
                                <a>
                                    <img src="/images/logo.png" alt="company logo" className="logo" width={145} height={44} />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <div className={["d-flex flex-row", styles.inputWrapper, styles.input1].join(" ")}>
                                <form action="">
                                    <input className={lightMode ? [styles.form, styles.formDarkBg].join(" ") : [styles.form].join(" ")} placeholder="Email Address" type="email" required />
                                </form>
                                <button className={styles.subscribeBtn} type="submit"><a href="">Subscribe</a></button>
                            </div>
                        </li>
                    </ul>
                </nav>
                {/* <div className={["d-flex flex-row", styles.inputWrapper, styles.input2].join(" ")}>
                    <form action="">
                        <input className={styles.form} placeholder="Enter Email Address" type="email" required />
                    </form>
                    <button className={styles.subscribeBtn} type="submit"><a href="">Subscribe</a></button>
                </div> */}
                <div className="d-flex  justify-content-between align-items-center">
                    <figure className={styles.socials}>
                        <a href="https://github.com/Quatre-Finance" target="_newtab"><img src="images/github-foot.svg" alt="github" /></a>
                        <a href="https://twitter.com/QuatreFinance?s=09" target="_newtab"><img src="images/twitter.svg" alt="twitter" /></a>
                        <a href="https://t.me/quatrefinance" target="_newtab"><img src="images/telegram.svg" alt="telegram" /></a>
                        <a href="https://web.facebook.com/Quatre-Finance" target="_newtab"><img src="images/facebook.svg" alt="facebook" /></a>
                    </figure>
                <div>
                    <p>&copy; 2021 All rights reserved. <span>Made with <img src="images/heart.svg" alt="love from quatre team" className="mx-2"/>Quatre team</span></p>
                </div>
            </div>
            </div>
            
        </footer>
    );
}
 
export default Footer;