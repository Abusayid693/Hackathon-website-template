import {useEffect} from 'react';

function Instagram() {
  useEffect(() => {
    window.location.href = 'https://www.instagram.com/hackatdavidson/';
  }, []);
  return <div></div>;
}

export default Instagram;
