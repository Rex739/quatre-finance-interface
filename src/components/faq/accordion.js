/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { faq } from "./data";

const Accordion = ({}) => {
  const [isActive, setActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const FAQ = faq.map((item, i) => {
    const handleClick = () => {
      setActive(!isActive);
      i === item.id ? setActiveIndex(i) : null;
    };
    return (
      <article key={item.id} className=" w-12/12 lg:w-11/12 xl:w-12/12 ">
        <div
          className="flex justify-between bg-[#0E4236] px-3 mb-3 xl:mb-5 h-[56px] my-auto rounded-md font-gothic-bold cursor-pointer"
          onClick={handleClick}
        >
          <h3 className="w-3/4 text-white text-base font-bold my-auto">
            {item.question}
          </h3>
          <button className="outline-none">
            <img
              src={
                activeIndex === item.id && isActive
                  ? "images/faq/arrow-up.svg"
                  : "images/faq/arrow-down.svg"
              }
              alt="collapse button"
              width="21px"
              // height="9px"
            />
          </button>
        </div>
        {activeIndex === item.id && isActive && (
          <span className="flex items-stretch justify-start mb-14">
            <div className="w-1 mx-4 bg-[#25B15F] flex items-stretch"></div>
            <div className={["text-[13px] text-[#9AD1C5]"].join(" ")}>{item.answer} </div>
          </span>
        )}
      </article>
    );
  });

  return <section className="w-full">{FAQ}</section>;
};

export default Accordion;
