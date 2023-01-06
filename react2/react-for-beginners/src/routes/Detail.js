import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieItem from '../components/MovieItem';

export default 
function Detail() {
    const { id } = useParams();
    const [ movie, setMovie ] = useState(null);

    const getData = async () => {
        const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
        const res = await fetch(url);
        const json = await res.json();
        setMovie(json.data.movie);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>Detail</h1>
            { 
                movie 
                ? <MovieItem 
                    id={movie.id}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                    coverImg={movie.medium_cover_image}
                /> 
                : 'Loading...'
            }
        </div>
    )
}