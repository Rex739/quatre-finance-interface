import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitter,
  faYoutube,
  faInstagram,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#0B2520] py-12">
      <section className="wrapper">
        <h1 className="text-[32px] font-bold text-white">
          Kingdom of <span className="text-[#25B15F]">Pandaria</span>
        </h1>
        <p className="text-white text-[13px]">
          The world&apos;s first ever <b className="font-gothic-bold">story-based</b> NFT project.
        </p>
        <p className="text-[#9AD1C5] text-[13px] mt-10 mb-20">
          &copy; 2021 - 2022 <a href="https://wmegroup.net/" target="_black" rel="noreferrer" className="font-gothic-bold text-[#25B15F]">Wonder Media Entertainment</a> 
        </p>
        <h2 className="text-[17px] font-bold text-white mb-5">
          Join the community
        </h2>
        <div  className="flex">
          <a
            href="http://discord.gg/PdnnsTvTpN"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faDiscord}
              size="2xl"
              className={["h-10 w-10 p-2 mr-3 bg-[#0E4236] text-white rounded-full",
              "hover:bg-[#25B15F]"].join(" ")}
            />
          </a>
          <a
            href="https://twitter.com/kopandaria"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              size="2xl"
              className={["h-10 w-10 p-2 mr-3 bg-[#0E4236] text-white rounded-full",
              "hover:bg-[#25B15F]"].join(" ")}
            />
          </a>
          <a
            href="https://www.instagram.com/kopandaria"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2xl"
              className={["h-10 w-10 p-2 mr-3 bg-[#0E4236] text-white rounded-full",
              "hover:bg-[#25B15F]"].join(" ")}
            />
          </a>
          <a
            href="https://www.youtube.com/c/WonderMediaEntertainment"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              size="2xl"
              className={["h-10 w-10 p-2 mr-3 bg-[#0E4236] text-white rounded-full",
              "hover:bg-[#25B15F]"].join(" ")}
            />
          </a>
          <a
            href="mailto:support@kingdomofpandaria.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2xl"
              className={["h-10 w-10 p-2 mr-3 bg-[#0E4236] text-white rounded-full",
              "hover:bg-[#25B15F]"].join(" ")}
            />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
