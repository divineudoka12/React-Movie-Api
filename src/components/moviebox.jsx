import React, {useState} from 'react'
const API_IMG="http://image.tmdb.org/t/p/w500/"
import "./moviebox.css"

const moviebox= ({original_title, poster_path, vote_average, release_date, overview})=> {
    
    const[view, setView] = useState(false)

    const viewOpen = () => setView(true);
    const viewClose = () => setView(false);

    return (
        <div className="card container">
           <div className="card-body">
               <img src={API_IMG+poster_path} className="card-img" />
                <div className="card-btn">
                   <div className="btn0"><button className="btn-open"  onClick={viewOpen}>View More</button></div>
                {view && <div className="overlay">
                     <div className="open" onSubmit={view} onClick={viewClose}>
                        <img src={API_IMG+poster_path} className="card-inner" />
                        <div className="card-text">
                        <h3>{original_title}</h3>
                        <h4>ImDb: {vote_average}</h4>
                        <h5>Release Date: {release_date}</h5>
                        <br /><br />
                        <h6>Overview</h6>
                        <p className="overview">{overview}</p>
                        <footer>
                        <button onClick={viewClose} className="btn-close">Close</button>
                        </footer>
                        </div>
                    </div>
                    </div>}
               </div>
           </div>
        </div>
    )
}

export default moviebox
