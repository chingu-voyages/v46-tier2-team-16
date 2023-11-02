import styles from './AppLogoComponent.module.css';
import AppLogo from '../../assets/logo/appLogo.svg';
import { AnchorLink } from '../UI/AnchorLink';

const AppLogoComponent = () => {
    return (
        <>
            {/* TODO: Update app logo link (href), to navigate to home/landing page  */}
            {/* <a href="">
                <img src={AppLogo} alt="Zest App Logo" />
            </a> */}
            <AnchorLink text="Zest" className={styles.logo}>
                <img src={AppLogo} alt="Zest App Logo" />
            </AnchorLink>
        </>
    );
};

export default AppLogoComponent;
