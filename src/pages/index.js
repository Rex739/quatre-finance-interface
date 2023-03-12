import React from "react"
import SEOHead from "../components/SEOHead/SEOHead"
import TransparenLayer from "../components/transparentLayer"

const Home = ({ isClicked }) => {
  return (
    <>
      <SEOHead />
      <main className="bg-[#061A17] relative">
        {/* white transparent layer when navbar toggle button is clicked  */}
        <TransparenLayer isClicked={isClicked} />
      </main>
    </>
  )
}

export default Home
