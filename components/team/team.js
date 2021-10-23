import { useState, useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styles from '../../styles/local/components/team.module.css'
import Members from "./members"
import { ArrowLeft, ArrowRight } from "./navigate"


const Team = ({lightMode}, props) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [count, setCount] = useState(1);
    const [width, setWidth] = useState(0);
    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        },
        slidesPerView: count
    })

    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])

    useEffect(() => {
        width >= 1440 ? setCount(3) : width >= 768 ? setCount(2) : setCount(1);
        console.log(width)
    }, [width])

    return ( 
        <section className={lightMode ? [styles.lightMode, styles.sectionContainer].join(" ") : [styles.darkMode, styles.sectionContainer].join(" ")} id="team">
            <div className={["navigation-wrapper wrapper ", styles.sectionContent].join(" ")}>
                <h1>Our Team</h1>
                <p>
                    As a remote team of individuals with a wide range of backgrounds and interests, we promote decentralized products
                    in the blockchain space tailored to specific community needs and the world at large.
                </p>
                {slider && (
                    <>
                        <ArrowLeft
                            onClick={(e) => e.stopPropagation() || slider.prev()}
                            disabled={currentSlide === 0}
                        />
                    </>
                )}
                <div ref={sliderRef} className="keen-slider">
                    <Members 
                        lightMode={lightMode}
                    />
                </div>
                {slider && (
                    <>
                        <ArrowRight
                            onClick={(e) => e.stopPropagation() || slider.next()}
                            disabled={currentSlide === slider.details().size - 1}
                        />
                    </>
                )}
            </div>
        </section>
    );
}
export default Team;