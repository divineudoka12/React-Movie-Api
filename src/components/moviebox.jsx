import React, {useState} from 'react'
const API_IMG="http://image.tmdb.org/t/p/w500/"

const moviebox= ({original_title, poster_path, vote_average, release_date, overview})=> {
    
    const[view, setView] = useState(false)

    const viewOpen = () => setView(true);
    const viewClose = () => setView(false);

    return (
        <div>
           <div>
               <div className='flex flex-col justify-between gap-4'>
                <img src={API_IMG+poster_path} />
                <button className="bg-red-600 text-white font-semibold rounded-lg px-3 py-1"  onClick={viewOpen}>View More</button>
               </div>
                <div className="">
                {view && <div id="movie-modal" className="fixed top-6 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center ">
                     <div className="bg-white rounded-lg p-6 max-w-md flex flex-col" onSubmit={view} onClick={viewClose}>
                        <div className="text-black text-center">
                            <div>
                                <h3 className='text-2xl font-bold mb-4'>{original_title}</h3>
                                <h4>ImDb: {vote_average}</h4>
                                <h5>Release Date: {release_date}</h5>
                                <h6 className='text-xl font-bold mb-4'>Overview</h6>
                                <p className="text-[16px]">{overview}</p>
                            </div>
                            <div className='pt-3'>
                                <button onClick={viewClose} className="bg-red-600 text-white font-semibold rounded-lg px-3 py-1">Close</button>
                            </div>
                        </div>
                    </div>
                    </div>}
               </div>
           </div>
        </div>
    )
}

export default moviebox
