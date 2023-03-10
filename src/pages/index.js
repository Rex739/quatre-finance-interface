import Head from "next/head";
// import Team from '../components/team/team'

// import components

const Home = ({ isClicked, lightMode, handleAlert }) => {
  return (
    <>
      <Head>
        <title>Quatre Finance</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Quatre... Bringing you the full power of decentralization Join the ecosystem of decentralized app users and earn in multiple ways"
        />
        <meta name="keyword" content="Next App" />
        <meta name="author" content="Quatre Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <main className="position-relative">
        <div className={isClicked ? "overlay" : "d-none"}></div>
      </main>
    </>
  );
};

export default Home;
