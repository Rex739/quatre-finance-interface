import React from "react";
import { useState } from "react";
const ScrollButton = ({ windowIsDefined }) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    windowIsDefined &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
        /* you can also use 'auto' behaviour
         in place of 'smooth' */
      });
  };

  windowIsDefined && window.addEventListener("scroll", toggleVisible);
  return (
    <button
      onClick={scrollToTop}
      style={{ display: visible ? "flex" : "none" }}
      className={
        "fixed z-50 bottom-12 right-1 xl:right-5 1xl:right-10 rounded-lg bg-[#25B15F] h-10 w-10 xl:h-[53px] xl:w-[52px] justify-center items-center"
      }
    >
      <img src="images/faq/arrow-up.svg" alt="global lanthern" />
    </button>
  );
};

export default ScrollButton;
