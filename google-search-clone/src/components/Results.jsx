
import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Loading } from './Loading'

import { useResultsContext } from '../Contexts/ResultsContextProvider'

export const Results = () => {
  
  const [getResults, results, searchTerm, setSearchTerm, isLoading] = useResultsContext()
  const location = useLocation()

  useEffect(() => {
    getResults(`${location.pathname}/q=Elon musk&num=40`)
  }, [])
  

  if(isLoading) return <Loading />
  
  
  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap gap-5 justify-center'>
            {results?.results?.map(({title, link}, key) => (
              <div key={key} className='md:w-2/5 w-full'>
                <a href={link} target='_blank' rel='noreferrer'>
                  <p className='text-sm'>
                    {link.length > 30 ? link.substring(0,30) : link}
                  </p>
                  <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                    {title}
                  </p>
                </a>
              </div>
            ))}
        </div>
      )

    case '/videos':
      return "VIDEOS"
    
    case '/image':
      return (
        
        <div className='flex flex-wrap item-center gap-8 text-center justify-center'>
          {results?.image_results?.map(({image, link}) => (
            <div className='rounded pb-4 px-4'>
                <a href={link.href} className='flex flex-col gap-2 hover:scale-105 transition-transform'>
                  <img src={image.src} alt="" loading='lazy' className=' h-40 rounded-t' />
                  <p className='flex flex-wrap text-sm break-words text-blue-800 dark:text-blue-400'>{link.title} </p>
                </a>
            </div>

          ))}
        </div>
      )

    case '/news':
      return (
        <div className=''>
          

        </div>
      )
      
  
   default:
     return "ERROR!"
  }
}
