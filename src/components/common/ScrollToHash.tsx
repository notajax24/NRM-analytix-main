import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a # in the URL (e.g., /#practice1)
    if (hash) {
      // Wait a tiny fraction of a second for the page to finish rendering
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } 
    // If there is no hash (e.g., normal page navigation)
    else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null; // This component doesn't render anything visually
}