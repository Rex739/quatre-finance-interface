import React from "react";

const SectionHeader = ({sectionTitle, subTitle}) => {
  return (
     <header>
        <h2 className="font-nova-square text-[32px] lg:text-5xl xl:text-6xl mb-2">
          {sectionTitle}
        </h2>
        <p className="w-9/12 lg:mx-auto">
          {subTitle}
        </p>
      </header>
    );
}
 
export default SectionHeader