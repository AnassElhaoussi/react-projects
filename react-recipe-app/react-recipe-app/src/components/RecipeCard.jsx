
import React from 'react'

const RecipeCard = ({image, name, area, category}) => {
    return (
        <div className='card'>
            <img src={image} alt="" />
            <p className='meal-name'>{name}</p>

            <div className='extra-infos'>
                <p className='area'>{area}</p>

            </div>
        </div>

    )
}

export default RecipeCard;