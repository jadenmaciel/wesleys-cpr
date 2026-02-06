import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Services from './Services';

describe('Services Component', () => {
  it('should render the Training Programs section', () => {
    render(<Services />);
    expect(screen.getByText('Our Training Programs')).toBeInTheDocument();
  });

  it('should have main tabs for AHA and American Red Cross', () => {
    render(<Services />);
    expect(screen.getByText('American Heart Association (AHA)')).toBeInTheDocument();
    expect(screen.getByText('American Red Cross (ARC)')).toBeInTheDocument();
  });

  it('should NOT contain "+$12" surcharge wording', () => {
    render(<Services />);
    expect(screen.queryByText(/\+\$12/)).not.toBeInTheDocument();
  });

  it('should show AHA limits (4-18) when AHA tab is active', () => {
    render(<Services />);
    const ahaTab = screen.getByText('American Heart Association (AHA)');
    fireEvent.click(ahaTab);
    
    // Check multiple cards to ensure consistency
    const limits = screen.getAllByText(/Min 4 \/ Max 18/i);
    expect(limits.length).toBeGreaterThan(0);
  });

  it('should show Red Cross limits (4-24) when ARC tab is active', () => {
    render(<Services />);
    const arcTab = screen.getByText('American Red Cross (ARC)');
    fireEvent.click(arcTab);
    
    // Check multiple cards to ensure consistency
    const limits = screen.getAllByText(/Min 4 \/ Max 24/i);
    expect(limits.length).toBeGreaterThan(0);
  });

  it('should display the correct certification name based on tab', () => {
    render(<Services />);
    
    // Test AHA Tab
    fireEvent.click(screen.getByText('American Heart Association (AHA)'));
    expect(screen.getAllByText(/AHA e-card/i).length).toBeGreaterThan(0);
    
    // Test ARC Tab
    fireEvent.click(screen.getByText('American Red Cross (ARC)'));
    expect(screen.getAllByText(/American Red Cross/i).length).toBeGreaterThan(0);
  });
});