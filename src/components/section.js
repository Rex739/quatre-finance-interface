// @ts-nocheck
import React from "react"
import SectionBody from "./sectionBody"
import SectionHeader from "./sectionHeader"

const Section = ({
  sectionTitle,
  subTitle,
  paragraph1,
  paragraph2,
  sectionImage,
  sectionImage2,
  sectionName,
}) => {
  const flexRowReverse = "lg:flex-row-reverse"
  const flexRow = "lg:flex-row"
  return (
    <div className=" py-10 lg:py-20">
      <SectionHeader
        sectionTitle={sectionTitle}
        subTitle={subTitle}
      ></SectionHeader>

      <SectionBody
        sectionImage={sectionImage}
        sectionName={sectionName}
        paragraph1={paragraph1}
        paragraph2={paragraph2}
        flexRow = {flexRow}
      />
     
    </div>
  )
}

export default Section
