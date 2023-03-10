import SectionIntro from "../sectionIntro";

const About = () => {
  return (
    <section className="py-10 lg:py-28" id="about">
      <SectionIntro
        heading={"About our project"}
        description={"Welcome to Kingdom of Pandaria"}
      />
      <div className="1xl:flex text-white">
        <div className="w-12/12 md:w-10/12 xl:w-full mb-5 xl:mr-12 text-[15px]">
          <p
            className="wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.5s"
          >
            Kingdom of Pandaria is a collection of 3,333 Pandarians fighting for
            their freedom on the Ethereum blockchain. Created by NFT enthusiasts
            and{" "}
            <a
              className="text-[#25B15F]"
              href="https://wmegroup.net"
              target="_blank"
              rel="noreferrer"
            >
              Wonder Media Entertainment Group
            </a>
            , our goal is to bring our passion to the NFT world and build the
            Kingdom of Pandaria with our holders.Being a holder will grant you
            opportunities to participate in raffles, join us in the metaverse
            and be with us during live events. Furthermore, holders have the
            opportunity to stake their NFT to get a guaranteed cashback on their
            mint price plus additional profits. More information regarding this
            can be found on our discord server.
          </p>
          <p
            className="mt-5 wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.6s"
          >
            For now, we follow the story of two brothers, Gui and Genji: bonded
            by birth - broken by sword. After the King and Queen&apos;s murder
            at the hand of their own son, Genji, he takes over the throne,
            exiles his own brother from the kingdom and so the tyrant&apos;s
            rule begins. It&apos;s up to the Pandarians to side with The
            Coalition and join the fight towards freedom. Join us, seek and
            build true freedom!
          </p>
        </div>
        <img
          src="images/about/about.png"
          alt="about"
          className="xl:w-[513px] xl:h-[289px]  wow fadeInUp"
          data-wow-duration="0.5s"
          data-wow-delay="1.1s"
        />
      </div>
    </section>
  );
};

export default About;
