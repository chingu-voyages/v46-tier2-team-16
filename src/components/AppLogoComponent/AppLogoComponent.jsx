import { Link } from 'react-router-dom';

import styles from './AppLogoComponent.module.css';
import AppLogo from '../../assets/logo/appLogo.svg';

const AppLogoComponent = () => {
    return (
        <>
            <Link to="/" className={styles.logo} >
                <img src={AppLogo} alt="Zest App Logo" /> Zest
            </Link>
        </>
    );
};

export default AppLogoComponent;