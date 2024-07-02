import React from 'react'
import styles from "./Card.module.css"
import Heading from '../Heading/Heading'

export default function Card() {
  const cardObj=[
    {
      src:"/card1.png",
      title:"Let's Talk Science"
    },
    {
      src:"/card2.png",
      title:"Innovative Courses"
    },
    {
      src:"/card3.png",
      title:"Cloud Storage"
    },
    {
      src:"/card4.png",
      title:"Online Education"
    },
  ]
  return (
    <>
    <div className="container mt-5">
      <div className="row row-gap-5">
      <Heading text="Academics"/>
        {
          cardObj.map((e,i)=>{
            return(
              <div className={`${styles.cardBox} col-lg-3`} key={i}>
                <div className={styles.imgDiv}>
                  <img src={e.src} alt=""  className='w-100'/>
                  <div className={styles.overlay}></div>
                </div>
                <div className={styles.cardDetails}>
                  <p>{e.title}</p>
                  <p>Learn More</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
    </>
  )
}
