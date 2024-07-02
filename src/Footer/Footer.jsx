import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <div className="container-xxl bg-dark py-5 px-5">
        <div className="row">
            <div className="col-lg-3 text-white">
               <div className="divimg">
                <img src="/logo2.png" alt="" />
                </div> 
                <p className='text-white'>There are course and event custom
                   post types so you can easily create and
                   manage course, events</p>
                   <p><i className="ri-phone-line"></i> (+92)12345678</p>
                   <p> <i className="ri-mail-line"></i> info.@gmail.com</p>
            </div>
            <div className={ ` ${styles.Footerlinks} col-lg-3`}>
                <h3 className='text-white px-0'>
                    About Us
                </h3>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">courses</a></li>
                    <li><a href="">Event</a></li>
                    <li><a href="">Career</a></li>
                    <li><a href="">Become A Teacher</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className={ ` ${styles.Footerlinks} col-lg-3`}>
                <h3 className='text-white'>
                    Useful Link
                </h3>
                <ul>
                    <li><a href="">Browse Library</a></li>
                    <li><a href="">Library</a></li>
                    <li><a href="">Partners</a></li>
                    <li><a href="">New & Blog</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Tutorials</a></li>
                </ul>
            </div>
            <div className="col-lg-3 text-white">
                <h3>NewSletter</h3>
                <p>Get the latest Echooling news
                  delivered to you inbox</p>
                  <div className={styles.inputdiv}>
                    <div className={styles.inp}>
                       <input type="text" placeholder='Enter Your Email'/>
                    </div>
                    <div className={styles.inpbtn}>
                    <i class="ri-arrow-right-line"></i>
                    </div>
                  </div>

            </div>
        </div>
    </div>
    </>
  )
}
