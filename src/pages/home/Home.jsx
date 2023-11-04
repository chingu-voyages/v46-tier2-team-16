import { useEffect, useMemo, useState } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from '../../components/Search';
import { Recipe } from '../../features/recipe';
// import { fetchRecipes } from '../../features/recipe/recipeSlice';
import { useGetAllRecipesQuery } from "../../features/recipe/recipeSlice";

const Home = () => {
    const { data: allRecipesData, error, isError, isLoading } = useGetAllRecipesQuery();

    if (isLoading) return <p>App is loading...</p>
    console.log("allRecipesData: ", allRecipesData);
    const recipe = allRecipesData;
    // const recipe = useSelector((state) => state.recipe);
    // const recipeResults = recipe.recipes.results;
    const recipeResults = recipe.results;
    console.log("RECIPE: ", recipeResults);

    // const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(useGetAllRecipesQuery());
    // }, [dispatch]);

    // Filter recipes by name
    // const [filteredByName, setFilteredByName] = useState([]);
    // const [newSearch, setNewSearch] = useState('');

    // const handleSearch = (newSearch) => {
    //   setNewSearch(newSearch);
    //   const filteredByName = recipeResults.filter((recipe) =>
    //     recipe.name.toLowerCase().includes(newSearch.toLowerCase())
    //   );
    //   setFilteredByName(filteredByName);
    // };

    // Filter recipes by quick cooking time
    // const [filteredByCookingTime, setFilteredByCookingTime] = useState([]);

    // const handleQuickCooking = () => {
    //   const filteredByCookingTime = recipeResults.filter(
    //     (recipe) => recipe.total_time_tier
    //   );
    //   // const filteredByCookingTime = recipeResults.filter(
    //   //   (recipe) => recipe.total_time_tier.tier === 'under_15_minutes'
    //   // );
    //   setFilteredByCookingTime(filteredByCookingTime);
    // };

    // Calculate recipes to display based on filters
    // const recipesToDisplay = useMemo(() => {
    //   if (newSearch === '' && filteredByName.length === 0 && filteredByCookingTime.length === 0) {
    //     return recipeResults;
    //   } else if (filteredByName.length !== 0) {
    //     return filteredByName;
    //   } else if (newSearch !== '' && filteredByName.length === 0) {
    //     return [];
    //   } else if (filteredByCookingTime.length !== 0) {
    //     return filteredByCookingTime;
    //   }
    // }, [recipeResults, filteredByName, filteredByCookingTime]);

    return (
        <>
            {/* <Search handleSearch={handleSearch} handleQuickCooking={handleQuickCooking} />
      <Recipe recipe={recipeResults} recipesToDisplay={recipesToDisplay} /> */}
            <Recipe recipe={recipe} />
        </>
    );
};

export default Home;
