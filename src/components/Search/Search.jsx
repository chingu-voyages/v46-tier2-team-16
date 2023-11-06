import { useState } from 'react';
import styles from './Search.module.css';
import Reset from "../../assets/images/iconsReset.png";
import { useGlobalContext } from '../../contexts/DarkModeContext';


// input search will gather the input dynamically, without need of validation
// this componenent will need a callback as props to return `filteredRecipes` & `handleQuickCooking`.

const Search = (props) => {
    const { handleSearch, handleQuickCooking } = props;
    const [newSearch, setNewSearch] = useState('');

    const { isDarkTheme } = useGlobalContext();

    //  console.log('newSearch', newSearch)

    const handleInput = (e) => {
        e.preventDefault();

        const input = e.target.value;
        setNewSearch(input);
        handleSearch(input);
    };

const handleClick = () => {
    setNewSearch('')
}

    return (
        <div className={styles.container}>                     
            <h2 className={`${styles.text} ${isDarkTheme ? styles['dark-text'] : ''}`}>Recipes</h2>
    
            {/* <input id="input" type="text" placeholder="Search a recipe..." value={newSearch} onChange={(e) => handleInput(e)} /> */}
            <span className={styles.search}>   <input id="input" type="text" placeholder="Discover recipes" value={newSearch} onChange={(e) => handleInput(e)} />
            <button onClick={handleClick}>  <img className={styles.img} src={Reset} alt="reset search bar" /></button></span>
         

            {/* <button onClick={handleQuickCooking}>Quick cooking</button> */}
        </div>
    );
};

export default Search;
