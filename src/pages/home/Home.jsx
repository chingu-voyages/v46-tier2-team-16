import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from '../../components/Search';
import { Recipe } from '../../components/Recipe';
import { Loader } from '../../components/Loader';
import { fetchRecipes } from '../../features/slice/recipeSlice';

const Home = () => {
    const dispatch = useDispatch();

    const recipe = useSelector((state) => state.recipe);
    const recipeResults = recipe.recipes.results;

    const [newSearch, setNewSearch] = useState('');
    // will need to map through each recipe and then map through  components  and compare the search with ingredient.name
    // we should not search for exact term but part of the term
    const [filteredByIngredient, setFilteredByIngredient] = useState([]);

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    const handleSearch = (newSearch) => {
        setNewSearch(newSearch);
        searchByIngredient(newSearch);
    };

    const searchByIngredient = (newSearch) => {
        if (newSearch === '') {
            setFilteredByIngredient([]);
        } else {
            // split search in array
            const searchIngredients = newSearch.split(/[\s,; ]+/);

            const filteredRecipes = recipeResults.filter((recipe) => {
                // extract all ingredient names from current recipe
                const recipeIngredients = recipe.sections[0].components.map((component) => component.ingredient.name);

                // true if ALL search ingredients are found in recipe
                return searchIngredients.every((searchIngredient) => {
                    // for each search ingredient, true if at least ONE ingredient is found
                    return recipeIngredients.some((recipeIngredient) => {
                        return recipeIngredient.toLowerCase().includes(searchIngredient.toLowerCase());
                    });
                });
            });

            setFilteredByIngredient(filteredRecipes);
        }
    };

    const recipesToDisplay = useMemo(() => {
        if (newSearch === '' && filteredByIngredient.length === 0) {
            return recipeResults || [];
        } else if (newSearch !== '' && filteredByIngredient.length !== 0) {
            return filteredByIngredient;
        } else if (newSearch !== '' && filteredByIngredient.length === 0) {
            return [];
        }
    }, [recipeResults, newSearch, filteredByIngredient]);

    // const accessIngredients = selectedRecipe.sections[0].components
    // console.log('accessIngredients', accessIngredients)

    // const recipesToDisplay = useMemo(() => {
    //     if (newSearch === '' && filteredByName.length === 0) {
    //         return recipeResults;
    //     } else if (filteredByName.length !== 0) {
    //         return filteredByName;
    //     } else if (newSearch !== '' && filteredByName.length === 0) {
    //         return [];
    //     }
    // }, [newSearch, recipeResults, filteredByName]);

    return (
        <>
            <Search handleSearch={handleSearch} />
            {recipe.loading && <Loader />}
            {recipeResults ? <Recipe recipe={recipeResults} recipesToDisplay={recipesToDisplay} /> : <></>}
        </>
    );
};

export default Home;
