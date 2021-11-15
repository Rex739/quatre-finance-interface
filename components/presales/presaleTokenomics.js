import styles from '../../styles/local/components/presales/presaleTokenomics.module.css';

const PresaleTokenomics = ({lightMode}) => {

    return(
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}>
            <div className={[styles.sectionContent, "wrapper"].join(" ")}>
                <div className={styles.quatreInfo}>
                    <div className={styles.quatreToken}>
                        <h2>Quatre Token</h2>
                        <p>
                            The total amount of UNIX is 500,000. Tokenomics: 100,000 
                            UNIX tokens for airdrop, 300,000 UNIX tokens for presale, 
                            10,000 UNIX tokens donated to the UNI technical team for 
                            support, and 90,000 UNIX tokens for further development.
                        </p>
                    </div>
                    <div className={styles.smartContract}>
                        <h2>Smart Contract</h2>
                        <p>
                            The total amount of UNIX is 500,000. Tokenomics: 100,000 UNIX tokens for airdrop, 300,000 UNIX tokens for presale, 10,000 UNIX tokens donated to the UNI technical team for support, and 90,000 UNIX tokens for further development.
                        </p>
                    </div>
                </div>
                <div className={styles.box}>
                </div>
            </div>
        </section>
    );
};

export default PresaleTokenomics;