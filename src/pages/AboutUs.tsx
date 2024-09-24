import '../CSS/AboutUs.css';
import { headerBG } from "@/assets";

const AboutUs = () => {
  return (
    <div className="AboutUsPage">
      {/* Start of her section */}
      <div className="heroSec">
        <div className="bgContainer">
          <img className='bg' src={headerBG} alt="swimming pool" />
          <h1 className="heroTitle">About Us</h1>
        </div>
      </div>
      {/* End of her section */}
      {/* Start of WelcomingWord */}
      <div className="section">
        <h2 className='sectionTitle'>Welcoming Word:</h2>
        <p className='text'>Swimming is my great passion! From my personal experience as a swimmer for 25 years and a coach for more than 20 years, I
          dived so deep into this sport and found out a lot of its pros and cons. As well as being fun, swimming is a great way to stay fit,
          stay healthy, and make friends! It’s a healthy activity for a lifetime! Despite its benefits, swimming can be the most boring of all
          sports.</p>
        <br />
        <p className='text'>I believe that by providing a consistent quality instruction that gets the best and fastest results, motivating students and parents
          as well, and providing high quality facilities.... any kid can be unstoppable and can swim his dreams into reality..! I believe that
          the small details make the BIG DIFFERENCE! I believe in every dream… and the ability to take this dream to the extreme..!!</p>
      </div>
      {/* End of WelcomingWord */}
      {/* Start of Philosophy */}
      <div className="section Philosophy">
        <h2 className='sectionTitle'>Philosophy:</h2>
        <p className='text'>We believe that there is only one of you.. and this is the super power.!! Based on that, we customize a teaching style that works
          best for each individual’s different needs, abilities, desires, talents, strength & weak points and many other important factors.</p>
      </div>
      {/* End of Philosophy */}
      {/* Start of Mission */}
      <div className="section">
        <h2 className='sectionTitle'>Mission:</h2>
        <p className='text'>From a physical standpoint, our mission is to teach the correct techniques of swimming, in a fun & safe environment! Starting at
          early stages and continually refining the strokes through the years of training. It’s critical to make sure kids have the
          fundamentals of basic body position and core body movements in all four strokes, leveling up to work on speed, endurance and
          power..!</p>
        <br />
        <p className='text'>Mentally, our mission if you focus on building the kid’s self-esteem, confidence, positive self-image, personal accountability,
          self-care, goal setting and getting...all that by encouraging, empowering, guiding & appreciating. Last but not least, our mission is
          to continuously raise awareness about the importance of swimming as a basic skill for safety & survival.. and as an excellent
          value teacher!!</p>
      </div>
      {/* End of Mission */}
      {/* Start of Vision */}
      <div className="section">
        <h2 className='sectionTitle'>Vision:</h2>
        <p className='text'>Our vision is to see our logo all over Lebanon and even abroad! Working hardly and nonstop on our skills, knowledge, trainings,
          programs, staff and team...</p>
      </div>
      {/* End of Vision */}
      {/* Start of Goals */}
      <div className="section">
        <h2 className='sectionTitle'>Goals:</h2>
        <p className='text'>Our goals are many:</p>
        <ul className='text list'>
          <li>Build and maintain a united cooperative competitive team with the highest spirit, technique levels and challenging energy.</li>
          <li>Teach life lessons and values through swimming which are equally important to techniques and skills.. We want to make a
            difference in every swimmer’s life...making champions for life..in and out of the pool!!!.</li>
          <li>It is very important for us to teach every swimmer, through experience, the acceptance and ways of dealing with success and
            failure...</li>
        </ul>
      </div>
      {/* End of Vision */}
    </div>

  )
}
export default AboutUs;