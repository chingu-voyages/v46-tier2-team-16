// this component will be in the details component and should received the param of the Url 
//as props in order to fetch the info from the api

import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedRecipe } from '../../features/recipe/relatedRecipesSlice';

import styles from "./RelatedRecipes.module.css";


const RelatedRecipes = ({recipeId}) => {
console.log('id related recipes compo', recipeId)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchRelatedRecipe(recipeId));
    }, [dispatch, recipeId])

    const relatedRecipes = useSelector((state) => state.relatedRecipes);
    const listToDisplay = relatedRecipes.relatedRecipes;

    if(!listToDisplay) {
        return <></>
    }

    return (
        <section>
                    <h3>Related Recipes</h3>
                    <ul>
                        {[...listToDisplay].map((oneRecipe) => (
                            <li key={oneRecipe.id}>
                                    <img src={oneRecipe.thumbnail_url} alt={oneRecipe.slug} width={250} height={216}/>
                                    <p>{oneRecipe.name}</p>
                            </li>
                        ))}
                    </ul>
    </section>
    
    )
}

export default RelatedRecipes;