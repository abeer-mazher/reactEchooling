import React from 'react'
import styles from "./Carousel.module.css"

export default function Carousel() {
  return (
    <div className={styles.Carousel}>
            <div className={`container py-5` }>
        <div className="row gap-4">
            <div className="col-lg-1 d-lg-flex d-none align-items-center">
                <div className={styles.arrow}>
                    <span> <i className="ri-arrow-left-s-line"></i> </span>
                </div>
            </div>
            <div className="col-lg-6 d-flex flex-column gap-4 text-white">
                <div className="bg-danger text-white px-4 w-50">Great Quality Social life</div>
                <div className='w-70 fs-1 fw-bold'>Discover The world of possible University</div>
                <div><button className='btn btn-outline-danger text-white border-black'>Admission</button></div>
            </div>
            <div className="col-lg-3 text-white d-lg-flex d-none align-items-center gap-2">
                <div className={styles.videoBtn}><i className="ri-arrow-right-s-fill"></i></div>
                <div className='fs-5 fw-bold'>Watch video intro</div>
            </div>
            <div className="col-lg-1  d-lg-flex d-none align-items-center">
                <div className={styles.arrow}>
                <i className="ri-arrow-right-s-line"></i>
                </div>
            </div>
        </div>
    </div>
    </div>

  )
}
