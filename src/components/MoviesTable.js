import React, { useEffect } from 'react'

function MoviesTable(props) {
    //https://react-backend101.herokuapp.com/movies

    let {content, setContent, isLoading, filteredContent} = props;

    function deleteMovie(movieIdTBD){
        let restOfTheMovies = content.movies.filter(function(movie){
            return movie._id != movieIdTBD;
        }).slice();

        setContent({movies : restOfTheMovies})
    }

  return (
    <div>
        {isLoading ? <div>Loading...</div> : 

        <table className="table-auto">
            <thead>
                <tr>
                    <th className="px-2">#</th>
                    <th className="px-2">Title</th>
                    <th className="px-2">Genre</th>
                    <th className="px-2">Stock</th>
                    <th className="px-2">Rate</th>
                </tr>
            </thead>
            <tbody>
                {filteredContent.map(function(movie, idx){
                    return(
                        <tr key={idx}>
                            <td className="px-2 text-center" >{idx + 1}</td>
                            <td className="px-2 text-center" >{movie.title}</td>
                            <td className="px-4 text-center" >{movie.genre.name}</td>
                            <td className="px-2 text-center" >{movie.numberInStock}</td>
                            <td className="px-2 text-center" >{movie.dailyRentalRate}</td>
                            <td>
                                <button 
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={function(){
                                        deleteMovie(movie._id)
                                    }}
                                >
                                    DELETE 
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
        
        }
    </div>
  )
}

export default MoviesTable