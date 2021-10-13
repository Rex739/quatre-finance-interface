import Head from 'next/head'
import AppServices1 from '../components/appServices'
import AppServices2 from '../components/appServices2'
import Cards from '../components/cards'
import Hero from '../components/hero'
import RoadMap from '../components/roadMap'
import Team from '../components/team/team'
import Whitepaper from '../components/whitepaper'

// import components


const Home = ({lightMode, handleAlert }) => {
  return (
    <>
      <Head>
        <title>Quatre||Home</title>
      </Head>
      <main>
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