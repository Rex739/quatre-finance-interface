import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const NavList = ({ isClicked, handleClick }) => {
  return (
    <section className="relative bg-[#0E4236] z-30">
      <nav className={isClicked ? "w-8/12 bg-[#0E4236]/50 backdrop-blur-[16px] backdrop-saturate-[180%] text-white fixed h-screen top-0 left-0 pl-5" : "invisible"}>
        <ul className={isClicked ? "flex flex-col text-[12px]" : "hidden"}>
          <li className="flex justify-start relative pt-7 mb-16">
            <div className={isClicked ? "" : "hidden"} onClick={handleClick}>
              <FontAwesomeIcon icon={faTimes} className="text-xl w-5 font-extralight" />
            </div>
          </li>
          <ul
            className={[
              "flex flex-col mb-32 justify-center xl:justify-end  font-gothic-bold",
            ].join(" ")}
          >
            <li onClick={handleClick} className="mb-5">
              <Link href="/">Home</Link>
            </li>
            <li onClick={handleClick} className="mb-5">
              <Link href="#about">About</Link>
            </li>
            <li onClick={handleClick} className="mb-5">
              <Link href="#minting">Minting</Link>
            </li>
            <li onClick={handleClick} className="mb-5">
              <Link href="#gallery">Gallery</Link>
            </li>
            <li onClick={handleClick} className="mb-5">
              <Link href="#roadmap">Roadmap</Link>
            </li>
            <li onClick={handleClick} className="mb-5">
              <Link href="#faq">FAQ</Link>
            </li>
            <li onClick={handleClick} className="mb-5">
              <Link href="#team">Team</Link>
            </li>
            <li onClick={handleClick} className="mb-5">
              <a href="https://discord.gg/7mAtAbEzqE" target="_blank" rel="noreferrer ">Lore</a>
            </li>
          </ul>
        </ul>
      </nav>
    </section>
  );
};
export default NavList;
