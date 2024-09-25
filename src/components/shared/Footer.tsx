import '../../CSS/footer.css';
import { NavLink } from 'react-router-dom';
import { footerBackground } from '@/assets';
import { facebookIcon } from '@/assets';
import { instagramIcon } from '@/assets';
import { youtubeIcon } from '@/assets';

export default function Footer() {
  return (
    <div className='FooterPage'>
      <img className='bg' src={footerBackground} alt="Swimmers" />
      {/*  ---------- Start of Content ----------  */}
      <div className="content">
        {/* start of upper box */}
        <div className="upperBox flex items-start justify-around font-[Playfair-Display]">
          <div className="upperPart text-left h-full flex flex-col items-start justify-between basis-1/10">
            <h1 className='block relative group text-nowrap px-4 py-2 pt-0 cursor-pointer text-white hover:text-white'>Links</h1>
            <NavLink
              to='/'
              className="block relative group text-nowrap px-4 py-2 cursor-pointer text-white hover:text-white"
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </NavLink>
            <NavLink
              to='/About-us'
              className="block relative group text-nowrap px-4 py-2 cursor-pointer text-white hover:text-white"
              onClick={() => window.scrollTo(0, 0)}
            >
              About
            </NavLink>
            <NavLink
              to='/Contact'
              // AA GO BACK TO ensure "to: path"
              className="block relative group text-nowrap px-4 py-2 cursor-pointer text-white hover:text-white"
              onClick={() => window.scrollTo(0, 0)}
            >
              Contact
            </NavLink>
          </div>
          <div className="upperPart text-center h-full gap-2 flex flex-col items-start justify-between basis-1/3">
            <h1>Support Center (8:00AM till 8:00PM)</h1>
            <a href="">+96176969094</a>
            <a href="">+9613969094</a>
          </div>
          <div className='upperPart text-left upperPart--last flex flex-col items-center justify-between basis-1/3'>
            <p className=''>
              We strive to teach students how to become safer in the water and how to be the best swimmers they can be in a caring, yet firm learning environment.</p>
          </div>
        </div>
        {/* end of upper box */}
        {/* start of lower box */}
        <div className="lowerBox flex items-center justify-between">
          <p className='text-[#66737e] basis-[40vw]'>© Website designed and developed
            by InnoAlchemy</p>
          <div className="socials flex items-center justify-center gap-5">
            <a href="">
              <img className='socialLogo' src={facebookIcon} alt="" />
            </a>
            <a href="">
              <img className='socialLogo' src={instagramIcon} alt="" />
            </a>
            <a href="">
              <img className='socialLogo' src={youtubeIcon} alt="" />
            </a>
            <a href="">
              <img className='socialLogo' src={instagramIcon} alt="" />
            </a>
          </div>
          <p className='text-[#66737e] basis-[40vw] text-right text-wrap'>© 2020. All Rights Reserved</p>
        </div>
        {/* end of lower box */}
      </div>
      {/*  ---------- End of Content ----------  */}
    </div>
  )
}