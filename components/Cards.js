import React from 'react';
import Styles from '../styles/cards.module.css';
import Card from 'react-bootstrap/Card';
const gerposterUrl = (posterpath)=>{
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`}
export default function Cards({poster_path,overview,title}) {
    return (
        <div className='mb-4 col-md-3 col-6'>
            <Card className={Styles.card}>
                <Card.Img className={Styles.img} variant="top" src={gerposterUrl(poster_path)} />
                <Card.Body className={Styles.body}>
                    <Card.Title className={Styles.title}>{title}</Card.Title>
                        <div className={Styles.contant}>
                            <div className={Styles.o}>
                                <h3>Overview</h3>
                                <p>{overview}</p>
                            </div>
                        </div>
                </Card.Body>
            </Card>
        </div>
    )
}