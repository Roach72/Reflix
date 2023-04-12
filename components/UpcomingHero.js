import React from 'react'
import Styles from '../styles/Upcoming.module.css'
export default function TopHero() {
    return (
        <div className=''>
            <div className={Styles.container}>
                <div className={Styles.hover}>
                <div className={Styles.titel}>
                    <h1 className={Styles.h}>UpComing<span> Reflix</span></h1>
                </div>
                </div>
            </div>
        </div>
    )
}