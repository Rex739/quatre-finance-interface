import styles from '../styles/local/components/whitepaper.module.css'

const Whitepaper = ({lightMode, handleAlert}) => {
    return (
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}>
            <div className={[styles.sectionContent, "wrapper"].join(" ")}>
                <h1>Read our QPaper</h1>
                <button className="app-btn mx-3"><a href="https://github.com/Quatre-Finance/Q-paper" target="_newtab" >Click Here</a></button>
            </div>
        </section>
    );
}
 
export default Whitepaper;