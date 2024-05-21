import React,{useEffect, useState} from 'react'
import "./App.css"
import Moviebox from './components/moviebox'

function App() {
  const[movies, setMovies] = useState([]);
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=da112065e487c52791dd7a8e19982957";
  const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=da112065e487c52791dd7a8e19982957&query";

  

  useEffect(()=> {
    setIsLoading(true)
    fetch(API_URL).then((res)=>res.json())
    .then(data=>{
      setMovies(data.results)
      setIsLoading(false)
    })
  }, [])

  console.log(movies)

  const searchMovie = async(e)=>{
    e.preventDefault();
    try{
      const url =`https://api.themoviedb.org/3/search/movie?api_key=da112065e487c52791dd7a8e19982957&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }


  let content = null

  if (isLoading === false && movies.length > 0){
    content = 
    <div className="container">
      <div className="grid">
        {movies.map((movieReq)=>
        <Moviebox key={movieReq.id} {...movieReq}/>)}
      </div>
    </div>
  }
  else if (isLoading === true && movies.length === 0){
    content = <p>Loading...</p>
  }
  
  else{
    return
  }

  return (
     <>
    <header>
    <div className="contianer">

    <nav>
        <div>
        <h1 className="brand">Movies Info</h1>
        </div>

       <form onSubmit={searchMovie} id="margintop">
         <input type="text" placeholder="Search" value={query} onChange={changeHandler} />
       <button className="btn-nav">Search</button>
       </form>

     </nav>

     </div>
    </header>
      {content}
     </>
   )
}

export default App