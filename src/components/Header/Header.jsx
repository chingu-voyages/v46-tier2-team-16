import styles from './Header.module.css';
import { AppLogoComponent } from '../AppLogoComponent/index';
import { ToggleTheme } from '../ToggleTheme';
import { useGlobalContext } from '../../contexts/DarkModeContext';

const Header = () => {
    const { isDarkTheme } = useGlobalContext();

    return (
        <header className={`${styles.header} ${isDarkTheme ? styles['dark-theme'] : styles['light-theme']}`}>
            <AppLogoComponent />
            <section>
                <ToggleTheme />
            </section>
            <hr className={styles.divider}></hr>
        </header>
    );
};

export default Header;