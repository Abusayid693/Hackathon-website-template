import React, {useState, useEffect} from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
// import {HashLink as Link} from 'react-router-hash-link';
import {StaticImage} from 'gatsby-plugin-image';
import * as H from './style';

const Navbar = ({}) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [color, setColor] = useState<string>('#121930');

  const listenScrollEvent = () => {
    if (window.scrollY > 800) {
      setColor('rgba(50, 13, 136)');
    } else {
      setColor('#121930');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <H.Container>
      <>
        <nav className="nav_bar" style={{backgroundColor: color}}>
          <H.Wrapper toggle={toggle}>
            <div className="nav-content">
              <ul>
                <li>
                  {/* <Link to={`#home`}> */}
                    <span className="links">Home </span>{' '}
                  {/* </Link> */}
                </li>
                <li>
                  {/* <Link to={`#faq`}> */}
                    <span className="links">FAQ </span>{' '}
                  {/* </Link> */}
                </li>
                <li>
                  {/* <Link to={`#prizes`}> */}
                    <span className="links">prizes </span>{' '}
                  {/* </Link> */}
                </li>
                <li>
                  {/* <Link to={`#sponsors`}> */}
                    <span className="links">sponsors </span>{' '}
                  {/* </Link> */}
                </li>
                <li>
                  {/* <Link to={`#team`}> */}
                    <span className="links">team </span>{' '}
                  {/* </Link> */}
                </li>
                <a className="s-close" onClick={() => setToggle(true)}>
                  <StaticImage
                    src="../../images/ham-close.svg"
                    alt="A dinosaur"
                  />
                </a>
              </ul>
            </div>
            <div className="ease" />
          </H.Wrapper>

          <a className="s-open" onClick={() => setToggle(false)}>
            <StaticImage src="../../images/ham.svg" alt="A dinosaur" />
          </a>
        </nav>
      </>
    </H.Container>
  );
};

export default Navbar;
