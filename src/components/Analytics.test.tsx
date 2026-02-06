import { render } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Analytics from './Analytics';

describe('Analytics Component', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
  });

  it('should not inject scripts if Umami ID is missing', () => {
    // @ts-ignore
    import.meta.env.VITE_UMAMI_ID = '';
    render(<Analytics />);
    const scripts = document.head.querySelectorAll('script');
    expect(scripts.length).toBe(0);
  });

  it('should inject script if Umami ID is provided', () => {
    // @ts-ignore
    import.meta.env.VITE_UMAMI_ID = '9b2d7387-1122-47ac-909a-1f7f8bf80f10';
    render(<Analytics />);
    const scripts = document.head.querySelectorAll('script');
    expect(scripts.length).toBe(1);
    
    const script = scripts[0];
    expect(script.src).toBe('https://cloud.umami.is/script.js');
    expect(script.getAttribute('data-website-id')).toBe('9b2d7387-1122-47ac-909a-1f7f8bf80f10');
    expect(script.hasAttribute('defer')).toBe(true);
  });

  it('should remove script on unmount', () => {
    // @ts-ignore
    import.meta.env.VITE_UMAMI_ID = '9b2d7387-1122-47ac-909a-1f7f8bf80f10';
    const { unmount } = render(<Analytics />);
    expect(document.head.querySelectorAll('script').length).toBe(1);
    unmount();
    expect(document.head.querySelectorAll('script').length).toBe(0);
  });
});