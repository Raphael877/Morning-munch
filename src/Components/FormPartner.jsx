import {
  FormPartnerWrapper,
  FormPartnerinnerwrapper,
  FormPartnerLeft,
  FormPartnerRight
} from "./FormPartnerStyle";


// import { RiArrowDropDownLine, RiArrowDropUpLine} from "react-icons/ri";

import Baker from '../assets/Baker.jpg';
import African from "../assets/Africandispatch.jpg";
import WomenBaker from "../assets/Womanbaker.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FormPartner = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <FormPartnerWrapper>
      <FormPartnerinnerwrapper>
      <FormPartnerLeft>
        <form className="form">
          <div className="input-box">
            <input
              type="text"
              placeholder="First name"
              className="input"
              required
            />
          </div>

          <div className="input-box">
            <input type="text" placeholder="Last name" className="input"  readOnly/>
          </div>

          <div className="input-box">
            <input type="text" placeholder="Gender" className="input"  readOnly/>
                  {/* <RiArrowDropDownLine  style={{fontSize:"1.7rem", fontWeight:"100",cursor:"pointer"}}/> */}
          </div>

          <div className="input-box">
            <input type="email" placeholder="Business Type" className="input" />
        {/* <RiArrowDropDownLine style={{fontSize:"1.7rem", fontWeight:"100",cursor:"pointer"}}/> */}
          </div>

          <div className="input-box">
            <input type="email" placeholder="Email Address" className="input" />
          </div>

          <div className="input-box">
            <input type="number" placeholder="Phone Number" className="input" />
          </div>
          <nav className="form-bottom">
            <div className="checkbox-span-wrapper">
            <input type="checkbox" className="checkbox" />
            <span className="create-account-text">By creating this account, i accept the terms and condition of Morning munch</span>
            </div>
            <div>
            <button type="submit" className="submit-btn"> Submit</button>
            </div>
          </nav>
        </form>

      </FormPartnerLeft>

    
      <FormPartnerRight>
        <Slider {...settings}>
          <div>
            <img src={Baker} alt="Baker" className="img" />
          </div>
          <div>
            <img src={African} alt="African Dispatch" className="img" />
          </div>
          <div>
            <img src={WomenBaker} alt="womanbaker" className="img"  />
          </div>
        </Slider>
      </FormPartnerRight>
      </FormPartnerinnerwrapper>
    </FormPartnerWrapper>
  );
};

export default FormPartner;
