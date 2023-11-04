import { Link } from 'react-router-dom';

import { AppLogoComponent } from '../../components/AppLogoComponent';
import styles from './NotFound.module.css';
import { useGlobalContext } from '../../contexts/DarkModeContext';

const NotFound = () => {
    // const { isDarkTheme } = useGlobalContext();
    return (
        <section className={styles.section}>
            <AppLogoComponent className={styles.logo} />
            <p>This is not the page you are looking for!</p>
            <Link to="/" >
                Go back Home
            </Link>
            {/* <p className={`${styles.content} ${isDarkTheme ? styles['dark-content'] : ''}`}>This is not the page you are looking for!</p>
            <Link to="/" className={`${styles.button} ${isDarkTheme ? styles['dark-button'] : ''}`}>
                Go back Home
            </Link> */}
        </section>
    );
};

export default NotFound;
