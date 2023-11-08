import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from '../../components/Search';
import { Recipe } from '../../components/Recipe';
import { fetchRecipes } from '../../features/recipe/recipeSlice';

const Home = () => {
    const recipe = useSelector((state) => state.recipe);
    const recipeResults = recipe.recipes.results;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    const [filteredByName, setFilteredByName] = useState([]);
    const [newSearch, setNewSearch] = useState('');

    const handleSearch = (newSearch) => {
        setNewSearch(newSearch);
        const filteredByName = recipeResults.filter((recipe) => recipe.name.toLowerCase().includes(newSearch.toLowerCase()));
        setFilteredByName(filteredByName);
    };

    const [filteredByCookingTime, setFilteredByCookingTime] = useState([]);

    const handleQuickCooking = () => {
        const filteredByCookingTime = recipeResults.filter((recipe) => recipe.total_time_tier.tier === 'under_15_minutes');
        setFilteredByCookingTime(filteredByCookingTime);
    };

    const recipesToDisplay = useMemo(() => {
        if (newSearch === '' && filteredByName.length === 0 && filteredByCookingTime.length === 0) {
            return recipeResults;
        } else if (filteredByName.length !== 0) {
            return filteredByName;
        } else if (newSearch !== '' && filteredByName.length === 0) {
            return [];
        } else if (filteredByCookingTime.length !== 0) {
            return filteredByCookingTime;
        }
    }, [newSearch, recipeResults, filteredByName, filteredByCookingTime]);

    return (
        <>
            <Search handleSearch={handleSearch} handleQuickCooking={handleQuickCooking} />
            {recipeResults ? <Recipe recipe={recipeResults} recipesToDisplay={recipesToDisplay} /> : <></>}
        </>
    );
};

export default Home;