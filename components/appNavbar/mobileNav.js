import TopBar from "./mobileTopbar";
import MobileNavList from './mobileNavList';

const MobileNav = ({handleClick, isClicked, toggleMode, lightMode}) => {
    return (
        <>
            <TopBar 
                handleClick= {handleClick}
                isClicked={isClicked}
                toggleMode={toggleMode}
                lightMode={lightMode}
            /> 
            <MobileNavList
                handleClick={handleClick}
                isClicked={isClicked}
                toggleMode={toggleMode}
                lightMode={lightMode}
            />
        </>   
    );
}
 
export default MobileNav;