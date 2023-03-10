const SectionIntro = ({ heading, description }) => {
  return (
    <section className="w-10/12 lg:w-full">
      <h1
        className="text-[33px] text-white wow fadeInUp font-gothic-bold"
        data-wow-duration="0.3s"
        data-wow-delay="0.5s"
      >
        {heading}
      </h1>
      <p
        className="text-[#9AD1C5] text-sm mb-[30px] wow fadeInUp"
        data-wow-duration="0.3s"
        data-wow-delay="0.6s"
      >
        {description}
      </p>
    </section>
  );
};

export default SectionIntro;
