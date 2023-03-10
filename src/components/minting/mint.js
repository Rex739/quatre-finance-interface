import SectionIntro from "../sectionIntro";

const Mint = () => {
  return (
    <section className="py-16" id="minting">
      <SectionIntro
        heading={"Minting"}
        description={"Summon your inner Pandarian and join the revolution"}
      />
      <div className="flex flex-col lg:flex-row">
        <div className="bg-[#0E4236] px-5 rounded-lg flex lg:mr-12">
          <img
            src="images/minting/mint.png"
            alt="pandarians"
            className="mt-auto"
          />
        </div>
        <div
          className={[
            "bg-[#0E4236] py-5 lg:py-5 my-5 lg:my-0 px-5",
            "rounded-lg lg:w-[400px] xl:w-[514px] text-white flex flex-col justify-center items-center",
          ].join(" ")}
        >
          <h1 className="font-bold text-[19px] mb-1.5 lg:mb-3 ">
            Minting Price
          </h1>
          <h2 className="font-bold text-[33px] mb-[-2px]">0.0169 ETH</h2>
          {/* <p className="text-sm font-light text-[#9AD1C5]">
            0.06 ETH Whitelist
          </p> */}
          <a
            href="https://mint.kingdomofpandaria.com/"
            target="_blanck"
            rel="noreferrer"
          >
            <button
              className={[
                `h-12 w-48 bg-[#25B15F] rounded-lg text-white text-[15px] font-bold my-6 xl:my-[42px]`,
              ].join(" ")}
            >
              MINT A PANDA
            </button>
          </a>
          {/* <h2 className="text-[15px] font-bold">Launching soon</h2> */}
        </div>
      </div>
    </section>
  );
};

export default Mint;
