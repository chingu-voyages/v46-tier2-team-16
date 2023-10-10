import { Recipe } from "./features/recipe";
import { useEffect, useMemo, useState } from "react";
import { Search } from "./search";
import { recipeList } from './data/Recipes.js'
import { Header } from "./components/Header/index"
import { Footer } from "./components/Footer/index"
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecipes } from './features/recipe/recipeSlice'


import './App.css';

const App = () => {
  const recipe = useSelector(state => state.recipe)
  const recipeResults = recipe.recipes.results
  console.log("Recipe results: ", recipeResults)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchRecipes())
  }, [])

  
  // (Celine) Filter recipes depending of input user
  //---------------------------------
  const [filteredByName, setfilteredByName] = useState([])
  const [newSearch, setNewSearch] = useState('')

  const handleSearch = async (newSearch) => {
    console.log('recipeResults', recipeResults)

    setNewSearch(newSearch)
    const filteredByName = recipeResults.filter(recipe => {
      console.log('recipe.name', recipe.name)
      return recipe.name.toLowerCase().includes(newSearch.toLowerCase())
    })
    setfilteredByName(filteredByName)
  }
  //---------------------------------


  // (Celine) Filter recipes depending of button click quickCooking
  //---------------------------------
  const [filteredByCookingTime, setFilteredByCookingTime] = useState([])

  const handleQuickCooking = async () => {
    console.log('clicked')
    const filteredByCookingTime = recipeResults.filter(recipe => {
      console.log('recipe.cook_time_minutes', recipe.total_time_tier.tier)

      if (recipe.total_time_tier.tier === 'under_15_minutes') {
        return recipe
      }
    })
    setFilteredByCookingTime(filteredByCookingTime)
  }
  //---------------------------------


  // Keep listening to changes in state filteredByName & filteredByCookingTime and adjust displayed cards accordingly
  //---------------------------------
const recipesToDisplay = useMemo(() => {

  console.log('filteredByName', filteredByName)

    if (newSearch === '' && filteredByName.length === 0 && filteredByCookingTime.length === 0) {
      return recipeResults
    } else if (filteredByName.length != 0) {
      return filteredByName
    } else if (newSearch != '' && filteredByName.length === 0) {
      return 
    } else if (filteredByCookingTime.length != 0 ){
      return filteredByCookingTime
    }
  }, [recipeResults, filteredByName, filteredByCookingTime])
  //---------------------------------


  return (
    <>
      <Header />
      <main>
        <Search handleSearch={handleSearch} handleQuickCooking={handleQuickCooking} />

        <Recipe recipe={recipe}  recipesToDisplay={recipesToDisplay} />
        
      </main>
      <Footer />
    </>
  )
}


export default App;

