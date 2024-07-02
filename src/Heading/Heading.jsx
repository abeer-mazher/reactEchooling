import React from 'react'
import styles from './Heading.module.css'

function Heading({text}) {
  return (
    <div className='contianer-xxl mt-5 pX-5'>
        <div className="row">
            <div className={`${styles.heading} col-12 text-center`}>
                <p>{text}</p>
                <img src="/strips.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Heading