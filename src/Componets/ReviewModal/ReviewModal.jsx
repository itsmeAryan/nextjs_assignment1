import React from 'react'
import Image from 'next/image'
import  "./Review.css"
import users from "../user.json"

const ReviewModal = ({user}) => {
  return <>
  <div className="ReviewContainer">
    <h3 className="title">What users say</h3>
    <div className="container">
    {users.map((user,index)=>(
      <div key={index} className="card">
        <div className="user_profiles">
        <div className="userImages">
        <Image
      src={user.reviewer_img}
      width={60}
      height={60}
      alt="user images"
    />
        </div>
        <div className="user_details">
          <h3 className="username">{user.reviewer_name}</h3>
        </div>
      </div>
      <div className="comment_user">
        {user.text}
      </div>
        </div>
    ))}
        
    </div>
  </div>
  </>
}

export default ReviewModal
