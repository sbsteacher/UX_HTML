import { useState, useEffect } from "react"
import MovieItem from '../components/MovieItem';

export default
function Home() {
    const [ loading, setLoading ] = useState(true);
    const [ movies, setMovies ] = useState([]);

    async function getMovies() {
        const url = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`;        
        const res = await fetch(url);
        const json = await res.json();
        setMovies(json.data.movies);
        setLoading(false);
        /*
        fetch(url)
        .then(res => res.json())
        .then(json => {            
            setMovies(json.data.movies);
            setLoading(false);
        })
        */
    }
    useEffect(() => {
        getMovies();
    }, []);

    console.log(movies);

    return (
        <div>            
            <h1>MovieApp</h1>
            { 
                loading 
                ? <h3>Loading...</h3> 
                : (
                    movies.map(item => 
                        <MovieItem 
                            key={item.id} 
                            id={item.id}                          
                            coverImg={item.medium_cover_image}
                            title={item.title}
                            summary={item.summary}
                            genres={item.genres}
                         />                        
                    )
                )
            }
        </div>
    )
}