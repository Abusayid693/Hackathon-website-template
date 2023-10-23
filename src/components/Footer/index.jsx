import {useEffect, useState} from 'react';
import {FOOTER, SOCIALS} from '../../Module/General';
import DevPost from './assets/icons8-dev-post.svg';
import Dis from './assets/icons8-discord.svg';
import Insta from './assets/icons8-instagram.svg';
import Linked from './assets/icons8-linkedin-2.svg';
import Mail from './assets/icons8-mail.svg';
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
          <div className="social-icon"></div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.devpost}>
              <img src={DevPost} alt="" />
            </a>
          </div>
        </div>

        <div className="footer_info">
          <p>
            Contact us{' '}
            <a href={SOCIALS.email}>
              <em>{SOCIALS.mail}</em>
            </a>{' '}
          </p>

          {FOOTER.Code_of_conduct.required && (
            <a
              href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
              download
              target="blank"
              className="privacy-policy"
            >
              <p>MLH Code of Conduct</p>
            </a>
          )}
          <p>Made with ❤️</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
