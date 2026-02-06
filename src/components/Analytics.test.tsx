import { render } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Analytics from './Analytics';

describe('Analytics Component', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
  });

  it('should not inject scripts if GA ID is missing', () => {
    // @ts-ignore
    import.meta.env.VITE_GA_ID = '';
    render(<Analytics />);
    const scripts = document.head.querySelectorAll('script');
    expect(scripts.length).toBe(0);
  });

  it('should inject scripts if GA ID is provided', () => {
    // @ts-ignore
    import.meta.env.VITE_GA_ID = 'G-123456';
    render(<Analytics />);
    const scripts = document.head.querySelectorAll('script');
    expect(scripts.length).toBe(2);
    
    const gaScript = Array.from(scripts).find(s => s.src.includes('googletagmanager.com/gtag/js'));
    expect(gaScript?.src).toContain('id=G-123456');
    
    const inlineScript = Array.from(scripts).find(s => s.innerHTML.includes("gtag('config'"));
    expect(inlineScript?.innerHTML).toContain("gtag('config', 'G-123456')");
  });

  it('should remove scripts on unmount', () => {
    // @ts-ignore
    import.meta.env.VITE_GA_ID = 'G-123456';
    const { unmount } = render(<Analytics />);
    expect(document.head.querySelectorAll('script').length).toBe(2);
    unmount();
    expect(document.head.querySelectorAll('script').length).toBe(0);
  });
});
