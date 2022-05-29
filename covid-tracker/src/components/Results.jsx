
import React, {useEffect} from 'react'
import { useResultsContext } from '../Contexts/DataResultContext'
import { useLocation } from 'react-router-dom'

import { Loading } from './Loading'


export const Results = () => {

  useEffect(() => {
    if(location.pathname == "/continentData"){
      fetchResultsData("/continentData")
    } else if (location.pathname == "/countriesData"){
      fetchResultsData("/countriesData")
    }
  }, [])

  const [fetchResultsData, isLoading, setIsLoading, results, setResults] = useResultsContext()
  const location = useLocation()

  if(isLoading){
    return <Loading />
  }

  switch (location.pathname) {

      case '/totalData':
        return 'total'

      case '/continentData':
        return (
          <div className=''>
            {results?.map((result, key) => (
              <div key={key} className=''>
                <h1>{result.continent}</h1>
              </div>
            ))}
          </div>
        )

      case '/countriesData':
          return (
            <div className=''>
              {results?.map((result, key) => (
                <div className='' key={key}>
                  <div className=''>
                    <h1>{result.country}</h1>
                    <div className=''>
                      <p>{result.totalCases}</p>
                      <p>{result.totalDeaths}</p>
                      <p>{result.totalRecovered}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
      
      
  
    default:
      return 'ERROR !'
  }
}
