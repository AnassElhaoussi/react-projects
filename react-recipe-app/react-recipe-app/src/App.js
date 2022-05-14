
import './styles/index.css'
import React, { useEffect, useState } from 'react'
import RecipeCard from './components/RecipeCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const API_URL = 'https://themealdb.com/api/json/v1/1/'

function App() {

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState([])


  const fetchData = async (recipeName) => {
    const response = await fetch(`${API_URL}search.php?s=${recipeName}`)
    const data = await response.json()

    console.log(data.meals);
    setRecipes(data.meals)

  }

  useEffect(() => {
    fetchData('A')
  },[search])

  return (
    <div className="App">
      <div className='main-part'>
        <h1 className='title'>recipee</h1>
        <div className='input-field'>
          <input 
          type="text" 
          value={search}
          onChange={e => setSearch(e.target.value)
          }
          
          placeholder='Search for a recipe..'
          />
          <div onClick={() => fetchData(search)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          
        </div>
      </div>
      <div className='recipes-seciton'>
        
         {
         
            recipes?.length  > 0
            ? (
              <div className='recipe-card'>
              {recipes.map(recipe => (
                <RecipeCard image={recipe.strMealThumb} name={recipe.strMeal} area={recipe.strArea}  />
              ))}
            </div>
            
            ) : (
              <h2 className='info'>No results found</h2>

            )

         
         
         
         }
        
      </div>
    </div>
  );
}

export default App;
