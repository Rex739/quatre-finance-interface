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
                <div ref={sliderRef} className="keen-slider wrapper">
                    <div className={["keen-slider__slide number-slide1", styles.slideWrapper].join(" ")}>
                        <h2>PHASE 1</h2>
                        <h1>OCTOBER  2021</h1>
                        <div>
                            <div className={styles.listVector}>
                                <div></div>
                                <div className={styles.line}></div>
                            </div>
                            <ul>
                                <li>Migration, testing and security audit of Quatre core</li>
                                <li>Website goes live.</li>
                                <li>First phase of Airdrop to be launched.</li>
                                <li>Private sale begins.</li>
                                <li>Early adopters sales.</li>
                                <li>Public sale. </li>
                            </ul>
                        </div>
                    </div>
                    <div className={["keen-slider__slide number-slide2", styles.slideWrapper].join(" ")}>
                        <h2>PHASE 2</h2>
                        <h1>NOVEMBER  2021</h1>
                        <div>
                            <div className={styles.listVector}>
                                <div></div>
                                <div className={styles.line}></div>
                            </div>
                            <ul>
                                <li>Presale and airdrop end.</li>
                                <li>Operational and strategic marketing begin.</li>
                                <li>Product 2 goes live.</li>
                                <li>Pancakeswap listing and relevant exchange listing. </li>
                                <li>Market serialization and integration of QFOUR Token</li>
                                <li>Farming begins.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={["keen-slider__slide number-slide3", styles.slideWrapper].join(" ")}>
                        <h2>PHASE 1</h2>
                        <h1>OCTOBER  2021</h1>
                        <div>
                            <div className={styles.listVector}>
                                <div></div>
                                <div className={styles.line}></div>
                            </div>
                            <ul>
                                <li>Migration, testing and security audit of Quatre core</li>
                                <li>Website goes live.</li>
                                <li>First phase of Airdrop to be launched.</li>
                                <li>Private sale begins.</li>
                                <li>Early adopters sales.</li>
                                <li>Public sale. </li>
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