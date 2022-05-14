
import './styles/index.css'
import React, { useEffect, useState } from 'react'
import RecipeCard from './components/RecipeCard'

const API_URL = 'https://themealdb.com/api/json/v1/1/'

function App() {

  const [recipes, setRecipes] = useState([])


  const fetchData = async (recipeName) => {
    const response = await fetch(`${API_URL}search.php?s=${recipeName}`)
    const data = await response.json()

    console.log(data.meals);
    setRecipes(data.meals)

  }

  useEffect(() => {
    fetchData('A')
  }, [])

  return (
    <div className="App">
      <div className='main-part'>
        <h1 className='title'>recipee</h1>
        <input 
        type="text" 
        placeholder='Search for a recipe..'
        />
      </div>
      <div className='recipes-seciton'>
        <div className='recipe-card'>
         {recipes.map(recipe => (
           <RecipeCard image={recipe.strMealThumb} name={recipe.strMeal} area={recipe.strArea} category={recipe.strCategory} />
         ))}
        </div>
      </div>
    </div>
  );
}

export default App;
