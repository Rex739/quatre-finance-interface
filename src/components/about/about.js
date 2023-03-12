import React from "react"

const About = () => {
  return (
    <section className="wrapper font-inter text-lg lg:text-xl text-white1 text-left lg:text-center">
      <header>
        <h2 className="font-nova-square text-[32px] lg:text-5xl xl:text-6xl mb-2">
          Who We Are
        </h2>
      </header>
      <p className="w-9/12 lg:mx-auto">
        Who we are and our mission at QuatreFinance{" "}
      </p>
      <div className="flex flex-col lg:flex-row mt-10 items-center w-full">
        <img
          src="images/frame1.png"
          alt="About us"
          className="mb-10 lg:mb-0 md:w-9/12 lg:w-6/12 mr-auto"
        />
        <div className="flex flex-col md:w-8/12 lg:w-5/12 text-left mr-auto  leading-[150%] lg:text-left lg:mx-auto">
          <p className="mb-5">
            An ecosystem of decentralized, multifaceted & multifunctional
            non-custodial protocols for safe crypto and non-crypto dealings.
          </p>
          <p className="">
            At QuatreFinance, we harness the potentials of blockchain technology
            to provide solutions to existing  and emerging problem in societies
            making the solutions available globally.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
