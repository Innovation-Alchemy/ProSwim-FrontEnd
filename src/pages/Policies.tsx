// import { useEffect, useState } from "react";
// import { shopBackground, shopItem1Pink, shopItem1Blue } from "@/assets";
// import { Link } from "react-router-dom";
// import ProSwimmerCard from "@/components/Albums/ProSwimmerCard";
import HeroTextBg from "@/components/shared/HeroTextBg";

// import ".././CSS/Locations.css";

export default function Policies() {
  return <div className="PoliciesPage pt-[84px] pb-20 text-[18px]">
    <HeroTextBg title="Policies"></HeroTextBg>
    {/* start of heroSection */}
    <div className="content px-[3rem] py-[3rem] flex flex-col gap-10">
      {/* ==== */}
      <div>
        <h3 className="font-[Playfair-Display] mb-[14px] text-[25px] font-[700] underline">Policy Aims:</h3>
        {/* ----- */}
        <div className="textBox flex flex-col gap-4">
          <p>ProSwim academy will make strenuous efforts and strive to achieve the excellence in service delivery, the highest levels of success, and the continuous improvement of all teaching services, while on the other hand, we do have sets of rules and regulations. The academy has regard to both the physical and mental development of each student. Believing that a healthy body promotes a healthy mind, and in regard to the high importance of learning this life skill, the swimming policy aims to:</p>
          <ul className="list-disc pl-10">
            <li>Comply with the requirements of safety skill tutoring</li>
            <li>Ensure child’s protection & dignity</li>
            <li>Provide clarity of rules & responsibilities.</li>
          </ul>
          <p>ProSwim academy reserves the right to change or modify any or all of these policies and procedures at anytime. These modifications will be posted both in writing and on the website www.proswim-lb.com and will be effective immediately upon posting. Your continued enrollment in the academy constitutes:</p>
          <ul className="list-disc pl-10">
            <li>your agreement to accept any changes or modifications made</li>
            <li>your acknowledgment & understanding that it is your responsibility to periodically review the website and the policies to learn of any changes.</li>
          </ul>

        </div>
        {/* ----- */}
      </div>
      {/* ==== */}
      <div>
        <h3 className="font-[Playfair-Display] mb-[14px] text-[25px] font-[700] underline">Make-up Policy:</h3>
        {/* ---- */}
        <div>
          <ul className="list-disc pl-6 flex flex-col gap-4">
            <li>For all swimmers who are taking private classes and missed their class, we are happy to provide with 2 make-up sessions per package.</li>
            <li>Notification of absence must be received 24 hours before the schedule class commences to be eligible for a make-up lesson.</li>
            <li>For all swimmers who are taking group classes and missed their class, make-up sessions are offered upon availability.</li>
            <li>Make-up lessons DO NOT replace your normal class or reduce your next semester fees.</li>
            <li>Make-up lessons must be taken in the current semester or they will be fortfeited.. they will not be carried over into the next semester.</li>
            <li>It is in your child’s best interests that absences are restricted to instances of genuine illness.</li>
            <li>Make-up lessons that are unattended will be forfeited.</li>
            <li>No notification and No shows will not be eligible for a make-up lesson.</li>
          </ul>
        </div>
        {/* ---- */}
      </div>
      {/* ====== */}
      <div>
        <h3 className="font-[Playfair-Display] mb-[14px] text-[25px] font-[700] underline">Cancellation/class Withdrawal:</h3>
        {/* ----- */}
        <div>
          <ul className="list-disc pl-6 flex flex-col gap-4">
            <li>
              The academy does not offer refunds for swimmers who have already started the classes.
            </li>
            <li>In case you can no longer attend your current day/time class, our supervisors are at your service to assist you in finding a class that fits your schedule.</li>
            <li>In the case of extended illness or injury (more than 1 month), we can put your account on hold, until you can resume your lessons.</li>
            <li>In case of common emergencies, severe weather conditions (floods, hurricanes,....), war, outbreak of pandemic diseases, or any other case of unpredictable and unforeseen events.. which leads to the closure of our academy, there is no refund granted and your account will be put on hold until you can resume your lesson.</li>
            <li>No refund will be granted in any other case.</li>
            <li>Make-up sessions are offered as an alternative (subject to make-up sessions terms & conditions).</li>
            <li>If you are register in a class that has not started yet, we will be happy to refund what you paid.</li>
            <li>A refund form is to be completed at our supervisor’s desk, prior to end of the current semester.</li>
            <li>Refunds are not back dated; any request for refund must be completed within the current semester.</li>
            <li>In the event of missed or cancelled lesson, no refund is granted.</li>
          </ul>
        </div>
        {/* ----- */}
      </div>
      {/* ==== */}
      <div>
        <h3 className="font-[Playfair-Display] mb-[14px] text-[25px] font-[700] underline">Ongoing Lessons:</h3>
        {/* ---- */}
        <div>
          <p>Our semester is a 4 months sessions.. You are not required to rebook every month. Your booking is permanent until you notify us with your withdrawal/cancellation decision.</p>
        </div>
        {/* ---- */}
      </div>
      {/* ==== */}
      <div>
        <h3 className="font-[Playfair-Display] mb-[14px] text-[25px] font-[700] underline">Transfers:</h3>
        {/* ---- */}
        <div>
          <ul className="list-disc pl-6 flex flex-col gap-4 mb-4">
            <li>Transfer of fees is allowed ONLY between family members and siblings..</li>
            <li>Transfer between locations and branches is allowed and applicable..</li>
          </ul>
          <p>In case you wish to move your child from one location to another, our supervisors are glad to assist you in checking for availability. If there is no vacancy, your child will be put on a waiting list, until there is an available place for him/her.</p>
        </div>
        {/* ---- */}
      </div>
      {/* ==== */}
      <div>
        <h3 className="font-[Playfair-Display] mb-[14px] text-[25px] font-[700] underline">Low Enrollment:</h3>
        {/* --- */}
        <div>
          <p>Classes that have low enrollment are considered normal classes and will progress with the number of kids present.</p>
        </div>
        {/* --- */}
      </div>
      {/* ==== */}
      {/* ==== */}
      <div>
        <h3 className="font-[Playfair-Display] mb-[14px] text-[25px] font-[700] underline">Trial Session:</h3>
        {/* --- */}
        <div>
          <p>We offer 15 mins swim assessment to determine the child’s swim level and which class is best for him/her. If you are interested in seeing how our program works, you are welcome to come and watch a class in action.</p>
        </div>
        {/* --- */}
      </div>
      {/* ==== */}
    </div>
    {/* end of heroSection */}

  </div >
}