import Link from "next/link";
import ActiveLink from "../../activeLink";

const TopBar = ({}) => {
  return (
    <header className="bg-green1 p-[52rem] text-lg">
      <nav className="wrapper">
        <ul className="font-bold flex">
          <li>
            <Link href="/" passHref>
              <img
                src="images/navbar/logo.svg"
                className="cursor-pointer"
                alt="logo"
              />
            </Link>
          </li>
          <ActiveLink href="" target="_blank" rel="noreferrer">Home</ActiveLink>
          <ActiveLink href="" target="_blank" rel="noreferrer">Learn</ActiveLink>
          <ActiveLink href="" target="_blank" rel="noreferrer">Community</ActiveLink>
          <li>
            <Link href="/" passHref>
                <button className="">Go To App</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopBar;
