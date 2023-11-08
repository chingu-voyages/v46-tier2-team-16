import styles from "./ToggleTheme.module.css";
import { useGlobalContext } from '../../contexts/DarkModeContext';
import { Sun } from '../icons/sun';
import { Moon } from '../icons/moon';

const ToggleTheme = () => {
    const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

    return (
        <section className={styles['toggle-container']}>
            <button className={styles['dark-toggle']} onClick={toggleDarkTheme}>
                {isDarkTheme ? <Moon className={styles['toggle-icon']} /> : <Sun className={styles['toggle-icon']} />}
            </button>
        </section>
    );
};

export default ToggleTheme;