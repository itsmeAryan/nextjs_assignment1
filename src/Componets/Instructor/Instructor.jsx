import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Instructor = () => {
  return <>
  <div className="about_instructor">
  <h2 className="title">About Instructor</h2>
  <div className="wrapper_">
    <div className="left_">
    <div className="circular-image">
    <Image
      src={"/guruJiImage.jpg"}
      width={100}
      height={100}
      alt="Guruji Image"
    />
  </div>
  <div className="instructor_name">nityanand ji</div>
    </div>
    <div className="right_">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, earum! Maiores soluta nobis praesentium nesciunt ratione nemo repellendus, quas assumenda, a quaerat cumque odio ea eius, ut placeat facilis sit.</div>
  </div>
  <div className="social_mediaLinks">
    <Link href={"/"}>
      <Facebook className="facebook" style={{color:"#42A4E8"}}/>
       <div className="st">
       Facebook
       </div>
    </Link>
    <Link href={"/"}>
      <Twitter className="twitter"/>
       <div className="st">
       Twitter
       </div>
    </Link>
    <Link href={"/"}>
      <YouTube style={{color:"#EC3643"}} className="youtube"/>
       <div className="st">
       Youtube
       </div>
    </Link>
    <Link href={"/"}>
      <Instagram style={{color:"#F1819A"}} className="instagram"/>
       <div className="st">
       Instagram
       </div>
    </Link>
  </div>
</div>
  </>
}

export default Instructor