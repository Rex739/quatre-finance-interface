const Hero = () => {
  return (
    <main
      className={[
        "text-white flex flex-col lg:flex-row items-center",
        "justify-evenly xl:justify-center py-10 relative",
      ].join(" ")}
    >
      <div className="relative">
        <ul className="flex lg:hidden justify-center mb-5">
          <li className="mr-1">
            <a
              href="https://mint.kingdomofpandaria.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className={[
                  "w-32 h-8 bg-[#0E4236] text-white text-[9px] font-bold rounded-md",
                  "hover:bg-[#25B15F]",
                ].join(" ")}
              >
                MINT A PANDA
              </button>
            </a>
          </li>
        </ul>
        <img
          className="w-12/12 md:w-8/12 lg:w-full xl:w-12/12 lg:pr-12 wow fadeInUp"
          data-wow-duration="0.3s"
          data-wow-delay="3s"
          src="images/hero/hero.png"
          alt="pandaria"
        />
      </div>
      <div className="w-11/12 md:w-7/12 lg:w-[500px] xl:w-[430px] 2xl:w-[450px] 1xl:mt-20 mr-auto xl:mr-0 relative">
        <h1
          className="text-[36px] wow fadeInUp font-gothic-bold"
          data-wow-duration="0.3s"
          data-wow-delay="3s"
        >
          The world&apos;s first ever
          <span className="text-[#25B15F]"> story-based </span>NFT project.
        </h1>
        <p
          className="text-[#9AD1C5] text-[17px] my-8 lg:my-6 1xl:mb-16 1xl:mt-8 wow fadeInUp"
          data-wow-duration="0.3s"
          data-wow-delay="3.3s"
        >
          Join our socials for more information about our project.
        </p>
        <div
          className="flex justify-start wow fadeInUp"
          data-wow-duration="0.3s"
          data-wow-delay="3.5s"
        >
          <a
            href="http://discord.gg/PdnnsTvTpN"
            target="_blanks"
            rel="noreferrer"
          >
            <button className="font-gothic-bold h-12 lg:h-14 w-36 lg:w-48 mr-3 bg-[#25B15F] text-white rounded-md">
              Discord
            </button>
          </a>

          <a
            href="https://twitter.com/kopandaria"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className={[
                "font-gothic-bold h-12 lg:h-14 w-36 lg:w-48 bg-[#0E4236] text-white rounded-md",
                "hover:bg-[#25B15F]",
              ].join(" ")}
            >
              Twitter
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
