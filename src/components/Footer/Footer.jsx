import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <p className={styles.text}>
                Developed by {" "}
                <a target="_blank" rel="noreferrer" href="https://github.com/chingu-voyages/v46-tier2-team-16/tree/main" title="External github repo link will open on a new tab">v46-tier2-team-16</a> &copy; 2023
            </p>
        </footer>
    );
};

export default Footer;
