import styles from '../styles/local/components/services1.module.css'

const AppServices1 = ({ lightMode }) => {
    return ( 
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}>
            <div className={["wrapper", styles.sectionContent].join(" ")}>
                <figcaption>
                    <img src="images/quatre.png" class="img-fluid" alt="quatre finance" />
                </figcaption>
                <section>
                    <article>
                        <h4><strong>Peer Lending & Borrowing</strong></h4>
                        <p>
                            Enjoy the super <strong>FOUR</strong> benefits of lending and borrowing asset,
                            via a peer to peer structure, staking and participating in Quatrefinance ecosystem.<br></br>
                            <button class="btn btn-secondary"><a href="https://github.com/Quatre-Finance/Q-paper/blob/main/q_core/Q_core.md#quatre-four-q-core" target="_newtab">Learn more</a></button>
                        </p>
                    </article>
                    <article>
                        <h4><strong>Single Lending & Borrowing</strong></h4>
                        <p>
                            Do you want to be able to sell crypto to anyone and at the same time
                            desire utmost control over your funds and set parameters as your wish?
                            If your answer is other than "No", then this category best fits your need.<br></br>
                            <button class="btn btn-secondary"><a href="https://github.com/Quatre-Finance/Q-paper/blob/main/q_lend/QLend.md#quatre-landb-q-landb" target="_newtab">Learn more</a></button>
                        </p>
                    </article>
                </section>
            </div>
        </section>
    );
}
 
export default AppServices1;