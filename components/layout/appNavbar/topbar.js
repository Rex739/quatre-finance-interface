import Link from 'next/link';


const TopBar = ({ lightMode, toggleMode, sound }) => {
    const switchMode = () => {
        toggleMode();
        sound.play();
    }
    return ( 
        <header>
            
        </header>
    );
}
 
export default TopBar;