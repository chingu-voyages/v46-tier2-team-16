import styles from "./Header.module.css";
import { AppLogoComponent } from "../AppLogoComponent/index";

const Header = () => {
    return (
        <header>
            <AppLogoComponent />
            <section>
                Menu
            </section>
            <hr className={styles.divider}></hr>
        </header>
    );
};

export default Header;
