import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Styles from '../styles/cardlist.module.css';
import UpcomingCard from './UpcomingCard';
export default function UpcomingCardList() {
  const [upcoming, setUpcoming] = useState([])
  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=e5ee1675f1e83089e9897a004b28dd1c&language=en-US&page=1')
    .then(res=>(
      setUpcoming(res.data.results)
    ))
    .catch(err=>{console.log(err)})
  },[])
  return (
    <div className={Styles.main}>
      <div className='container-fluid'>
        <div className='row'>
            {upcoming.map((upcoming,index)=>{
              return <UpcomingCard key={index} {...upcoming}/> 
            })}
          </div>
      </div>
    </div>
  )
}