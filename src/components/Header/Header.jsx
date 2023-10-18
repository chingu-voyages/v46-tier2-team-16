import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.container}>
            {/* TODO: Add Zest App logo */}
            <a href=""><img src="" alt="Zest App Logo" /></a>
            <p className={styles.text}>
                Zest Recipe App
            </p>
        </header>
    );
};

export default Header;
