import styles from '../styles/local/components/whitepaper.module.css'

const Whitepaper = ({lightMode, handleAlert}) => {
    return (
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}>
            <div className={[styles.sectionContent, "wrapper"].join(" ")}>
                <h1>Read our Documentation</h1>
                <button className="app-btn mx-3"><a href="https://github.com/Quatre-Finance/Q-paper#welcome-to-quatre-finance" target="_newtab" >Click Here</a></button>
            </div>
        </section>
    );
}
 
export default Whitepaper;