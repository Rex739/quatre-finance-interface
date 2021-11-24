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
                        <h1>Peer Lending & Borrowing</h1>
                        <p>
                            Enjoy the super <b>FOUR</b> benefits of lending and borrowing asset,
                            via a peer to peer structure, staking and participating in Quatrefinance ecosystem.
                        </p>
                        <button className="app-btn"><a href="https://github.com/Quatre-Finance/Q-paper/blob/main/q_core/Q_core.md#quatre-four-q-core" target="_newtab">Learn More</a></button>
                    </article>
                    <article>
                        <h1>Single Lending & Borrowing</h1>
                        <p>
                            Do you want to be able to sell crypto to anyone and at the same time
                            desire utmost control over your funds and set parameters as your wish?
                            If your answer is other than &quot;No&quot;, then this category best fits your need.
                        </p>
                        <button className="app-btn"><a href="https://github.com/Quatre-Finance/Q-paper/blob/main/q_lend/QLend.md#quatre-landb-q-landb" target="_newtab">Learn More</a></button>
                    </article>
                </section>
            </div>
        </section>
    );
}
 
export default AppServices1;