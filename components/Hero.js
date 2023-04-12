import React from 'react';
import Styles from '../styles/hero.module.css';
export default function Hero() {
    return (
        <div className={Styles.container}>
            <div className={Styles.hover}>
                <div className={Styles.box}>
                    <div className='contant'>
                        <h1 className={Styles.h1}>Reflix</h1>
                        <h4 className={Styles.h4}><span>Welcome</span> to <span>Reflix</span>, you can watch all movies and series.</h4>
                        <h6 className={Styles.h6}>This is a test broadcast to watch movie details, not to download.</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
