import Head from 'next/head'
import AppServices1 from '../components/appServices'
import AppServices2 from '../components/appServices2'
import Cards from '../components/cards'
import Hero from '../components/hero'
import RoadMap from '../components/roadMap'
import Team from '../components/team/team'
import Whitepaper from '../components/whitepaper'

// import components


const Home = ({isClicked, lightMode, handleAlert }) => {
  return (
    <>
      <Head>
        <title>Quatre Finance</title>
        <meta charset="utf-8"/>
        <meta name="description" content="Quatre... Bringing you the full power of decentralization Join the ecosystem of decentralized app users and earn in multiple ways"/>
        <meta name="keyword" content="Next App"/>
        <meta name="Author" content="Quatre Team"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      </Head>
      <main className="position-relative">
        <div className={isClicked ? "overlay" : "d-none"}>
        </div>
        {/* render components here */}
        <Hero
          lightMode={lightMode}
          handleAlert={handleAlert}
        />
        <Cards 
          lightMode={lightMode}
        />
        <AppServices1 
          lightMode ={lightMode}
        />
        <AppServices2
          lightMode={lightMode}
        />
        <RoadMap
          lightMode={lightMode}
        />
        <Whitepaper 
          lightMode={lightMode}
          handleAlert={handleAlert}
        />
        <Team 
          lightMode={lightMode}
        />
      </main>
    </>
  )
}

export default Home