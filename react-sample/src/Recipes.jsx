
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Recipes = () => {

    useEffect(() => {
        fetchData()
        
    }, [])

    const [recipe, setRecipe] = useState([])

    const fetchData = async () => {
        const response = await fetch('https://themealdb.com/api/json/v1/1/categories.php')
        const data = await response.json()
        setRecipe(data.categories)
        console.log(data.categories);
    }

    return (
        <div className="recipes">
            {recipe.map(item => (
                <Link to='/recipes/item'>{item.strCategory}</Link>
            ))}

        </div>
        
        
    )
}


export default Recipes;
