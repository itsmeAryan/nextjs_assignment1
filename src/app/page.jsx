"use client"
import { Check,QuestionAnswer, VideoCall,  } from "@mui/icons-material"
import { useState } from "react";
import ReviewModal from "@/Componets/ReviewModal/ReviewModal";
import Slider from "../Componets/Slider/Slider"
import Instructor from "@/Componets/Instructor/Instructor";
const Page = () => {
  const [tab, settab] = useState(0)
 
  return <>
  {/* background */}

  <div className="background" > {/* Parent container */}

  <div className="banner_wrapper">
    <div className="details_">
      <div className="banner_username">NITYANAND CHARAN DAS</div>
      <div className="h2 title">
        Learn key life lessions from the Gita:
        Mind Control and conflict resolution
      </div>
    </div>
  </div>
</div>
{/* content */}
<div className="container">
<div className="left">
  <div className="tabs-container">
   {
    ["About","Instructor","Reviews"].map((data,index)=>(
      <div key={index} onClick={()=>{
        settab(index)
      }} className={`tab ${tab===index?"add":""}`}>{data}</div>
    ))
   }
  </div>
  {
    tab==0&&<div className="data-container">
    <div className="about-course">
      <h2 className="course-title">
        About the Course
      </h2>
      <div className="course-content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam fugit, eius, eveniet perferendis eaque suscipit sunt architecto soluta iste aliquid autem illo inventore molestias fugiat iusto accusamus, adipisci vero. Enim minus qui exercitationem eius reprehenderit totam, tempora officiis necessitatibus mollitia odio neque sint aliquid cumque, quos doloribus ducimus iusto commodi quaerat beatae modi corrupti. Officiis neque nisi voluptates assumenda accusantium.
      </div>
      <div className="course-content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsa quod enim, modi eaque deserunt soluta nihil, perspiciatis voluptate, culpa temporibus velit commodi sequi accusantium nulla. Vel dolorum quis nam adipisci eum aut corrupti atque iure, autem ratione. Nihil, fugiat.
      </div>
      <div className="course-content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsa quod enim, modi eaque deserunt soluta nihil
      </div>
    </div>
    <div className="course-expect">
  <h2 className="course-expect-title">
    What to Expect from the Course
  </h2>
  <div className="options">
    <div className="option">
      <Check className="check" />
      <div className="option-content">Learn to manage your relationships</div>
    </div>
    <div className="option">
      <Check className="check" />
      <div className="option-content">Better communication</div>
    </div>
    <div className="option">
      <Check className="check" />
      <div className="option-content">Time management</div>
    </div>
    <div className="option">
      <Check className="check" />
      <div className="option-content">Forgiveness</div>
    </div>
  </div>
</div>
<div className="key_topicsCovered">
  <h2 className="title">
    Keys topics covered
  </h2>
  <p className="content">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus aspernatur alias a placeat consequatur quos voluptas rem aperiam et ducimus, odio ab nostrum ipsum, recusandae, dolor harum! Iusto eveniet soluta qui inventore in pariatur magnam quo ratione quos blanditiis, tempora ipsum expedita quasi. Aperiam impedit, alias minima a nam laudantium quis ea fuga in quidem quasi doloremque reiciendis eligendi pariatur cumque ipsum unde! Sint nobis cumque ut. Laborum, expedita omnis?
  </p>
  <div className="options">
    <div className="option">
    <Check className="box"/>
    <div className="content">
      
      <div className="text"><span className="highlightext">10 written and audio sessions</span>guide you in decoding the language of numbers so that you can easily receive their signs and messages</div>
    </div>
    </div>
    <div className="option">
    <Check className="box"/>
    <div className="content">
   
      <div className="text"><span className="highlightext">10 written and audio sessions</span>guide you in decoding the language of numbers so that you can easily receive their signs and messages</div>
    </div>
    </div>
    <div className="option">
    <Check className="box"/>
    <div className="content">
   
      <div className="text"><span className="highlightext">10 written and audio sessions</span>guide you in decoding the language of numbers so that you can easily receive their signs and messages</div>
    </div>
    </div>
    <div className="option">
    <Check className="box"/>
    <div className="content">
   
      <div className="text"><span className="highlightext">10 written and audio sessions</span>guide you in decoding the language of numbers so that you can easily receive their signs and messages</div>
    </div>
    </div>
  </div>
</div>
<Instructor/>
{/*  */}
  </div>
  }
  {
    tab==1&&<Instructor/>
  }
  {
    tab==2&&<ReviewModal/>
  }
</div>

 <div className="right">
  <div className="card-wrapper">
    <div className="course-fee">Course Fees</div>
    <div className="course-price">₹5,000</div>
    <div className="included-in-course">
      <h2 className="title">Whats included</h2>
      <div className="options">
        <div className="option">
          <VideoCall className="video" />
          <p className="text">5 on-demand videos</p>
        </div>
        <div className="option">
          <VideoCall className="video" />
          <p className="text">2 livestream sessions</p>
        </div>
        <div className="option">
          <QuestionAnswer className="video" />
          <p className="text">Live Q&N sessions with Nityanand Charan Das</p>
        </div>
        <div className="option">
          <QuestionAnswer className="video" />
          <p className="text">An active Whatsapp community</p>
        </div>
      </div>
    </div>
    <button className="register_now">Register today</button>
  </div>
</div>

</div>

<div className="slider_container">
<Slider/>
</div>
  
  </>
}

export default Page