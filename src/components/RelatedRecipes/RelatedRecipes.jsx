// this component will be in the details component and should received the param of the Url 
//as props in order to fetch the info from the api

import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from "./RelatedRecipes.module.css";

// import { useGetListSimilaritiesQuery } from "../../features/recipe/recipeSlice";


const RelatedRecipes = ({ id }) => {
    // const { data: getListSimilaritiesData, error, isError, isLoading } = useGetListSimilaritiesQuery();
    // console.log("getListSimilaritiesData: ", getListSimilaritiesData);

    const [listToDisplay, setlistToDisplay] = useState([])

    const TASTY_RAPID_API_URL_SIMILARITIES = import.meta.env.VITE_TASTY_RAPID_API_URL_SIMILARITIES;
    const TASTY_RAPID_API_KEY = import.meta.env.VITE_TASTY_RAPID_API_KEY;
    const TASTY_RAPID_API_HOST = import.meta.env.VITE_TASTY_RAPID_API_HOST;

    const options = {
        method: 'GET',
        url: TASTY_RAPID_API_URL_SIMILARITIES,
        params: { recipe_id: id },
        headers: {
            'X-RapidAPI-Key': TASTY_RAPID_API_KEY,
            'X-RapidAPI-Host': TASTY_RAPID_API_HOST
        }
    };

    const getRelatedRecipes = async () => {
        try {
            const response = await axios.request(options);
            const list = response.data.results
            setlistToDisplay(list)
            console.log(response.data);
            return

        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        getRelatedRecipes()
    }, [])


    return (
        <section>
            <h3>Related Recipes</h3>
            <ul>
                {[...listToDisplay].map((oneRecipe) => (
                    <li key={oneRecipe.id}>
                        <img src={oneRecipe.thumbnail_url} alt={oneRecipe.slug} width={250} height={216} />
                        <p>{oneRecipe.name}</p>
                    </li>
                ))}
            </ul>
        </section>

    )
}

export default RelatedRecipes;