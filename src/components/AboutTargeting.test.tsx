import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from './About';

describe('About Component Audience Targeting', () => {
  it('should explicitly target businesses and schools', () => {
    render(<About />);
    
    // Check for specific audience mentions
    expect(screen.getByText(/tailored for local businesses, schools/i)).toBeInTheDocument();
    expect(screen.getByText(/OSHA compliance/i)).toBeInTheDocument();
  });

  it('should mention American Red Cross as an alternative', () => {
    render(<About />);
    expect(screen.getByText(/American Red Cross certification options/i)).toBeInTheDocument();
  });
});
