import styles from '../styles/local/components/hero.module.css'
import Link from 'next/link';

const Hero = ({ lightMode }) => {
    return ( 
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}> 
            <div className={[styles.sectionContent, "wrapper"].join(" ")}>
                <div>
                    <h1>Quatre...</h1>
                    <h3>Bringing you the full power of decentralization</h3> 
                    <h3>Join the ecosystem of decentralized app users and earn in multiple ways</h3>
                    <div className={styles.inputWrapper}>
                        <button className={styles.tradeBtn}><Link href="/development">Launch App</Link></button>
                        <button className={[styles.tradeBtn, styles.communityBtn].join(" ")}><a href="https://t.me/quatrefinance" target="_newtab">Community</a></button>
                        {/* <div className="d-flex flex-row">
                            <form action="">
                                <input className={styles.form} placeholder="Enter Email Address" type="email" required />
                            </form>
                            <button className={styles.subscribeBtn} type="submit"><a href="">Subscribe</a></button>
                        </div> */}
                    </div>
                </div>
                <figure className="d-flex ms-auto">
                    <img src="images/hero-mobile.png" alt="blockchain"  className={styles.heroImg}/>
                    <img src="images/hero.png" alt="blockchain" className={styles.desktopHeroImg} />
                </figure>
            </div>
        </section>
    );
}
 
export default Hero;