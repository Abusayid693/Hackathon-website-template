import {TOP_SECTION} from 'Module/General';
import {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import HomePage from '../views/Home';

const logoClose = '/Assets/Navbar/ham-c.svg';
const hamLogo = '/Assets/Navbar/ham.svg';

const NAVIGATION_OFFSET = 66;

const Wrapper = styled.div`
  display: block;
  width: 50%;

  @media (max-width: 1000px) {
    margin: 0;
    display: ${props => (props.toggle ? 'none' : 'static')};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? '-1000px' : '0px')};
    transition: top 1s;
    .nav-content {
      height: 55%;
      background-color: #010101;
    }
  }
`;

const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  const [isOffset, setIsOffset] = useState(false);

  const navigation = useRef();

  const listenScrollEvent = e => {
    if (window.scrollY >= NAVIGATION_OFFSET) {
      setIsOffset(true);
    } else {
      setIsOffset(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const handleOutsideCick = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', e =>
      handleOutsideCick(e, navigation)
    );

    return () => {
      document.removeEventListener('mousedown', e =>
        handleOutsideCick(e, navigation)
      );
    };
  }, []);
  return (
    <nav className={`nav_bar ${isOffset && 'nav_bar-offset-crossed'}`}>
      <img className="navLogo" src={TOP_SECTION.LOGO} alt="logo" />
      <Wrapper toggle={toggle}>
        <div className="nav-content" ref={navigation}>
          <ul>
            <li>
              <a href={`#home`}>
                <span className="links">
                  <i className="fas fa-home"></i>{' '}
                </span>{' '}
              </a>
            </li>
            <li>
              <a href={`#about`}>
                <span className="links">Conceito </span>{' '}
              </a>
            </li>
            <li>
              <a href={`#mentors`}>
                <span className="links">Mentores </span>{' '}
              </a>
            </li>
            <li>
              <a href={`#agenda`}>
                <span className="links">Agenda </span>{' '}
              </a>
            </li>
            <li>
              <a href={`#prizes`}>
                <span className="links">Premiação </span>{' '}
              </a>
            </li>
            {/* The event ended so let this section commented */}
            <li>
              <a href={`#subscription`}>
                <span className="links">Inscrição </span>{' '}
              </a>
            </li>
          </ul>
          <img
            className="s-close"
            onClick={() => setToggle(true)}
            src={logoClose}
            alt="close"
          />
        </div>
        <div className="ease" />
      </Wrapper>

      <img
        className="s-open"
        onClick={() => setToggle(false)}
        src={hamLogo}
        alt="ham"
      />
    </nav>
  );
};

const App = () => {
  return (
    <>
      <NavBar />
      <HomePage />
    </>
  );
};

export default App;
