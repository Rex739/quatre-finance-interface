import TopBar from "./mobileTopbar";
import MobileNavList from './mobileNavList';

const MobileNav = ({handleClick, isClicked, toggleMode, lightMode, handleAlert, sound}) => {
    return (
        <>
            <TopBar 
                handleClick= {handleClick}
                isClicked={isClicked}
                toggleMode={toggleMode}
                lightMode={lightMode}
                handleAlert={handleAlert}
            /> 
            <MobileNavList
                handleClick={handleClick}
                isClicked={isClicked}
                toggleMode={toggleMode}
                lightMode={lightMode}
                handleAlert={handleAlert}
                sound={sound}
            />
        </>   
    );
}
 
export default MobileNav;