import WhitePaper from '../components/whitepaper'
import RoadMap from '../components/roadMap'

const Presales = ({lightMode }) => {
    return ( 
        <main>
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