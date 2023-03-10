let wl = "0.06 ETH ";
let ps = "0.0169 ETH ";

export const faq = [
  {
    id: 0,
    question: "What is the mint price?",
    answer: (
      <p>
        The minting price is <b className="font-gothic-bold">{ps}</b>
        {/* whitelist and <b className="font-gothic-bold">{ps}</b>for public mint. */}
      </p>
    ),
  },
  {
    id: 1,
    question: "What is the total stock?",
    answer: (
      <p>
        The total supply is <b className="font-gothic-bold">10,000  </b>
        pandarians.
      </p>
    ),
  },
  {
    id: 2,
    question: "When is the launch date?",
    answer: (
      <p>
        Launch date will be{" "}
        <b className="font-gothic-bold"> July 31st - 15:00 GMT</b> Check back soon
        for the official lauch date, or get notified by joining our{" "}
        <a
          href="https://discord.gg/7mAtAbEzqE"
          target="_blank"
          rel="noreferrer"
          className="text-[#25B15F]"
        >
          Discord
        </a>{" "}
        through an exclusive invite.
      </p>
    ),
  },
  {
    id: 3,
    question: "How many whitelist spots are there?",
    answer: (
      <p>
        There are 
         <b className="font-gothic-bold">3,333 WL</b> spots and  <b className="font-gothic-bold">100 OG</b> spots,
       
      </p>
    ),
  },
  {
    id: 4,
    question: "How many NFTs am I able to mint?",
    answer: (
      <p>
        Each wallet will mint as follows:
         <ul>
          <li>Public = <b className="font-gothic-bold">3</b> NFTs/Wallet</li>
          <li>WL = <b className="font-gothic-bold">5</b> NFTs/Wallet</li>
          <li>OG = <b className="font-gothic-bold">7</b> NFTs/Wallet</li>
         </ul>
       
      </p>
    ),
  },
  {
    id: 5,
    question: "How do I get a whitelist spot? ",
    answer: (
      <p>
        Join the{" "}
        <a
          href="https://discord.gg/7mAtAbEzqE"
          target="_blank"
          rel="noreferrer"
          className="text-[#25B15F]"
        >
          Discord
        </a>{" "}
        and participate in our interactive experience events which will teach
        you everything about the KOP Cinematic Universe. Completing the entire
        process will grant you whitelist.
      </p>
    ),
  },
];
