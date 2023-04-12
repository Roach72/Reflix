import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Styles from '../styles/cardlist.module.css';
import PopularCard from './PopularCard';
export default function PopularCardList() {
  const [popular, setPopular] = useState([])
  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=e5ee1675f1e83089e9897a004b28dd1c&language=en-US&page=1')
    .then(res=>(
      setPopular(res.data.results)
    ))
    .catch(err=>{console.log(err)})
  },[])
  return (
    <div className={Styles.main}>
      <div className='container-fluid'>
        <div className='row'>
            {popular.map((popular,index)=>{
              return <PopularCard key={index} {...popular}/> 
            })}
          </div>
      </div>
    </div>
  )
}