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
            O Hackathon é realização do{' '}
            <a href={FOOTER.realization.link}>
              <em>{FOOTER.realization.name}</em>
            </a>{' '}
            juntamente com a Prefeitura de Juiz de Fora e demais parceiros
            estratégicos.
          </p>
          <p>
            A elaboração e organização do evento é de{' '}
            <a href={FOOTER.organization.link}>
              <em>{FOOTER.organization.name}</em>
            </a>{' '}
          </p>
          <p>
            Landing page criada por voluntários com código open-source
            disponível no{' '}
            <a href={FOOTER.github.link}>
              <em>{FOOTER.github.name}</em>
            </a>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
