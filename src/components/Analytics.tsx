import { useEffect } from 'react';

export default function Analytics() {
  const websiteId = import.meta.env.VITE_UMAMI_ID;

  useEffect(() => {
    if (!websiteId) return;

    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = 'https://cloud.umami.is/script.js';
    script.setAttribute('data-website-id', websiteId);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [websiteId]);

  return null;
}
