import Typed from 'react-typed';
import {TOP_SECTION} from '../../Module/General';
import './style.css';

export default function MytypedComponent() {
  return (
    <div className="typing-div">
      <h1>
        <Typed strings={TOP_SECTION.Typed_effect} typeSpeed={80} loop />
      </h1>
    </div>
  );
}
