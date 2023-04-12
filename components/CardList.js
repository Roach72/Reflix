import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from 'axios';
import Styles from '../styles/cardlist.module.css';
export default function CardList() {
    const [movie, setMovie] = useState([])
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=e5ee1675f1e83089e9897a004b28dd1c')
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
                            return <Cards key={index} {...movie}/> 
                        })}
                    </div>
            </div>
        </div>
    )
}
