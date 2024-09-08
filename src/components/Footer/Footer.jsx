import React from 'react';
import './Footer.css';
import { mailicon, locationicon, callicon, logoBlue, specialbgdesk, insta, ascendant } from '../../assets';

const Footer = () => {
  return (
    <div className="footer">

      <div className="contact-bar">
        <div className="container">
          <div className="footer_grid">
            <a href="mailto:info@samarkandhouse.com" className="footer_grid_item">
              <span className="icon">
                <img src={mailicon} alt="Email" className="w-20" />
              </span>
              <span className='smalltext'>info@samarkandhouse.com</span>
            </a>
            <a href="#" className="footer_grid_item">
              <span className="icon">
                <img src={locationicon} alt="Location" className="w-20" />
              </span>
              <span className='smalltext'>Murree Hills, Islamabad</span>
            </a>
            <a href="tel:+923011001984" className="footer_grid_item">
              <span className="icon">
                <img src={callicon} alt="Phone" className="w-20" />
              </span>
              <span className='smalltext'>+92 301 1001984</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container">
        <div className="footer_base">
          <div className="footer_base_top">
            <div className="base_footer_left">
              <img src={logoBlue} alt="Samarkand House Logo" className="" />
              <div className="social_icons-mob">
              <a href="#">
                <img src={insta} className='instaimg' alt="Instagram" />
              </a>
            </div>
              <p className='architectural'>An architectural wonder immersed in the serene pine forests of the Murree Hills, Samarkand House offers your group a convenient and luxurious retreat.</p>
            </div>
            <div className="contact-bar-mob">
              <div className="container-align">
                <div className="footer_grid">
                  <div className='contact-sub'>
                  <a href="tel:+923011001984" className="footer_grid_item">
                    <span className="icon">
                      <img src={callicon} alt="Phone" className="w-20" />
                    </span>
                    <span className='smalltext'>+92 301 1001984</span>
                  </a>
                  <a href="#" className="footer_grid_item">
                    <span className="icon">
                      <img src={locationicon} alt="Location" className="w-20" />
                    </span>
                    <span className='smalltext'>Murree Hills, Islamabad</span>
                  </a>
                  </div>
                  <a href="mailto:info@samarkandhouse.com" className="footer_grid_item">
                    <span className="icon">
                      <img src={mailicon} alt="Email" className="w-20" />
                    </span>
                    <span className='smalltext'>info@samarkandhouse.com</span>
                  </a>

                </div>
              </div>
            </div>
            <div className="base_footer_right">
              <div className="property">
                <h3>Property</h3>
                <ul>
                  <li><a href="#">The House</a></li>
                  <li><a href="#">Dining</a></li>
                  <li><a href="#">Events</a></li>
                </ul>
              </div>
              <div className="contact">
                <h3>Contact</h3>
                <ul>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Privacy</a></li>
                </ul>
              </div>
              <div className="legal">
                <h3>Legals</h3>
                <ul>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer_base_bottom">
            <div className="social_icons">
              <a href="#">
                <img src={insta} className='instaimg' alt="Instagram" />
              </a>
            </div>
            <div className="flex_items_end">
              <span className='smalltext'>Design provided by Ascendant</span>
              <img src={ascendant} alt="Ascendant Logo" className="w-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
