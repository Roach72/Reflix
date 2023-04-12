import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Styles from '../styles/cardlist.module.css';
import PlayingCard from './PlayingCard';
export default function PlayingCardList() {
  const [playing, setPlaying] = useState([])
  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=e5ee1675f1e83089e9897a004b28dd1c&language=en-US&page=1')
    .then(res=>(
      setPlaying(res.data.results)
    ))
    .catch(err=>{console.log(err)})
  },[])
  return (
    <div className={Styles.main}>
      <div className='container-fluid'>
        <div className='row'>
            {playing.map((playing,index)=>{
              return <PlayingCard key={index} {...playing}/> 
            })}
          </div>
      </div>
    </div>
  )
}