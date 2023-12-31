import { Link } from 'react-router-dom';

import { AppLogoComponent } from '../../components/AppLogoComponent';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <section className={styles.section}>
        <AppLogoComponent className={styles.logo} />
        <div className={styles.container}>
        <p className={styles.content} >This is not the page you are looking for!</p>
        <Link to="/" className={styles.button}>
            Go back Home
        </Link> 
        </div>
    </section>
    );
};

export default NotFound;
