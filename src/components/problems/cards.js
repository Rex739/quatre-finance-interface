import React from "react"
import { problemsData } from "./data"

const Cards = () => {
  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-[49px]">
      {problemsData.map(
        (data) =>
          data.id > 0 && (
            <div
              className={[
                "flex flex-col bg-gray1 justify-center items-center text-center",
                "rounded-[20px] w-full xs:w-10/12 h-[334px] sm:w-[407px] md:w-11/12 2xl:w-full mx-auto",
                "px-[8px] lg:px-[12px]",
              ].join(" ")}
              key={data.id}
            >
              <img src={data.image} alt={data.problem} className="mb-[12px]" />
              <h3 className="mb-[19px]">{data.problem}</h3>
              <p>{data.body}</p>
            </div>
          )
      )}
    </section>
  )
}

export default Cards
