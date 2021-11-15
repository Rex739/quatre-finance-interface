import styles from '../styles/local/components/tokenomics.module.css'
import Whitepaper from './whitepaper';

const Tokenomics = ({ lightMode, handleAlert }) => {
    return (
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}>
            <div className={[styles.sectionContent, "wrapper"].join(" ")}>
               <figure>
                   <img src="images/tokenomics/tokenomics.svg" alt="tokenomics" />   
               </figure>
            </div>
            <Whitepaper 
                lightMode = {lightMode}    
            />
        </section>
    );
}

export default Tokenomics;