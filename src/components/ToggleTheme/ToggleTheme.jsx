import { useGlobalContext } from '../../contexts/DarkModeContext';
import { Sun } from '../icons/sun';
import { Moon } from '../icons/moon';
import './ToggleTheme.css';

const ToggleTheme = () => {
    // const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

    return (
        <section className="toggle-container">
            <button className="dark-toggle">
                Toggle Theme
            </button>
            {/* <button className="dark-toggle" onClick={toggleDarkTheme}>
                {isDarkTheme ? <Moon className="toggle-icon" /> : <Sun className="toggle-icon" />}
            </button> */}
        </section>
    );
};

export default ToggleTheme;
