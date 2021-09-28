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

  return (
    <Layout 
      handleClick={handleClick}
      isClicked={isClicked}
      toggleMode={toggleMode}
      lightMode={lightMode}
    >
      <Component {...pageProps} 
        handleClick={handleClick}
        isClicked={isClicked}
        toggleMode={toggleMode}
        lightMode={lightMode}
      />
    </Layout>
  )
}

export default MyApp