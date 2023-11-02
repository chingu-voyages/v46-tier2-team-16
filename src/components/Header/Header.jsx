import styles from './Header.module.css';
import { AppLogoComponent } from '../AppLogoComponent/index';
import { ToggleTheme } from '../ToggleTheme';
const Header = () => {
    return (
        <header>
            <AppLogoComponent />
            <section>
                {/* <p> Menu</p> */}
                <ToggleTheme />
            </section>
            <hr className={styles.divider}></hr>
        </header>
    );
};

export default Header;
