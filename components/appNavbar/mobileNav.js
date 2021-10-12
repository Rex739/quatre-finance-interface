import TopBar from "./mobileTopbar";
import MobileNavList from './mobileNavList';

const MobileNav = ({handleClick, isClicked, toggleMode, lightMode, handleAlert}) => {
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
            />
        </>   
    );
}
 
export default MobileNav;