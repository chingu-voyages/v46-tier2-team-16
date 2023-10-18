import styles from "./Header.module.css";
import AppLogo from "../../assets/logo/appLogo.svg";

const Header = () => {
    return (
        <header>
            {/* TODO: Update app logo link (href), to navigate to home/landing page  */}
            <a href="">
                <img src={AppLogo} alt="Zest App Logo" />
            </a>
            <h1 className={styles.text}>
                Zest Recipe App
            </h1>
            <hr className={styles.line}></hr>
        </header>
    );
};

export default Header;
