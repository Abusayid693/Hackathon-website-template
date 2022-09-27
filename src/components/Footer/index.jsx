import {useEffect, useState} from 'react';
import {SOCIALS, TOP_SECTION} from '../../Module/General';
import {Btn} from '../Landing/index.jsx';
import DevPost from './assets/icons8-dev-post.svg';
import Dis from './assets/icons8-discord.svg';
import Insta from './assets/icons8-instagram.svg';
import Linked from './assets/icons8-linkedin-2.svg';
import Mail from './assets/icons8-mail.svg';
import Twitter from './assets/icons8-twitter.svg';
//------------------------------------------------------------------
import './style.scss';

const Footer = () => {
  const [template, setTemplate] = useState(false);
  const [viewTemplate, setViewTemplate] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = e => {
    if (window.scrollY > 2800) setTemplate(true);
    else if (window.scrollY < 2800) setTemplate(false);
  };

  return (
    <div>
      <div className="footer">
        <div className="social-icons-container">
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
              <img src={Insta} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
              <img src={Dis} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
              <img src={Linked} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.email}>
              <img src={Mail} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.twitter}>
              <img src={Twitter} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.devpost}>
              <img src={DevPost} alt="" />
            </a>
          </div>
        </div>
        <div className="Register_a">
          <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
            <Btn type="Register" overlay="Fill the form" />
          </a>
        </div>
        <div className="footer_info">
          <p>
            Contact us{' '}
            <a href={SOCIALS.email}>
              <em>{SOCIALS.mail}</em>
            </a>{' '}
          </p>

          <p>Made with ❤️</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
