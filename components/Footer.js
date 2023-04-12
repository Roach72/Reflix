import React from 'react'
import Styles from '../styles/footer.module.css'
export default function Footer() {
    return (
        <div className={Styles.footer}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className={Styles.contant}>
                            <img className={Styles.img} src='rl.png'/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className={Styles.contant}>
                            <h6 className={Styles.h}><span>Reflix</span> Developed by: Roshdy Said</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
