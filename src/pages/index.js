import React from "react"
import Hero from "../components/hero/hero"
import SEOHead from "../components/SEOHead/SEOHead"
import TransparenLayer from "../components/transparentLayer"

const Home = ({ isClicked }) => {
  return (
    <>
      <SEOHead />
      <main className="bg-green1 relative">
        {/* white transparent layer when navbar toggle button is clicked  */}
        <TransparenLayer isClicked={isClicked} />
        <Hero />
      </main>
    </>
  )
}

export default Home
