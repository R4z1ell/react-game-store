import React from 'react';

import { FaFacebookSquare, FaTwitter, FaTwitch } from 'react-icons/fa';
import { MdExplore, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md';

import './index.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__socials">
          <FaFacebookSquare
            size="1.2em"
            className="footer__socials--facebook"
          />
          <FaTwitter size="1.2em" className="footer__socials--twitter" />
          <FaTwitch size="1.2em" className="footer__socials--twitch" />
        </div>
      </div>
      <div className="footer__middle">
        <div className="footer__row">
          <div className="footer__wrapper">
            <MdExplore size="2em" className="footer__icon" />
            <div>
              <span style={{ display: 'block' }}>Address</span>
              <span>82 River Street</span>
            </div>
          </div>
          <div className="footer__wrapper">
            <MdPhone size="2em" className="footer__icon" />
            <div>
              <span style={{ display: 'block' }}>Phone</span>
              <span>4223-301556</span>
            </div>
          </div>
        </div>
        <div className="footer__row">
          <div className="footer__wrapper">
            <MdAccessTime size="2em" className="footer__icon" />
            <div>
              <span style={{ display: 'block' }}>Working hours</span>
              <span>Mon-Sun/9am-7pm</span>
            </div>
          </div>
          <div className="footer__wrapper">
            <MdEmail size="2em" className="footer__icon" />
            <div>
              <span style={{ display: 'block' }}>Email</span>
              <span>info@jetdeals.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>
          &#x24B8; 2019{' '}
          <span
            style={{
              fontFamily: 'Black Ops One',
              transform: 'translateX(27%)'
            }}
          >
            JetDeals
          </span>
          . All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
