import {useState, useMemo, useRef, useEffect} from 'react';
import {Button, Card} from 'react-bootstrap';
import autoAnimate from '@formkit/auto-animate';
import ReactMarkdown from 'react-markdown';

import {MIDDLE_SECTION} from 'Module/General';

const ContextAwareToggle = ({setFullText, fullText}) => {
  return (
    <button
      type="button"
      className="collapse-button"
      style={{
        backgroundColor: fullText ? '#b4ff00' : '#1c1c1c',
        color: fullText ? '#1c1c1c' : '#b4ff00'
      }}
      onClick={() => setFullText(!fullText)}
    >
      {fullText ? 'Menos detalhes...' : 'Mais detalhes...'}
    </button>
  );
};

const Collapse = () => {
  const [fullText, setFullText] = useState(false);
  const parentRef = useRef();

  const text = useMemo(
    () =>
      fullText
        ? MIDDLE_SECTION.COLLAPSE_DESCRIPTION_PARAGRAPHS
        : MIDDLE_SECTION.COLLAPSE_TITLE_PARAGRAPHS,
    [fullText]
  );

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  return (
    <div ref={parentRef} className="collapse-container">
      {text.map((props, i) => (
        <ReactMarkdown key={i}>{props}</ReactMarkdown>
      ))}
      <ContextAwareToggle
        setFullText={setFullText}
        fullText={fullText}
        eventKey="0"
      />
    </div>
  );
};

export default Collapse;
