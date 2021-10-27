import React, { useState , useEffect} from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styles from '../styles/local/components/roadmap.module.css'

const RoadMap = ({ lightMode }, props) => {
    const [pause, setPause] = React.useState(false)
    const timer = React.useRef()
    const [count, setCount] = useState(1);
    const [width, setWidth] = useState(0);
    const [currentSlide, setCurrentSlide] = React.useState(0);;
    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        },
        slidesPerView: count,
        loop: true,
        duration: 1000,
        dragStart: () => {
            setPause(true)
        },
        dragEnd: () => {
            setPause(false)
        },  
    })
    React.useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true)
        })
        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false)
        })
    }, [sliderRef])

    React.useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next()
            }
        }, 10000)
        return () => {
            clearInterval(timer.current)
        }
    }, [pause, slider])
    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])

    useEffect(()=> {
        width  >= 768 ? setCount(2) : setCount(1);
        console.log(width)
    }, [width])

    return (
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")}>
            <div className={["navigation-wrapper wrapper ", styles.sectionContent].join(" ")}>
                <h2>History Timeline</h2>
                <h1>Development Roadmap</h1>
                <table>
                    <tr>
                        <th>Legends</th>
                    </tr>
                    <tr>
                        <td><img src="images/double-check.svg" alt={styles.completed}/></td>
                        <td>Completed</td> 
                    </tr>
                    <tr>
                        <td><img src="images/check.svg" alt="ongoing" /></td>
                        <td>Ongoing</td>
                    </tr>
                </table>
                <strong>Swipe</strong>
                <div ref={sliderRef} className={["keen-slider", styles.slidesContainer].join(" ")}>
                    <div className={["keen-slider__slide number-slide1", styles.slideWrapper].join(" ")}>
                        <h2>Q1</h2>
                        <h1>2021</h1>
                        <div>
                            <div className={styles.listVector}>
                                <div></div>
                                <div className={styles.line}></div>
                            </div>
                            <ul>
                                <li className={styles.completed}>Idea stage</li>
                                <li className={styles.completed}>Problem statement draft</li>
                                <li className={styles.completed}>Team formation</li>
                            </ul>
                        </div>
                    </div>
                    <div className={["keen-slider__slide number-slide2", styles.slideWrapper].join(" ")}>
                        <h2>Q2</h2>
                        <h1>2021</h1>
                        <div>
                            <div className={styles.listVector}>
                                <div></div>
                                <div className={styles.line}></div>
                            </div>
                            <ul>
                                <li className={styles.completed}>Solution documentation and planning</li>
                                <li className={styles.completed}>Itemize Solution gathered from research and create some paperwork</li>
                                <li className={styles.completed}>Project plannin</li>
                                <li className={styles.completed}>Website: wireframing and UI/UX design to begin</li>
                                <li>Sales research</li>
                            </ul>
                        </div>
                    </div>
                    <div className={["keen-slider__slide number-slide3", styles.slideWrapper].join(" ")}>
                        <h2>Q3</h2>
                        <h1>2021</h1>
                        <div>
                            <div className={styles.listVector}>
                                <div></div>
                                <div className={styles.line}></div>
                            </div>
                            <ul>
                                <li className={styles.completed}>Product design and strategy for code actualization</li>
                                <li className={styles.completed}>Idea pitching</li>
                                <li className={styles.completed}>Complete Token Smart contract code </li>
                                <li className={styles.completed}>Complete Farm Smart Contract code </li>
                                <li>Complete Presale Contract code</li>
                                <li>Website development begins</li>
                                <li>Community development </li>
                                <li>Sales roadmaps and plans</li>
                            </ul>
                        </div>
                    </div>
                    <div className={["keen-slider__slide number-slide4", styles.slideWrapper].join(" ")}>
                        <h2>Q4</h2>
                        <h1>2021</h1>
                        <div>
                            <div className={styles.listVector}>
                                <div></div>
                                <div className={styles.line}></div>
                            </div>
                            <ul>
                                <li>Complete Landing page</li>
                                <li>Migration, Beta-testing and security audit by mentors</li>
                                <li>Public testing</li>
                                <li>Core product&apos;s code completion</li>
                                <li>Mainnet launch of Token, Farm, Presale </li>
                                <li>Website goes live </li>
                                <li>Operational and strategic marketing begins </li>
                                <li>Phase 1 of sales to begin (Private)</li>
                                <li>Product 1 (Core) goes live</li>
                                <li>Launch airdrop</li>
                                <li>Seed sales (phase 2)</li>
                                <li>Q-VIP NFT development</li>
                                <li>Progress evaluation</li>
                            </ul>
                        </div>
                    </div>
                    <div className={["keen-slider__slide number-slide5", styles.slideWrapper].join(" ")}>
                        <h2>Q1</h2>
                        <h1>2022</h1>
                        <div>
                            <div className={styles.listVector}>
                                <div></div>
                                <div className={styles.line}></div>
                            </div>
                            <ul>
                                <li>Early adopters sale</li>
                                <li>Public sales</li>
                                <li>Product 2 goes live.</li>
                                <li>Intensive marketing and securing partnerships</li>
                                <li>Market serialization and wallet integration of QFT such as Trust wallet, Coingecko, CMC listing etc</li>
                                <li>Exchange listing.</li>
                                <li>Farming goes live</li>
                                <li>Product 2 goes live</li>
                                <li>Product 3 developmet</li>
                                <li>Progress evalution</li>
                            </ul>
                        </div>
                    </div>
                    <div className={["keen-slider__slide number-slide6", styles.slideWrapper].join(" ")}>
                        <h2>Q2</h2>
                        <h1>2022</h1>
                        <div>
                            <div className={styles.listVector}>
                                <div></div>
                                <div className={styles.line}></div>
                            </div>
                            <ul>
                                <li>Fostering more partnerships</li>
                                <li>More CEX listing and partnership</li>
                                <li>BuyBack</li>
                                <li>Product 3 completion and release.</li>
                                <li>Q-Wallet development</li>
                            </ul>
                        </div>
                    </div>
                    <div className={["keen-slider__slide number-slide7", styles.slideWrapper].join(" ")}>
                        <h2>Q3</h2>
                        <h1>2022</h1>
                        <div>
                            <div className={styles.listVector}>
                                <div></div>
                                <div className={styles.line}></div>
                            </div>
                            <ul>
                                <li>Q-Wallet completion and release.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={["keen-slider__slide number-slide8", styles.slideWrapper].join(" ")}>
                        <h2>Q4</h2>
                        <h1>2022</h1>
                        <div>
                            <div className={styles.listVector}>
                                <div></div>
                                <div className={styles.line}></div>
                            </div>
                            <ul>
                                <li>Continuous integration and partnership</li>
                                <li>Continuous product development</li>
                            </ul>
                        </div>
                    </div>
                </div> 
                {slider && (
                    <div className="d-flex justify-content-end">
                        <ArrowLeft
                            onClick={(e) => e.stopPropagation() || slider.prev()}
                            disabled={currentSlide === 0}
                        />
                        <ArrowRight
                            onClick={(e) => e.stopPropagation() || slider.next()}
                            disabled={currentSlide === slider.details().size - 1}
                        />
                    </div>
                )}
            </div>
        </section>
    )
}
const ArrowLeft = (props) => {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <img onClick={props.onClick} src="images/arrow-left.svg" alt="previous" className={"arrow arrow--left mx-2" + disabeld}/>
    )
}
const ArrowRight = (props) => {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <img onClick={props.onClick} src="images/arrow-right.svg" alt="next" className={"arrow arrow--right mx-3" + disabeld} />
    )
}
export default RoadMap;