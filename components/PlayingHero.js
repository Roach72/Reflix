import React from 'react'
import Styles from '../styles/playing.module.css'
export default function PlayingHero() {
    return (
        <div className=''>
            <div className={Styles.container}>
                <div className={Styles.hover}>
                <div className={Styles.titel}>
                    <h1 className={Styles.h}>Playing<span> Reflix</span></h1>
                </div>
                </div>
            </div>
        </div>
    )
}