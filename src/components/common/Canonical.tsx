import { useEffect } from 'react';

interface CanonicalProps {
  url: string;
}

export default function Canonical({ url }: CanonicalProps) {
  useEffect(() => {
    // Look for an existing canonical tag
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    
    // If it doesn't exist, create it and append to <head>
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    
    // Update the href to the provided URL
    link.setAttribute('href', url);
  }, [url]);

  return null;
}