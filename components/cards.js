import styles from '../styles/local/components/cards.module.css'

const Cards = ({ lightMode }) => {
    return (  
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}>
            <article className="wrapper">
                <div className="cards">
                    <img src="images/cards/buy-and-sell-mobile.svg" alt="buy and sell services" />
                    {/* <p>Buy & Sell</p> */}
                </div>
                <div className="cards">
                    <img src="images/cards/lend-and-borrow-mobile.svg" alt="lend and borrow services" />
                    {/* <p>Lending &<br /> Borrowing</p> */}
                </div>
                <div className="cards">
                    <img src="images/cards/p2p-mobile.svg" alt="P2P services" />
                    {/* <p>P2P services</p> */}
                </div>
                <div className="cards">
                    <img src="images/cards/wallet-mobile.svg" alt="wallet services" />
                    {/* <p>Wallet</p> */}
                </div>
            </article>
            <article className="wrapper">
                <div className="cards">
                    <img src="images/cards/buy-and-sell.svg" alt="buy and sell services" />
                </div>
                <div className="cards">
                    <img src="images/cards/lend-borrow.svg" alt="lend and borrow services" />
                </div>
                <div className="cards">
                    <img src="images/cards/p2p.svg" alt="P2P services" />
                </div>  
                <div className="cards">
                    <img src="images/cards/wallet.svg" alt="wallet services" />
                </div>
            </article>
            
        </section>
    );
}
 
export default Cards;