
import React from 'react'

const RecipeCard = ({image, name, area, category}) => {
    return (
        <div className='card'>
            <img src={image} alt="" />
            <p>{name}</p>

            <div className='extra-infos'>
                <p className='area'>{area}</p>
                <p className='category'>{category}</p>
            </div>
        </div>

    )
}

export default RecipeCard;