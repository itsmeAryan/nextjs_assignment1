import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import users from "../user.json"
import Image from 'next/image';
import "./Slider.css"
const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return <>
      <Slider {...settings}>
        {users.map((user,index) => (
            <div key={index} className="parent_container">
            <div className="user_profiledetails">
                <div className="userIMg">
                    <Image src={user.reviewer_img}
                    width={75}
                    height={75}
                    objectFit='cover'
                    />
                </div>
                <div className="user_name_De">{user.reviewer_name}</div>
            </div>
            <div className="comment_">
                {user.text}
            </div>
            </div>
        ))}
      </Slider>
  
  </>
}

export default Sliders