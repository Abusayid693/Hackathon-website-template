import {Logo as LogoStyles, LogoSection} from './style';

import {MIDDLE_SECTION} from '../../Module/General';

function LogoSectionAbout() {
  return (
    <LogoSection>
      <h1>{MIDDLE_SECTION.TITLE}</h1>
      <p>{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
    </LogoSection>
  );
}

function Logo() {
  return (
    <LogoStyles>
      <img className="Logo" src={MIDDLE_SECTION.LOGO} alt="Limbohacks" />
    </LogoStyles>
  );
}

export {Logo, LogoSectionAbout};
