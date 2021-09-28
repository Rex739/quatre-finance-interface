import styles from '../styles/local/components/whitepaper.module.css'

const Whitepaper = ({lightMode}) => {
    return (
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}>
            <div className={[styles.sectionContent, "wrapper"].join(" ")}>
                <h1>Read our white paper</h1>
                <button className={styles.whitepaperBtn}><a href="#" target="_newtab">Click here</a></button>
            </div>
        </section>
    );
}
 
export default Whitepaper;