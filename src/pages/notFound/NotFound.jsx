import { Link } from 'react-router-dom';

import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <section className={styles.section}>
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
