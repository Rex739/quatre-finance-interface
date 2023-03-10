import SectionIntro from "../sectionIntro";
import { members } from "./data";
const Team = () => {
  const team = members.map((member) => {
    return (
      <div
        key={member.id}
        className={[
          "mb-6 text-center wow fadeInLeft ease-in duration-300 w-11/12 xs:w-[301px] lg:w-11/12 1xl:w-[301px] mx-auto lg:mx-0 flex flex-col justify-center ",
          "hover:scale-[1.05] hover:ease-in hover:duration-300",
        ].join(" ")}
        data-wow-duration="0.2s"
        data-wow-delay={member.animate + "s"}
      >
        <img src={member.image} alt={member.name} className="rounded-t-2xl" />
        <div className="bg-[#0E4236] h-28 w flex flex-col justify-start pt-4 px-2 rounded-b-2xl">
          <h1 className="text-[rgb(154,209,197)] text-[11px]">
            {member.title}
          </h1>
          <h2 className="text-[#25B15F] text-[15px] font-bold mb-2 font-gothic-bold">
            {member.name}
          </h2>
          <p className="text-white text-[10px] italic">{member.quote}</p>
        </div>
      </div>
    );
  });
  return (
    <section className="py-10 lg:py-28" id="team">
      <SectionIntro
        heading={"Team"}
        description={"The ones who made this possible"}
      />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 1xl:grid-cols-4 duration-500 hover:duration-500 hover:px-2 mx-0">
        {team}
      </section>
    </section>
  );
};

export default Team;
