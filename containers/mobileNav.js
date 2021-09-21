import TopBar from "../components/mobileTopbar";
import MobileNavList from '../components/mobileNavList';

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