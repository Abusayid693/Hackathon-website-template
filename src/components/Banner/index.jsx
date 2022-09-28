import './style.css';

import {TOP_SECTION} from '../../Module/General';

const Banner = () => {
  return (
    <img
      className="Banner hidden-xs hidden-sm"
      src={TOP_SECTION.BANNER}
      alt="banner"
    />
  );
};

export {Banner};
