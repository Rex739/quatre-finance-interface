import WhitePaper from '../components/whitepaper';
import RoadMap from '../components/roadMap';
import PresaleInfo from '../components/presales/presaleInfo';
import PresaleTokenomics from '../components/presales/presaleTokenomics';

const Presales = ({lightMode }) => {
    return ( 
        <main>
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