import { useState } from 'react';
import styles from './Search.module.css';
import Reset from '../../assets/images/iconsReset.png';
import Loupe from '../../assets/images/iconsLoupe.png';
import { useGlobalContext } from '../../contexts/DarkModeContext';

const Search = (props) => {
    const { handleSearch } = props;
    const [newSearch, setNewSearch] = useState('');

    const { isDarkTheme } = useGlobalContext();

    const handleClick = (e) => {
        e.preventDefault();
        handleSearch(newSearch);
    };

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') handleSearch(newSearch);
    };

    const handleChange = (e) => {
        setNewSearch(e.target.value);
    };

    const handleClickReset = () => {
        setNewSearch('');
        handleSearch('');
    };

    return (
        <div className={styles.container}>
            <h2 className={`${styles.text} ${isDarkTheme ? styles['dark-text'] : ''}`}>Recipes</h2>
            <span className={styles.search}>
                <div className={styles.containerInput}>
                    <label htmlFor="search" className={styles.visuallyHidden}>
                        Search
                    </label>
                    <input
                        id="input"
                        name="search"
                        type="text"
                        placeholder="e.g. avocado, tomatoes"
                        value={newSearch}
                        onChange={handleChange}
                        onKeyUp={handleKeyUp}
                    />
                    <button className={styles.buttonLoupe} onClick={handleClick}>
                        <img className={styles.imgLoupe} src={Loupe} alt="confirm search" />
                    </button>
                </div>
                <button className={styles.buttonReset} onClick={handleClickReset}>
                    <img className={styles.imgReset} src={Reset} alt="reset search bar" />
                </button>
            </span>
        </div>
    );
};

export default Search;
