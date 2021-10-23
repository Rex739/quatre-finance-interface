import styles from '../styles/local/components/hero.module.css'

const Hero = ({ lightMode, handleAlert}) => {
    return ( 
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}> 
            <div className={[styles.sectionContent, "wrapper"].join(" ")}>
                <div>
                    {/* <h2>Bringing you the full power of decentralization</h2> Use h2 tag for both headers */}
                    <h1>Bringing you the full power of decentralization</h1>
                    <h2>Join the ecosystem of decentralized users and earn in different ways.</h2>
                    <div className={styles.inputWrapper}>
                        <button onClick={handleAlert} className={styles.tradeBtn}><a href="#">Launch App</a></button>
                        <div className="d-flex flex-row">
                            <form action="">
                                <input className={styles.form} placeholder="Enter Email Address" type="email" required />
                            </form>
                            <button className={styles.subscribeBtn} type="submit"><a href="">Subscribe</a></button>
                        </div>
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