import styles from "./Footer.module.css";
import { AppLogoComponent } from "../AppLogoComponent/index";
import { AnchorLink } from "../UI/AnchorLink";
import { useGetTagsListQuery } from "../../features/recipe/recipeSlice";
import { useGlobalContext } from '../../contexts/DarkModeContext';

const Footer = () => {
    const { isDarkTheme } = useGlobalContext();

    const { data: getTagsListData, error, isError, isLoading } = useGetTagsListQuery();
    if (isLoading) return <p>App is loading...</p>
    console.log("getTagsListData: ", getTagsListData);
    console.log("getTagsListData results: ", getTagsListData.results);

    return (
        // <footer>
        //     <section className={styles['logo-section']}>
        //         <AppLogoComponent />
        //     </section>

        //     <section>
        //         <section className={styles['links-first-section']}>
        //             <AnchorLink text="Back to the top" />
        //             <AnchorLink text="My collection" />
        //             <AnchorLink text="Accessibility" />
        //             <AnchorLink text="Sitemap" />
        //         </section>
        //         <section className={styles['horizontal-divider-section']}>
        //             <hr className={styles['horizontal-divider']}></hr>
        //         </section>
        //         <section className={styles['links-second-section']}>
        //             <section className={styles['links-second-section--first-list']}>
        //                 <AnchorLink text="Fish" />
        //                 <AnchorLink text="Beef" />
        //                 <AnchorLink text="Chicken" />
        //                 <AnchorLink text="Meat" />
        //             </section>
        //             <section className={styles['vertical-divider__first--show']}>
        //                 <hr className={styles['vertical-divider']}></hr>
        //             </section>
        //             <section className={styles['links-second-section--second-list']}>
        //                 <AnchorLink text="Sides" />
        //                 <AnchorLink text="Vegetarian" />
        //                 <AnchorLink text="Vegan" />
        //                 <AnchorLink text="Desserts" />
        //             </section>
        //             <section className={styles['vertical-divider__second--hide']}>
        //                 <hr className={styles['vertical-divider__second']}></hr>
        //             </section>
        //             <section className={styles['links-second-section--third-list']}>
        //                 <AnchorLink text="Sides" />
        //                 <AnchorLink text="Vegetarian" />
        //                 <AnchorLink text="Vegan" />
        //                 <AnchorLink text="Desserts" />
        //             </section>
        //         </section>
        //     </section>

        //     <section className={styles['copyright-section']}>
        //         <p>
        //             Developed by{' '}
        //             <a
        //                 target="_blank"
        //                 rel="noreferrer"
        //                 href="https://github.com/chingu-voyages/v46-tier2-team-16/tree/main"
        //                 title="External github repo link will open on a new tab"
        //             >
        //                 v46-tier2-team-16
        //             </a>
        //         </p>
        //         <span className={styles.text}>&copy; 2023</span>
        //     </section>

        //     <hr className={styles.divider}></hr>
        // </footer>
        <footer className={`${styles.footer} ${isDarkTheme ? styles['dark-footer'] : ''}`}>
            <section className={styles['logo-section']}>
                <AppLogoComponent />
            </section>

            <section className={`${styles['links-section']} ${isDarkTheme ? styles['dark-links-section'] : ''}`}>
                <section className={styles['links-first-section']}>
                    <AnchorLink text="Back to the top" className={isDarkTheme ? styles['dark-link'] : ''} />
                    <AnchorLink text="My collection" className={isDarkTheme ? styles['dark-link'] : ''} />
                    <AnchorLink text="Accessibility" className={isDarkTheme ? styles['dark-link'] : ''} />
                    <AnchorLink text="Sitemap" className={isDarkTheme ? styles['dark-link'] : ''} />
                </section>
                <section className={styles['horizontal-divider-section']}>
                    <hr className={styles['horizontal-divider']}></hr>
                </section>
                <section className={styles['links-second-section']}>
                    <section className={styles['links-second-section--first-list']}>
                        <AnchorLink text="Fish" className={isDarkTheme ? styles['dark-link'] : ''} />
                        <AnchorLink text="Beef" className={isDarkTheme ? styles['dark-link'] : ''} />
                        <AnchorLink text="Chicken" className={isDarkTheme ? styles['dark-link'] : ''} />
                        <AnchorLink text="Meat" className={isDarkTheme ? styles['dark-link'] : ''} />
                    </section>
                    <section className={styles['vertical-divider__first--show']}>
                        <hr className={styles['vertical-divider']}></hr>
                    </section>
                    <section className={styles['links-second-section--second-list']}>
                        <AnchorLink text="Sides" className={isDarkTheme ? styles['dark-link'] : ''} />
                        <AnchorLink text="Vegetarian" className={isDarkTheme ? styles['dark-link'] : ''} />
                        <AnchorLink text="Vegan" className={isDarkTheme ? styles['dark-link'] : ''} />
                        <AnchorLink text="Desserts" className={isDarkTheme ? styles['dark-link'] : ''} />
                    </section>
                    <section className={styles['vertical-divider__second--hide']}>
                        <hr className={styles['vertical-divider__second']}></hr>
                    </section>
                    <section className={styles['links-second-section--third-list']}>
                        <AnchorLink text="Sides" className={isDarkTheme ? styles['dark-link'] : ''} />
                        <AnchorLink text="Vegetarian" className={isDarkTheme ? styles['dark-link'] : ''} />
                        <AnchorLink text="Vegan" className={isDarkTheme ? styles['dark-link'] : ''} />
                        <AnchorLink text="Desserts" className={isDarkTheme ? styles['dark-link'] : ''} />
                    </section>
                </section>
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
