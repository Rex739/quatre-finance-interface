import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import ActiveLink from "./activeLink"
import Link from "next/link"
import React from "react"

const TopBar = ({ isClicked, handleClick }) => {
  return (
    <header className="bg-green1 py-5 lg:py-10 font-inter">
      <nav className="wrapper">
        <ul className="flex items-center justify-between">
          <li>
            <Link href="/">
              <a>
                <img src="/images/navbar/logo.svg" alt="Logo" />
              </a>
            </Link>
          </li>
          <li className="lg:hidden relative">
            {/* hamburger button */}
            <div
              className={isClicked ? "hidden" : "my-auto"}
              onClick={handleClick}
            >
              <FontAwesomeIcon
                // @ts-ignore
                icon={faBars}
                // @ts-ignore
                size="2xl"
                className="text-3xl w-6 pt-2 font-extralight text-white"
              />
            </div>
          </li>
          <div className="hidden lg:flex">
            <ActiveLink
              href="/"
              handleClick={handleClick}
              children={"Home"}
            ></ActiveLink>
            <ActiveLink
              href="/#learn"
              handleClick={handleClick}
              children={"Learn"}
            ></ActiveLink>
            <ActiveLink
              href="/#community"
              handleClick={handleClick}
              children={"Commuinity"}
            ></ActiveLink>
          </div>
          <li className="hidden lg:flex">
            <a href="">
              <button className="bg-orange w-[174px] h-[60px] rounded-lg text-white1">
                Go To App
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default TopBar
