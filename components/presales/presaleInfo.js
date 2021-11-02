import styles from '../../styles/local/components/presales/presaleInfo.module.css';

const PresaleInfo = ({ lightMode }) => {
    
    return(
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}>
            <div className={[styles.sectionContent, "wrapper"].join(" ")}>
                <div className={styles.airdrop}>
                    <h2>Airdrop</h2>
                    <div className={styles.claim}>
                        <input type="text" />
                        <button>Claim</button>
                    </div>
                    <div className={styles.box}>
                        
                    </div>
                </div>
                <div className={styles.presale}>
                    <h2>Presale</h2>
                    <p className={styles.useWallet}>
                        Use your wallet to send ETH to the presale address below. Our system will send UNIX to your wallet instantly.
                    </p>
                    <p className={styles.address}>
                        Presale Address:
                    </p>
                    <input type="text" defaultValue="0x752915cf84Cf498C260F8A87AE26c"/>
                    <p className={styles.toCopy}>
                        (Click to copy)
                    </p>
                    <div className={styles.joinTelegram}>
                        <button>Join Telegram Group </button>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};



export default PresaleInfo;
