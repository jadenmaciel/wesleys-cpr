import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import SubscriptionsSection from './SubscriptionsSection';
import { COURSES } from '../data/courses';

// Mock the PricingCard component to avoid testing its internal logic
vi.mock('./PricingCard', () => ({
  default: ({ name, price, description }: any) => (
    <div data-testid="pricing-card">
      <h3>{name}</h3>
      <span>${price}</span>
      <p>{description}</p>
    </div>
  ),
}));

describe('SubscriptionsSection', () => {
  it('renders the section title', () => {
    render(<SubscriptionsSection />);
    expect(screen.getByText('CPR Training Subscriptions')).toBeInTheDocument();
  });

  it('renders the target audience list', () => {
    render(<SubscriptionsSection />);
    expect(screen.getByText(/Nursing facilities/i)).toBeInTheDocument();
    expect(screen.getByText(/Clinics/i)).toBeInTheDocument();
    expect(screen.getByText(/Detox facilities/i)).toBeInTheDocument();
  });

  it('renders the value proposition', () => {
    render(<SubscriptionsSection />);
    expect(screen.getAllByText(/Ensure your team is prepared/i).length).toBeGreaterThan(0);
  });

  it('renders two pricing cards for subscriptions', () => {
    render(<SubscriptionsSection />);
    const cards = screen.getAllByTestId('pricing-card');
    expect(cards).toHaveLength(2);
  });

  it('passes the correct data to the pricing cards', () => {
    render(<SubscriptionsSection />);
    
    // Check for Monthly card data
    expect(screen.getByText('CPR Training Subscription (Monthly)')).toBeInTheDocument();
    expect(screen.getByText('$120')).toBeInTheDocument();

    // Check for Quarterly card data
    expect(screen.getByText('CPR Training Subscription (Quarterly)')).toBeInTheDocument();
    expect(screen.getByText('$200')).toBeInTheDocument();
  });
});
