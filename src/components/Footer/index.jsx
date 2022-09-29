import {useEffect, useState} from 'react';
import {FOOTER} from '../../Module/General';
//------------------------------------------------------------------

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
        <div className="footer_info">
          <p>
            Realização:{' '}
            <a href={FOOTER.realization.link}>
              <em>{FOOTER.realization.name}</em>
            </a>{' '}
          </p>
          <p>
            Organização:{' '}
            <a href={FOOTER.organization.link}>
              <em>{FOOTER.organization.name}</em>
            </a>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
