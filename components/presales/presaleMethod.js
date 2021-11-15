import styles from '../../styles/local/components/presales/presaleMethod.module.css';
import imgDetails from '/public/images/presale-details.png';
import imgRules from '/public/images/presale-rules.png';
import imgMethod from '/public/images/presale-method.png';
// import img from '../../public/images/presale-details.png';

const PresaleMethod = ({ lightMode }) => {
    
    return(
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}>
            <div className={[styles.sectionContent, "wrapper"].join(" ")}>
                <div className={styles.airdropDetails}>
                    <h2 className={styles.title}>
                        <img src={imgDetails.src} className={styles.imgStyling} style={{ marginBottom: '0.5em' }} />
                        Airdrop Details
                    </h2>
                    <p>
                        • The amount for airdrop is 100,000. Send an ETH wallet address to participate in airdrop. Every participant can get 1 UNIX, and will be rewarded 1 UNIX for per each referral. Each person can invite up to 30 people, and the reward can be up to 30 UNIX Tokens.
                    </p>
                    <p>
                        • The UNIX airdrop will end on October 15. After the airdrop ends, UNIX tokens will be automatically distributed to your submitted ETH wallet address.
                    </p>
                    <p>
                        • If the presale is completed in advance, the airdrop distribution and UNIX listing will be advanced.
                    </p>
                    <p>
                        • Please do real referral. If our system discovered unwanted activities known as cheating, the reward will be removed during distribution.
                    </p>
                    
                </div>
                <div className={styles.presaleRules}>
                    <h2 className={styles.title}>
                        <img src={imgRules.src} className={styles.imgStyling}/>
                        Presale Rules
                    </h2>
                    <p>
                        •The amount for presale is 300,000 UNIX tokens. Presale time: 2021-9-15 to 2021-10-15 (UTC-7).
                    </p>
                    <p>
                        •Presale price 1 ETH = 1000 UNIX. Mini buy 0.1 ETH, Max buy 10 ETH.
                    </p>
                    <p>
                        •The distribution of UNIX will be based on ETH time arrived. First come, first served.
                    </p>
                    
                </div>
                <div className={styles.presaleMethod}>
                    <h2 className={styles.title}>
                        <img src={imgMethod.src} className={styles.imgStyling} style={{ marginBottom: '0.5em' }} />
                        Presale Method
                    </h2>
                    <p>
                        •Use your wallet to send ETH to the presale address provided on this platform. Our system will automatically send UNIX tokens to your wallet instantly.
                    </p>
                    <p>
                        •You can send ETH any amount.
                    </p>
                    <p>
                        •Once the presale is over. 30% of the funds raised will be locked in Uniswap liquidity. Similarly, 30% of the funds raised will be used for listing on Binance, Coinbase, Huobi and Hotbit exchanges. The other 40% of the funds raised will be used to buyback UNIX tokens after Presale. This action will prevent people from dumping.
                    </p>
                    
                </div>
            </div>
        </section>
    );
};

export default PresaleMethod;