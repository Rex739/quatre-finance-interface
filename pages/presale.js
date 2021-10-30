import WhitePaper from '../components/whitepaper'
import RoadMap from '../components/roadMap'
import PresaleInfo from '../components/presaleInfo'

const Presales = ({lightMode }) => {
    return ( 
        <main>
            <PresaleInfo
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