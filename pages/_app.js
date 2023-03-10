import '../styles/globals.css'
import Layout from '../components/layout/layout'
import { useEffect, useState } from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";

const MyApp = ({ Component, pageProps }) => {

  const [isClicked, setClicked] = useState(false);
  const [lightMode, darkMode] = useState(true);

  //mobile navbar toggle function
  const handleClick = () => {
    setClicked(!isClicked);
  }
  // toggle mode function
  const toggleMode = () => {
    darkMode(!lightMode);
  }
  const handleAlert = (e) => {
    e.preventDefault()
    return alert("still in development".toUpperCase())
  }
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])
  return (
    <main >
      {
        loading ?

          <section className="app">
            <ScaleLoader
              loading={loading}
              size={120}
              color={'#F7931A'}
            />
          </section>
         
          :
          <Layout
            handleClick={handleClick}
            isClicked={isClicked}
            toggleMode={toggleMode}
            lightMode={lightMode}
            handleAlert={handleAlert}
          >
            <Component {...pageProps}
              handleClick={handleClick}
              isClicked={isClicked}
              toggleMode={toggleMode}
              lightMode={lightMode}
              handleAlert={handleAlert}
            />
          </Layout>  
      }
    </main>
  )
}

export default MyApp