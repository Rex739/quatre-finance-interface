import styles from '../styles/local/components/hero.module.css'

const Hero = ({lightMode}) => {
    return ( 
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}> 
            <div className={[styles.sectionContent, "wrapper"].join(" ")}>
                <div>
                    <h1>Quatre...</h1>
                    <h2>A DEFI that unifies them all</h2>
                    <h4>Four apps...simple to interact with and a wonderful experience.</h4>
                    <h3>Join our Four-peer lending and borrowing pool today.</h3>
                    <div className={styles.inputWrapper}>
                        <button className={styles.tradeBtn}><a href="">Trade Now</a></button>
                        <div className="d-flex flex-row">
                            <form action="">
                                <input className={styles.form} placeholder="Enter Address" type="email" required />
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