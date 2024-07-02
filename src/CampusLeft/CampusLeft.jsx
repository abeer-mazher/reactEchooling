import React from 'react'
import styles from './CampusLeft.module.css'

function CampusLeft() {
  return (
        <>

            <div className="col-1">
                <img src="/pencil.svg" alt="" />
            </div>
            <div className="col-8">
                <h5>Do More,Stree Less</h5>
                <p>Why I say old chap that is spiffing he legged
                it in my flat easy peasy.</p>
            </div>
            <div className="col-2">
                <div className={styles.arrowLeft}>
                <i className="ri-arrow-right-line"></i>
                </div>
            </div>
        </>
  )
}

export default CampusLeft