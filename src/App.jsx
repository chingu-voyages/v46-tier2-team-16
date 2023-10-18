// import { Example } from "./example";
// import { Recipe } from "./features/recipe";
import { useEffect, useState } from "react";
// import { Example } from "./example";
import { Search } from "./search";
import { recipeList } from './data/Recipes.js'
import { Header } from "./components/Header/index"
import { Footer } from "./components/Footer/index"

import './App.css'

const App = () => {


  // (Celine) temporary useEffect to handle development and testing with fake data: Recipes.js
  // empty array to have it having an effect only on first loading
  //---------------------------------

  useEffect(() => {
    const retriveRecipes = recipeList.results
    setFilteredRecipes(retriveRecipes)
  }, [])
  //---------------------------------


  // (Celine) Filter recipes depending of input user
  //---------------------------------
  const [filteredRecipes, setFilteredRecipes] = useState([])
  console.log('filteredRecipes', filteredRecipes)

  const handleSearch = async (newSearch) => {
    const filtered = recipeList.results.filter(recipe => {
      console.log('recipe.name', recipe.name)
      return recipe.name.toLowerCase().includes(newSearch.toLowerCase())
    })
    setFilteredRecipes(filtered)
  }
  //---------------------------------


  // (Celine) Filter recipes depending of button click quickCooking
  //---------------------------------

  const handleQuickCooking = async () => {
    console.log('clicked')
    const filteredByCookingTime = recipeList.results.filter(recipe => {
      console.log('recipe.cook_time_minutes', recipe.total_time_tier.tier)

      if (recipe.total_time_tier.tier === 'under_15_minutes') {
        return recipe
      }
    })
    setFilteredRecipes(filteredByCookingTime)
  }
  //---------------------------------


  return (
    <>
      <Header />
      <main>
        {/* <Example /> */}
        <Search handleSearch={handleSearch} handleQuickCooking={handleQuickCooking} />

        {/* Section below will need to be replace with the Card element */}
        <div>
          {filteredRecipes.map((recipe, i) => (
            <div key={i}>
              <p>{recipe.name}</p>
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
