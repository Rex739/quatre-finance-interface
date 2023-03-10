import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const TopBar = ({ isClicked, handleClick }) => {
  return (
    <header className="bg-[#061A17] py-5 lg:py-10">
      <nav className="wrapper">
        <ul className="flex flex-row text-[12px] text-white lg:items-center font-gothic-bold">
          <li className="lg:hidden relative">
            {/* hamburger button */}
            <div
              className={isClicked ? "hidden" : "my-auto"}
              onClick={handleClick}
            >
              <FontAwesomeIcon
                icon={faBars}
                size="2xl"
                className="text-3xl w-6 pt-2 font-extralight text-white"
              />
            </div>
          </li>
          <li className="lg:flex ml-auto lg:ml-0 lg:mr-6">
            <Link href="/" passHref>
              <img
                src="images/navbar/logo.svg"
                className="cursor-pointer"
                alt="logo"
              />
            </Link>
          </li>
          <li
            className={[
              "hidden duration-300 lg:flex ml-10 mr-3",
              "hover:text-[#25B15F] duration-300",
            ].join(" ")}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={[
              "hidden duration-300 lg:flex mr-6",
              "hover:text-[#25B15F] duration-300",
            ].join(" ")}
          >
            <Link href="/#about">About</Link>
          </li>
          <li
            className={[
              "hidden duration-300 lg:flex mr-6 ",
              "hover:text-[#25B15F] duration-300",
            ].join(" ")}
          >
            <Link href="/#minting">Minting</Link>
          </li>
          <li
            className={[
              "hidden duration-300 lg:flex mr-6",
              "hover:text-[#25B15F] duration-300",
            ].join(" ")}
          >
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li
            className={[
              "hidden duration-300 lg:flex mr-6",
              "hover:text-[#25B15F] duration-300",
            ].join(" ")}
          >
            <Link href="/#roadmap">Roadmap</Link>
          </li>
          <li
            className={[
              "hidden duration-300 lg:flex mr-6",
              "hover:text-[#25B15F] duration-300",
            ].join(" ")}
          >
            <Link href="/#faq">FAQ</Link>
          </li>
          <li
            className={[
              "hidden duration-300 lg:flex mr-6",
              "hover:text-[#25B15F] duration-300",
            ].join(" ")}
          >
            <Link href="/#team">Team</Link>
          </li>
          <li
            className={[
              "hidden duration-300 lg:flex mr-6",
              "hover:text-[#25B15F] duration-300",
            ].join(" ")}
          >
            <a
              href="https://discord.gg/7mAtAbEzqE"
              target="_blank"
              rel="noreferrer "
            >
              Lore
            </a>
          </li>
          <li className="hidden  lg:flex ml-auto mr-1 1xl:mr-2">
            <a
              href="https://mint.kingdomofpandaria.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className={[
                  "w-32 1xl:w-[168px] h-8 1xl:h-[36px] bg-[#0E4236] text-white text-[9px] font-bold rounded-md",
                  "hover:bg-[#25B15F]",
                ].join(" ")}
              >
                MINT A PANDA
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default TopBar;
