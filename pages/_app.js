import '../styles/globals.css'
import Layout from '../components/layout'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';

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

  return (
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
  )
}

export default MyApp