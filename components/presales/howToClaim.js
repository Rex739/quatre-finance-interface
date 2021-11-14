import styles from '../../styles/local/components/presales/howToClaim.module.css';

const HowToClaim = ({ lightMode }) => {
    
    return(
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}>
            <div className={[styles.sectionContent, "wrapper"].join(" ")}>
                <div className={styles.claimInfo}>
                    <h2 className={styles.titleOne}>QUATRE</h2>
                    <h2 className={styles.titleTwo}>How to claim QUATRE</h2>
                    <p>
                        The total supply of UNIX is 500,000. Tokenomics: 100,000 UNIX tokens for airdrop, 300,000 UNIX tokens for presale, 10,000 UNIX tokens donated to the UNI technical team for support, and 90,000 UNIX tokens for further development.
                    </p>
                    <p> 
                        UNIX will be listed on Uniswap as soon as presale completed, and later listed on Binance, Coinbase, Huobi and Hotbit exchanges. UNIX tokens can now be obtained by participating in UNIX airdrop and UNIX presale.
                    </p>
                    <p>
                        After presale is completed, you can buy UNIX through exchanges.
                    </p>
                    <div className={styles.buttonsContainer}>
                        <button className={styles.whitepaperBtn}>Whitepaper</button>
                        <button className={lightMode ? [styles.verifyBtn, styles.verifyBtnLight].join(" ") : [styles.verifyBtn, styles.verifyBtnDark].join(" ")}>Verify Donation</button>
                    </div>
                    
                </div>
                <div className={styles.box}>

                </div>
            </div>
        </section>
    );
};

export default HowToClaim;