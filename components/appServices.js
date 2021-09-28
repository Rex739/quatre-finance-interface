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
                        <h1>Lend & Borrow</h1>
                        <p>
                            When you take your money and invest it
                            in the market, your primary goal is to grow
                            your  bottom line. One way to do that is to
                            consider diversifying your portfolio to include
                            variou iches and types.
                        </p>
                    </article>
                    <article>
                        <h1>Buy & Sell</h1>
                        <p>
                            When you take your money and invest it
                            in the market, your primary goal is to grow
                            your  bottom line. One way to do
                            that is to consider diversifying your portfolio
                            to include various investment niches and types.
                        </p>
                    </article>
                </section>
            </div>
        </section>
    );
}
 
export default AppServices1;