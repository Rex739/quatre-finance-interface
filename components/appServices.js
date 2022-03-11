import styles from '../styles/local/components/services1.module.css'

const AppServices1 = ({ lightMode }) => {
    return ( 
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}>
            <div className={["wrapper", styles.sectionContent].join(" ")}>
                <figcaption>
                    <img src="images/quatre.png" alt="quatre finance" />
                </figcaption>
                <section>
                    <article>
                        <h1>Peer-Funding, Lending & Borrowing</h1>
                        <p>
                            Enjoy the super benefits of lending and borrowing asset,
                            via a decentralized peer to peer structure, staking and participating in Quatrefinance ecosystem. <strong className={styles.strong}>Digesu<span className={styles.new}><i>New</i></span></strong>
                        </p>
                        <button className="app-btn"><a href="https://github.com/Quatre-Finance/Q-paper/blob/main/q_core/QuatreDigesu.md" target="_newtab">Learn More</a></button>
                    </article>
                    <article>
                        <h1>You-ni-Fi</h1>
                        <p>
                            Do you want to be able to sell crypto to anyone and at the same time
                            desire utmost control over your funds and set parameters as your wish?
                            If your answer is &quot;Yes&quot;, then this category best fits your need.
                            Sometimes, you need to do things your way.
                        </p>
                        <button className="app-btn"><a href="https://github.com/Quatre-Finance/Q-paper/blob/main/q_p2p/Q_p2p.md" target="_newtab">Learn More</a></button>
                    </article>
                </section>
            </div>
        </section>
    );
}
 
export default AppServices1;