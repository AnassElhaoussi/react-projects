
import React, { useEffect, useState } from "react";


function RecipeElement(){

  const [element, setElement] = useState({})  

  const fetchElData = async () => {
      const response = await fetch('https://themealdb.com/api/json/v1/1/categories.php')
      const data = await response.json()
      console.log(data.categories);
      
  }

  useEffect(() => {
      fetchElData()
      
  }, [])
  
  return (

    <div className='container'>
      <h1>That's the item</h1>
      
    </div>
  )
}

export default RecipeElement;