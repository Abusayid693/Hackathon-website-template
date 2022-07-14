import {useEffect} from 'react';

export const UseMedia = (query: string, val: number, setMediaQuery: any) => {
  const queryStr = `(${query}: ${val}px)`;

  useEffect(() => {
    const mediaWatcher = window.matchMedia(queryStr);
    mediaWatcher.matches ? setMediaQuery(true) : setMediaQuery(false);

    function updateMediaWatcher(e: any) {
      e.matches ? setMediaQuery(true) : setMediaQuery(false);
    }
    mediaWatcher.addEventListener('change', updateMediaWatcher);

    return function cleanup() {
      mediaWatcher.removeEventListener('change', updateMediaWatcher);
    };
  });
};
