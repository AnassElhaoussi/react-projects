
import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Loading } from './Loading'

import { useResultsContext } from '../Contexts/ResultsContextProvider'

export const Results = () => {
  
  const {resutls, isLoading, getResults, searchTerm} = useResultsContext()
  const location = useLocation()
  
  if(isLoading){
    return <Loading />
  }

  return (
    <h1>Results</h1>

  )
}
