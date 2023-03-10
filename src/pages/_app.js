import "../styles/globals.css";
import Layout from "../../components/layout/layout";
import { useState } from "react";
import SEOHead from "../components/SEOHead/SEOHead";

const MyApp = ({ Component, pageProps }) => {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!isClicked);
  };
  return (
    <>
      <SEOHead />
      <main>
        <Layout handleClick={handleClick} isClicked={isClicked}>
          <Component
            {...pageProps}
            handleclick={handleClick}
            isClicked={isClicked}
          />
        </Layout>
      </main>
    </>
  );
};

export default MyApp;
