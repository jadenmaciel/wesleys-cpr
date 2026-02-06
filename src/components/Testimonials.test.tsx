import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Testimonials from './Testimonials';
import { REVIEWS } from '../data/reviews';

describe('Testimonials Component', () => {
  it('should render the list of reviews', () => {
    render(<Testimonials />);
    
    // Check if the title is present
    expect(screen.getByText(/What students are saying/i)).toBeInTheDocument();

    // Check if some reviews are rendered
    // Note: Testimonials duplicates the array for the carousel effect
    REVIEWS.forEach(review => {
      const reviewerElements = screen.getAllByText(review.reviewer);
      expect(reviewerElements.length).toBeGreaterThan(0);
    });
  });

  it('should render the Google Reviews link', () => {
    render(<Testimonials />);
    const googleLink = screen.getByRole('link', { name: /See all reviews on Google/i });
    expect(googleLink).toBeInTheDocument();
    expect(googleLink).toHaveAttribute('href', expect.stringContaining('google.com/maps'));
  });

  it('should display the correct rating stars', () => {
    render(<Testimonials />);
    
    REVIEWS.forEach(review => {
      const ratingLabel = `${review.rating} star rating`;
      const ratingElements = screen.getAllByLabelText(ratingLabel);
      expect(ratingElements.length).toBeGreaterThan(0);
    });
  });

  it('should toggle review expansion on click', async () => {
    const user = userEvent.setup();
    render(<Testimonials />);
    
    // Get the first "Read more" button that is not a duplicate (duplicates are aria-hidden)
    const readMoreButtons = screen.getAllByRole('button', { name: /Read more/i });
    const primaryButton = readMoreButtons[0];
    
    expect(primaryButton).toHaveAttribute('aria-expanded', 'false');
    
    await user.click(primaryButton);
    expect(primaryButton).toHaveAttribute('aria-expanded', 'true');
    expect(primaryButton).toHaveTextContent(/Show less/i);
    
    await user.click(primaryButton);
    expect(primaryButton).toHaveAttribute('aria-expanded', 'false');
    expect(primaryButton).toHaveTextContent(/Read more/i);
  });

  it('should toggle review expansion on keyboard Enter', async () => {
    const user = userEvent.setup();
    render(<Testimonials />);
    
    const articles = screen.getAllByRole('listitem');
    const primaryArticle = articles[0];
    
    // Focus and press Enter
    primaryArticle.focus();
    await user.keyboard('{Enter}');
    
    const readMoreButtons = screen.getAllByRole('button', { name: /Show less/i });
    expect(readMoreButtons.length).toBeGreaterThan(0);
  });
});