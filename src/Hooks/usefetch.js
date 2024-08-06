/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"

const usefetch = (category) => {
    const [fetchData, setFetchData] = useState(null)

    useEffect(() => {
        getNews()
    }, [category])


    const NEWS_API = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    const getNews = async () => {
        const data = await fetch(NEWS_API);
        const json = await data.json();
        setFetchData(json?.articles);
    }
    return fetchData

}
export default usefetch 