import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Services from './Services';

describe('Services Component Highlighting', () => {
  it('should render specialized badges for key services', () => {
    render(<Services />);
    
    // Check for specific highlighting labels
    expect(screen.getByText(/Most Popular/i)).toBeInTheDocument();
    expect(screen.getByText(/Corporate Choice/i)).toBeInTheDocument();
    expect(screen.getByText(/Best for Families/i)).toBeInTheDocument();
  });

  it('should have visual indicators for highlighted services', () => {
    render(<Services />);
    const popularBadge = screen.getByText(/Most Popular/i);
    expect(popularBadge).toBeInTheDocument();
    expect(popularBadge.closest('div')).toHaveClass('bg-red');
  });
});
