import { useState } from 'react';
import styles from '../../styles/local/components/presales/presaleInfo.module.css';

const PresaleInfo = ({ lightMode }) => {
    const [copied, setCopied] = useState(false);

    const copyToClip = (e) => {
        navigator.clipboard.writeText(e.target.defaultValue);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

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
                <div className={lightMode ? styles.presale : styles.presaleDark}>
                    <h2>Presale</h2>
                    <p className={lightMode ? styles.useWallet : styles.useWalletDark}>
                        Use your wallet to send ETH to the presale address below. Our system will send UNIX to your wallet instantly.
                    </p>
                    <p className={lightMode ? styles.address : styles.addressDark}>
                        Presale Address:
                        <p className={copied ? styles.showNotify : styles.hideNotify}>Copied!</p>
                    </p>
                    
                    <input type="button" onClick={copyToClip} defaultValue="0x752915cf84Cf498C260F8A87AE26c"/>
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
