import { render, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

describe('SEO Meta Tags', () => {
  it('should render correct meta tags', async () => {
    render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    );

    await waitFor(() => {
      expect(document.title).toContain("Wesley's CPR");
      
      const metaDescription = document.querySelector('meta[name="description"]');
      expect(metaDescription?.getAttribute('content')).toContain("CPR, BLS, and First Aid training");

      const ogTitle = document.querySelector('meta[property="og:title"]');
      expect(ogTitle?.getAttribute('content')).toContain("Wesley's CPR");

      const ogDescription = document.querySelector('meta[property="og:description"]');
      expect(ogDescription?.getAttribute('content')).toContain("Professional CPR certification");
    });
  });
});
