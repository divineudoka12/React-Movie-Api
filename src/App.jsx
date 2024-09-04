import React, { useEffect, useState } from 'react'
import Moviebox from './components/moviebox'

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=da112065e487c52791dd7a8e19982957";
  const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=da112065e487c52791dd7a8e19982957&query";



  useEffect(() => {
    setIsLoading(true)
    fetch(API_URL).then((res) => res.json())
      .then(data => {
        setMovies(data.results)
        setIsLoading(false)
      })
  }, [])

  console.log(movies)

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=da112065e487c52791dd7a8e19982957&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    }
    catch (e) {
      console.log(e);
    }
  }

  const changeHandler = (e) => {
    setQuery(e.target.value);
  }


  let content = null

  if (isLoading === false && movies.length > 0) {
    content =
      <div className="w-full bg-black lg:px-16 px-6 py-4">
        <div className=" m-auto grid lg:grid-cols-4 grid-cols-1 gap-4">
          {movies.map((movieReq) =>
            <Moviebox key={movieReq.id} {...movieReq} />)}
        </div>
      </div>
  }
  else if (isLoading === true && movies.length === 0) {
    content = <p>Loading...</p>
  }

  else {
    return
  }

  return (
    <>
          <nav className='w-full flex lg:flex-row flex-col bg-black justify-between items-center gap-6 lg:px-16 px-6 py-4 sticky top-0 z-50'>
            <div>
              <h1 className="text-white text-3xl font-semibold">Movies Info</h1>
            </div>

            <div className="flex justify-between gap-3">
              <form onSubmit={searchMovie}>
                <input className='border-none px-3 py-1 rounded-lg' type="text" placeholder="Enter a movie name" value={query} onChange={changeHandler} />
              </form>

              <button className="bg-red-600 text-white font-semibold rounded-lg px-3 py-1">Search</button>
            </div>

          </nav>
      {content}
    </>
  )
}

export default App