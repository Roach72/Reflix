import React, { useEffect, useState } from 'react';
import DiscoverCard from './DiscoverCard';
import axios from 'axios';
import Styles from '../styles/cardlist.module.css';
export default function DiscoverCardList() {
    const [movie, setMovie] = useState([])
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=e5ee1675f1e83089e9897a004b28dd1c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
        .then(res=>(
            setMovie(res.data.results)
        ))
        .catch(err=>{console.log(err)})
    },[])
    return (
        <div className={Styles.main}>
            <div className='container-fluid'>
                <div className='row'>
                        {movie.map((movie,index)=>{
                            return <DiscoverCard key={index} {...movie}/> 
                        })}
                    </div>
            </div>
        </div>
    )
}