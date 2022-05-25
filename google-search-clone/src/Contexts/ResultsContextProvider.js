import React, {createContext, useContext, useState} from "react";

const ResultContext = createContext()

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultsContextProvider = ({children}) => {

    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const getResults =  async (type) => {
        setIsLoading(true)

        const response = await fetch(`${baseUrl}${type}`, {
            method: "GET",
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '9e98b7c2d8msh2f9294af6eecbf2p1d8af2jsn639273707720'
            }
        })

        const data = await response.json()
        
        setResults(data)
        setIsLoading(false)
    }

    return (
        <ResultContext.Provider value={[getResults, results , searchTerm , setSearchTerm , isLoading]}>
            {children}
        </ResultContext.Provider>
    )
    
}

export const useResultsContext = () => useContext(ResultContext)