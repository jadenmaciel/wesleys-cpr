import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Services from './Services';

describe('Services Component', () => {
  it('should render the Mobile & Workplace Training section', () => {
    render(<Services />);
    expect(screen.getByText('Mobile & Workplace Training')).toBeInTheDocument();
  });

  it('should have tabs for AHA and American Red Cross in the Mobile Training section', () => {
    render(<Services />);
    // Initial state might not have tabs if not implemented yet
    const ahaTab = screen.queryByText('AHA');
    const arcTab = screen.queryByText('American Red Cross');
    expect(ahaTab).toBeInTheDocument();
    expect(arcTab).toBeInTheDocument();
  });

  it('should show AHA limits (4-18) when AHA tab is active', () => {
    render(<Services />);
    const ahaTab = screen.getByText('AHA');
    fireEvent.click(ahaTab);
    expect(screen.getByText(/Min 4 \/ Max 18/i)).toBeInTheDocument();
  });

  it('should show Red Cross limits (4-24) when Red Cross tab is active', () => {
    render(<Services />);
    const arcTab = screen.getByText('American Red Cross');
    fireEvent.click(arcTab);
    expect(screen.getByText(/Min 4 \/ Max 24/i)).toBeInTheDocument();
  });
});
