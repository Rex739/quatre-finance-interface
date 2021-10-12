import styles from '../styles/local/components/footer.module.css'

const Footer = ({lightMode}) => {
    return ( 
        <footer className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}>
            <div className={["d-flex wrapper justify-content-between align-items-center", styles.sectionContent].join(" ")}>
                <figure className={styles.socials}>
                    <a href="https://github.com/Quatre-Finance" target="_newtab"><img src="images/github-foot.svg" alt="github" /></a>
                    <a href="https://twitter.com/QuatreFinance?s=09" target="_newtab"><img src="images/twitter.svg" alt="twitter" /></a>
                    <a href="https://t.me/joinchat/HXjFCCTrtRsxOGJk" target="_newtab"><img src="images/telegram.svg" alt="telegram" /></a>
                </figure>
                <div>
                    <p>&copy; 2021 All rights reserved. <span>Made with <img src="images/heart.svg" alt="love from quatre team" className="mx-2"/>Quatre team</span></p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;