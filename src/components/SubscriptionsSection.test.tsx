import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SubscriptionsSection from './SubscriptionsSection';

describe('SubscriptionsSection Component', () => {
  it('should render the title with New Service badge', () => {
    render(<SubscriptionsSection />);
    expect(screen.getByText('CPR Training Subscriptions')).toBeInTheDocument();
    expect(screen.getByText('New Service')).toBeInTheDocument();
  });

  it('should render the description and target audience', () => {
    render(<SubscriptionsSection />);
    expect(screen.getByText(/comprehensive guidance and scenarios/i)).toBeInTheDocument();
    expect(screen.getByText(/Nursing facilities/i)).toBeInTheDocument();
    expect(screen.getByText(/Clinics/i)).toBeInTheDocument();
  });

  it('should render pricing options correctly', () => {
    render(<SubscriptionsSection />);
    expect(screen.getByText('Monthly')).toBeInTheDocument();
    expect(screen.getByText('$120.00')).toBeInTheDocument();
    expect(screen.getByText('Quarterly')).toBeInTheDocument();
    expect(screen.getByText('$200.00')).toBeInTheDocument();
  });

  it('should have Enroll Today buttons that link to booking', () => {
    render(<SubscriptionsSection />);
    const buttons = screen.getAllByText('Enroll Today');
    expect(buttons).toHaveLength(2);
    buttons.forEach(btn => {
      expect(btn.closest('a')).toHaveAttribute('href', '#booking');
    });
  });

  it('should NOT show payment processing fees', () => {
    render(<SubscriptionsSection />);
    expect(screen.queryByText(/Payment Processing/i)).not.toBeInTheDocument();
  });
});