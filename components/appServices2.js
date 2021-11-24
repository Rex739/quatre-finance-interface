import styles from '../styles/local/components/services2.module.css'

const AppServices2 = ({ lightMode}) => {
    return (
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}>
            <div className={["wrapper", styles.sectionContent].join(" ")}>
                <figcaption>
                    <img src="images/wallet-app.png" alt="quatre finance" />
                </figcaption>
                <section>
                    <article>
                        <h1>Buy & Sell</h1>
                        <p>
                            Buy and Sell directly without a third party involvement. Your assets stays
                            with you and your worries about providing KYC and personal data are over. 
                            You also enjoy the benefits of being part of the ecosystem.  
                        </p>
                        <button className="app-btn"><a href="https://github.com/Quatre-Finance/Q-paper/blob/main/q_bands/Q_bands.md#quatre-buy-and-sell-q-bands" target="_newtab">Learn More</a></button> 
                    </article>
                    <article>
                        <h1>Q-Wallet</h1>
                        <p>
                            Quatrefinance decentralized wallet not only serves you the benefits of owing
                            and controlling your assets but also come with a great deal of features you need
                            to fully experience the power of blockchain technology in securing and preserving
                            what matters to you.
                            <br/> 
                        </p>
                        <button className="app-btn"><a href="https://github.com/Quatre-Finance/Q-paper/blob/main/q_wallet/Q_Wallet.md" target="_newtab">Learn More</a></button>
                    </article>
                </section>
            </div>
        </section>
    );
}

export default AppServices2;