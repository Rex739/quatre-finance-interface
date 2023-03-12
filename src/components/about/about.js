import React from "react"
import Section from "../section"
import { aboutData } from "./data"

const About = () => {
  return (
    <section className="wrapper font-inter text-lg lg:text-xl text-white1 text-left lg:text-center">
      {aboutData.map((data) => (
        <Section
          key={data.id}
          sectionTitle={data.sectionTitle}
          subTitle={data.subTitle}
          paragraph1={data.paragraph1}
          paragraph2={data.paragraph2}
          sectionImage={data.sectionImage}
          sectionName={data.sectionName}
        />
      ))}
    </section>
  )
}

export default About
