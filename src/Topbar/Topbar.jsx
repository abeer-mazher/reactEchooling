import React from 'react'
import styles from "./topbar.module.css"

export default function Topbar() {
  return (
    <div className={`${styles.topBar} contaoner-xxl py-1 px-5`}>
        <div className="row">
            <div className="col-lg-7">
                <ul>
                    <li><a href="#"><i className="ri-phone-line"></i> (+1) 9877644</a></li>
                    <li><a href="#"><i className="ri-mail-line"></i> inforeact@gmail.com</a></li>
                </ul>
            </div>
            <div className={`col-lg-5 d-flex justify-content-end `}>
                <ul>
                    <li><a href=""><i className="ri-facebook-fill"></i></a></li>
                    <li><a href="#"><i className="ri-twitter-fill"></i></a></li>
                    <li><a href="#"><i className="ri-linkedin-fill"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
