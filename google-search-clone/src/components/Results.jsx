
import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Loading } from './Loading'

import { useResultsContext } from '../Contexts/ResultsContextProvider'

export const Results = () => {
  
  const [getResults, results, searchTerm, setSearchTerm, isLoading] = useResultsContext()
  const location = useLocation()

  useEffect(() => {
    getResults('/search/q=Elon musk&num=40')
  }, [])
  
  if(isLoading) return <Loading />
  
  
  switch (location.pathname) {
    case '/':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
            {results.map(({title, description}, key) => (
              <h1>{title}</h1>
            ))}
        </div>
      )

    case '/videos':
      return "VIDEOS"
    
    case '/images':
      return "IMAGES"

    case '/news':
      return "NEWS"
      
  
   default:
     return "ERROR!"
  }
}
