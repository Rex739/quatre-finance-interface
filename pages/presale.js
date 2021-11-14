import WhitePaper from '../components/whitepaper';
import RoadMap from '../components/roadMap';
import PresaleInfo from '../components/presales/presaleInfo';
import PresaleTokenomics from '../components/presales/presaleTokenomics';
import Hero from '../components/presales/hero';
import HowToClaim from '../components/presales/howToClaim';

const Presales = ({lightMode }) => {
    return ( 
        <main>
            <Hero
                lightMode={lightMode}
            />
            <HowToClaim
                lightMode={lightMode}
            />
            <PresaleInfo
                lightMode={lightMode}
            />
            <PresaleTokenomics 
                lightMode={lightMode}
            />
            <RoadMap 
                lightMode={lightMode}
            />
            <WhitePaper 
                lightMode={lightMode}
            />
        </main>
    );
}
 
export default Presales;