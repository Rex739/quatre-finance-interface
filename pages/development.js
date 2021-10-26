import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { useTimer } from 'react-timer-hook'
import Link from 'next/link';
import styles from '../styles/local/components/development/development.module.css'

const Development = ({ lightMode }) => {
    const time = useMemo(()=> {
       return new Date()
    }, []);
    time.setSeconds(time.getSeconds() + 0);

    const {
        seconds,
        restart
    } = useTimer({ time, onExpire: () => console.warn('onExpire called') });

    const router = useRouter();

    useEffect(() => {
        if (router.asPath === '/development') {
            time.setSeconds(time.getSeconds() + 5)
            restart(time)
        }
        setTimeout(() => {
            router.push("/")
        }, 5000);
    }, [router, restart])

    return (
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}>
            <div className={["wrapper", styles.devWrap,  "text-center"].join(" ")}>
                <figure>
                    <img src={"images/development/development1.png"} alt="in development" />
                    {/* <img src={"images/development/engine1.png"} alt="in development" /> */}
                    <figcaption>
                        {"development in progress".toUpperCase()}
                    </figcaption>
                    <p>
                        {`redirecting to homepage in  ${seconds}`.toLowerCase()}
                    </p>
                    <div className="buttons d-flex justify-content-center">
                        <button className="app-btn"><Link href="/">Homepage</Link></button>
                    </div>
                </figure>
            </div>
        </section>
    );
}

export default Development;