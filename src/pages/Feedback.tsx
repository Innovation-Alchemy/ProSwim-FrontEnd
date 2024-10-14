// import { useEffect, useState } from "react";
// import { shopBackground, shopItem1Pink, shopItem1Blue } from "@/assets";
// import { Link } from "react-router-dom";
import HeroTextBg from "@/components/shared/HeroTextBg";

import ".././CSS/Feedback.css";

export default function Feedback() {
  return <div className="FeedbackPage pt-[84px] pb-20 text-[18px]">
    <HeroTextBg title="Your Feedback"></HeroTextBg>
    <div className="FormSection">
      <h3 className="title">Feedback Form:</h3>
      <form className="Form">
        {/* Start of Box1 */}
        <div className="Box1 flex gap-[40px] items-center justify-between flex-wrap">

          <div className="inputContainer">
            <h2>
              <label htmlFor="name">Name:</label>
            </h2>
            <input type="text" id="name" name="name" placeholder="Enter your name" />
          </div>
          <div className="inputContainer">
            <h2>
              <label htmlFor="email">Email:</label>
            </h2>
            <input type="email" id="email" name="email" placeholder="enter your email" />
          </div>
          <div className="inputContainer">
            <h2>
              <label htmlFor="email">Phone Number:</label>
            </h2>
            <input type="text" id="phoneNum" name="phoneNum" placeholder="Enter your phone number" />
          </div>
          {/* </div> */}
          {/* End of Box1 */}
          {/* Start of Box2 */}
          {/* <div className="Box2 flex flex-col gap-4 flex-wrap"> */}
          <div className="inputContainer">
            <h2>
              <label htmlFor="subject">Subject:</label>
            </h2>
            <input id="subject" name="subject" placeholder="Enter subject"></input>
          </div>
        </div>
        <div className="inputContainer inputContainer--Msg">
          <h2>
            <label htmlFor="message">Message:</label>
          </h2>
          <textarea id="message" name="message" placeholder="Enter message"></textarea>
        </div>
        <div className="flex items-center justify-center w-full">
          <button className="CTA" type="submit">Submit</button>
        </div>
      </form>

    </div>
  </div>
}