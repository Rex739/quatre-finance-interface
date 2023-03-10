import SectionIntro from "../sectionIntro";
import { roadmap } from "./data";
const Roadmap = () => {
  return (
    <div className=" w-100">
      <img src="images/roadmap/_roadmap.png" alt="roadmap"  className="mx-auto w-100"/>
    </div>
    
  );
};

export default Roadmap;


// import SectionIntro from "../sectionIntro";
// import { roadmap } from "./data";
// const Roadmap = () => {
//   return (
//     <main className="py-10 lg:py-28" id="roadmap">
//       <div className="text-center flex justify-center">
//         <SectionIntro
//           heading="Roadmap 1.0"
//           description="The initial list of goals and directions regarding the project."
//         />
//       </div>
//       <section className="flex pt-10 lg:pt-16 1xl:h-[1155px]">
//         <img
//           src="images/roadmap/roadmap.png"
//           alt="roadmap art "
//           className="hidden lg:block w-9/12"
//         />
//         <div className="lg:-ml-52 xl:-ml-52 md:w-10/12 xl:w-full">
//           {roadmap.map((data) => (
//             <section className="flex" key={data.id}>
//               <div className="flex flex-col items-center xl:mr-5">
//                 <h1 className={["text-[#25B15F] text-[21px]", data.id === 7 &&("-mr-3")].join(" ")}>
//                   {data.percentage}
//                 </h1>
//                 <img src={data.animation} alt={data.id === 7 ? "" : "animate down"} className="my-auto" />
//               </div>
//               <div className="ml-5">
//                 <h2 className="text-white text-[21px] mb-2">{data.heading}</h2>
//                 <p className="text-[#9AD1C5] mb-8">{data.paragraph}</p>
//                 {data.id === 7 && (
//                   <ol className="list-decimal list-inside text-[#9AD1C5]">
//                     <li className="mb-4">{data.list1}</li>
//                     <li className="mb-4">{data.list2}</li>
//                     <li className="mb-0">{data.list3}</li>
//                   </ol>
//                 )}
//               </div>
//             </section>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// };


// export default Roadmap;
