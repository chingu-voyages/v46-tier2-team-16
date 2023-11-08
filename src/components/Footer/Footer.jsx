import styles from "./Footer.module.css";
import { AppLogoComponent } from "../AppLogoComponent/index";
import { useGlobalContext } from '../../contexts/DarkModeContext';

const Footer = () => {
    const { isDarkTheme } = useGlobalContext();

    return (
        <footer className={`${styles.footer} ${isDarkTheme ? styles['dark-theme'] : ''}`}>
            <section className={styles['logo-section']}>
                <AppLogoComponent />
            </section>

            <section className={styles['copyright-section']}>
                <p className={isDarkTheme ? styles['dark-link'] : ''}>
                    Developed by{' '}
                    <a
                        className={isDarkTheme ? styles['dark-link'] : ''}
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/chingu-voyages/v46-tier2-team-16/tree/main"
                        title="External github repo link will open on a new tab"
                    >
                        v46-tier2-team-16
                    </a>
                </p>
                <span className={styles.text}>&copy; 2023</span>
            </section>

            <hr className={styles.divider}></hr>
        </footer>
    );
};

export default Footer;