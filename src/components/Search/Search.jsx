import { useState } from 'react';
import styles from './Search.module.css';

// input search will gather the input dynamically, without need of validation
// this componenent will need a callback as props to return `filteredRecipes` & `handleQuickCooking`.

const Search = (props) => {
    const { handleSearch, handleQuickCooking } = props;
    const [newSearch, setNewSearch] = useState('');

    //  console.log('newSearch', newSearch)

    const handleInput = (e) => {
        e.preventDefault();

        const input = e.target.value;
        setNewSearch(input);
        handleSearch(input);
    };

    return (
        <div className={styles.container}>
            <input id="input" type="text" placeholder="Search a recipe..." value={newSearch} onChange={(e) => handleInput(e)} />
            <button onClick={handleQuickCooking}>Quick cooking</button>
        </div>
    );
};

export default Search;
