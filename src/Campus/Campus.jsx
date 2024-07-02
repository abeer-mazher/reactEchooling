import React from 'react'
import styles from './Campus.module.css'
import Heading from '../Heading/Heading'
import CampusLeft from '../CampusLeft/CampusLeft'

function Campus() {
  return (
    <>
    <div className={`${styles.campus} container-xxl px-5 py-5`}>
        <div className="row row-gap-5">
            <Heading text="Campus Life"/>
            <div className="col-7 bg-white" >
                <div className="container px-5 py-5 ">
                    <div className="row d-flex">
                        <CampusLeft/>
                        <hr />
                        <CampusLeft/>
                        <hr />
                        <CampusLeft/>
                    </div>
                </div>
            </div>
            <div className="col-5">
                <img src="/campus.png" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Campus