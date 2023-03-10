import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import SectionIntro from "../sectionIntro";
import { profile } from "./data";
import { ArrowLeft, ArrowRight } from "./navigate";

const Gallery = () => {
  const [currenSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 10,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,

    breakpoints: {
      "(min-width: 540px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 4,
          spacing: 20,
        },
      },
    },
  });
  const pandarians = profile.map((pandarian) => {
    return (
      <div
        className={["keen-slider__slide rounded-t-lg rounded-b-lg flex flex-col",
        "w-11/12 xs:w-[301px] lg:w-11/12 xl:w-[301px] mx-auto",
        ].join(" ")}
        data-wow-duration="0.2s"
        data-wow-delay={pandarian.animate+"s"}
        key={pandarian.id}
      >
        <img
          src={pandarian.image}
          alt={pandarian.name}
          className="hover:scale-[1.05] duration-300 hover:ease-in hover:duration-300"
        />
        <div className="bg-[#0E4236] h-24 flex flex-col justify-start pt-4 font-gothic-bold">
          <h1 className="text-[#9AD1C5] ml-5 text-[12px]">{pandarian.type}</h1>
          <h2 className="text-white ml-5 text-[14px]">{pandarian.name}</h2>
        </div>
      </div>
    );
  });
  return (
    <section className="py-10 xl:py-28" id="gallery">
      <SectionIntro
        heading={"Gallery"}
        description={
          "Browse our catalog of Main Characters, uniques and honoraries"
        }
      />
      {
        <div className="flex relative items-center">
          {profile && (
            <span className="absolute z-10 flex left-0">
              <ArrowLeft
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              />
            </span>
          )}
          <div ref={sliderRef} className="keen-slider relative mx-4">
            {pandarians}
          </div>
          {profile && (
            <span className="absolute z-10 flex right-0">
              <ArrowRight
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              />
            </span>
          )}
        </div>
      }
    </section>
  );
};

export default Gallery;
