import React, {createContext, useState} from "react";
import { useContext } from "react";

export const ResultsContext = createContext()

export const ResultsProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState([])

    const fetchResultsData = async (type) => {
        setIsLoading(true)

        const response = await fetch(`https://covid-19-coronavirus-statistics2.p.rapidapi.com/${type}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'covid-19-coronavirus-statistics2.p.rapidapi.com',
                'X-RapidAPI-Key': '9e98b7c2d8msh2f9294af6eecbf2p1d8af2jsn639273707720'
            }
        })

        const data = await response.json()

        setResults(data.result)
        console.log(data.result);
        
        
        setIsLoading(false)

    }

    return (
            <ResultsContext.Provider value={[fetchResultsData ,isLoading, setIsLoading, results, setResults]}>
                {children}
            </ResultsContext.Provider> 
        )
    }

export const useResultsContext = () => useContext(ResultsContext)
    