import moment from 'moment';
import styles from '../../styles/local/components/presales/hero.module.css';
// import img from '/public/images/presale-hero-image.png';
import img from '../../public/images/presale-hero-image.png';
import { useEffect, useState } from 'react';
const Hero = ({ lightMode }) => {

    const [days, setDays] = useState(undefined);
    const [hours, setHours] = useState(undefined);
    const [minutes, setMinutes] = useState(undefined);
    const [seconds, setSeconds] = useState(undefined);
    
    useEffect(() => {
        const interval = setInterval(() => {
            const then = moment('12 1 2021, 10:00 am', 'MM DD YYYY, h:mm a');
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');
            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
      
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);
    return(
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}>
            <div className={[styles.sectionContent, "wrapper"].join(" ")}>
                <div className={styles.heroInfo}>
                    <div className={styles.heroImgContainer}>
                        <img src={img.src} alt='User' className={styles.heroImg}/>
                        <div className={styles.box}>

                        </div>
                    </div>
                    <div className={styles.heroDetails}>
                        <h1>QUATRE</h1>
                        <p>
                            UNIX is the abbreviation of UNIXSWAP. UNIX is a hard fork of UNI, which aims to eliminate the inherent flaws of UNI,simplify the user threshold, and provide lower rates to improve the DEFecosystem. UNIX has a total supply of 500,000, which is only 1/2,000 of UNI. It is intended to create high-priced coins to attract popularity!
                        </p>
                        <div className={styles.buttonsContainer}>
                            <button className={lightMode ? styles.airdropBtn : styles.airdropBtnDark}>Airdrop</button>
                            <button className={styles.presaleBtn}>Presale</button>
                        </div>
                    </div>
                    
                </div>
                <div className={styles.countDown}>
                    <div className={styles.airdropEnd}>
                        <p>
                            Airdrop Ending:
                        </p>
                    </div>
                    <div className={styles.timer}>
                        <div className={styles.timerDay}>
                            <h3>{days}</h3>
                            <p>Days</p>
                        </div>
                        <div className={styles.timerBorder}></div>
                        <div className={styles.timerHour}>
                            <h3>{hours}</h3>
                            <p>Hours</p>
                        </div>
                        <div className={styles.timerBorder}></div>
                        <div className={styles.timerMinute}>
                            <h3>{minutes}</h3>
                            <p>Minutes</p>
                        </div>
                        <div className={[styles.timerBorder, styles.adjust].join(" ")}></div>
                        <div className={styles.timerSecond}>
                            <h3>{seconds}</h3>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;