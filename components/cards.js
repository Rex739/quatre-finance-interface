import styles from '../styles/local/components/cards.module.css'

const Cards = ({ lightMode }) => {
    return (  
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}>
            <article>
                <div className="cards">
                    <img src="images/buy-and-sell-mobile.svg" alt="buy and sell services" />
                    <p>Buy & Sell</p>
                </div>
                <div className="cards">
                    <img src="images/lend-and-borrow-mobile.svg" alt="lend and borrow services" />
                    <p>Lending &<br /> Borrowing</p>
                </div>
                <div className="cards">
                    <img src="images/p2p-mobile.svg" alt="P2P services" />
                    <p>P2P services</p>
                </div>
                <div className="cards">
                    <img src="images/wallet-mobile.svg" alt="wallet services" />
                    <p>Wallet</p>
                </div>
            </article>
            <article className="">
                <div className="cards">
                    <img src="images/buy-and-sell.svg" alt="buy and sell services" />
                </div>
                <div className="cards">
                    <img src="images/lend-borrow.svg" alt="lend and borrow services" />
                </div>
                <div className="cards">
                    <img src="images/p2p.svg" alt="P2P services" />
                </div>  
                <div className="cards">
                    <img src="images/wallet.svg" alt="wallet services" />
                </div>
            </article>
            
        </section>
    );
}
 
export default Cards;