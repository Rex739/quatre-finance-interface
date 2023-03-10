import Accordion from "./accordion";
import SectionIntro from "../sectionIntro";

const Faq = () => {
  return (
    <section className="py-10 lg:py-28" id="faq">
      <SectionIntro
        heading="Frequently Asked Questions"
        description="For any additional questions and curiosities, please don’t hesitate to join our discord server"
      />
      <div className="lg:flex lg:justify-evenly">
        <Accordion />
        <img src="images/faq/faq.png" alt="art"  className="hidden lg:block h-full w-5/12 xl:h-[431px] xl:w-[500px]"/>
      </div>
    </section>
  );
};

export default Faq;
