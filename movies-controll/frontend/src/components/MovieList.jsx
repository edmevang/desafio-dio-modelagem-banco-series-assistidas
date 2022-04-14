import { useEffect, useState } from 'react';

const MovieList = () => {

    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        async function getMovies() {
            const axios = require('axios');
            const url = "http://localhost:5000/movies";
            let res = await axios.get(url);
        
            let data = res.data;
            return data
        }
        getMovies().then(response => {
            console.log("Response ", response.recordset)
            setMovies(response.recordset)
        })        
    }, [])
    return(
            <table className="striped">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Episódios</th>
                    <th>Episódio atual</th>
                    <th>Visto por último</th>
                </tr>
                </thead>

                <tbody>
                {movies.map(movie => {
                    let type = movie.type === 0 ? 'Série' : 'Filme';
                    let formatDate = (movie.last_view).split('T', 1)

                    return(
                        <tr key={movie.id}>
                            <td>{movie.name}</td>
                            <td>{type}</td>
                            <td>{movie.total_ep}</td>
                            <td>{movie.atual_ep}</td>
                            <td>{formatDate}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
    )
}

export default MovieList;
