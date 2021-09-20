import TopBar from "./mobileTopbar";
import MobileNavList from './mobileNavList';

const MobileNav = ({handleClick, isClicked}) => {
    return (
        <>
            <TopBar 
                handleClick= {handleClick}
                isClicked={isClicked}
            /> 
            <MobileNavList
                handleClick={handleClick}
                isClicked={isClicked}
            />
        </>   
    );
}
 
export default MobileNav;