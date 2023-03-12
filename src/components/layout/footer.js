import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDiscord,
  faTwitter,
  faYoutube,
  faInstagram,
  faReddit,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import Socials from "../socials"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray1 py-12 text-white">
      <div className="wrapper flex flex-col lg:flex-row justify-between">
        <ul className="mb-[40px]">
          <li>
            <h1 className="font-nova-square text-3xl lg:text-5xl mb-[16px] lg:mb-[24px] ">
              QuatreFinance
            </h1>
          </li>
          <Socials />
          <li className="mt-[16px] lg:mt-[24px]">
            {" "}
            <a
              href="mailto:officialemail@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              officialemail@gmail.com
            </a>
          </li>
        </ul>
        <ul className="mb-[40px]">
          <li>
            <h1 className="text-2xl font-bold mb-[16px] lg:mb-[24px] ">
              WHAT WE DO
            </h1>{" "}
          </li>
          <li>
            <Link href="/">
              <a>Learn</a>
            </Link>{" "}
          </li>
          <li>
            <Link href="/">
              <a>Community</a>
            </Link>{" "}
          </li>
        </ul>
        <ul className="mb-[40px]">
          <li>
            {" "}
            <h1 className="text-2xl font-bold mb-[16px] lg:mb-[24px] ">
              COMPANY
            </h1>{" "}
          </li>
          <li>
            <Link href="/">
              <a>About Us</a>
            </Link>{" "}
          </li>
          <li>
            <Link href="/">
              <a>Privacy Policy</a>
            </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="wrapper">
        &copy;2023 QuatreFinance. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
