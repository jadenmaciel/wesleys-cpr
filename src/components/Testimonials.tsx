import { useState, type KeyboardEvent } from 'react';
import { REVIEWS } from '../data/reviews';

/**
 * Testimonials carousel
 * - Data powered by REVIEWS constant (keep real testimonials synced).
 * - Auto-scroll track uses Tailwind motion-safe animation + duplicated data for seamless looping.
 * - Accessibility: region landmark, semantic list, hover pause, reduced motion guard, and per-card expand/collapse with aria wiring.
 */

export default function Testimonials() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const scrollingReviews = [...REVIEWS, ...REVIEWS];

  const toggleReview = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="testimonials"
      className="bg-navy py-20"
      role="region"
      aria-label="Student testimonials"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-cream md:text-4xl">
              What students are saying
            </h2>
            <div className="mt-2 flex items-center gap-2 text-cream/80">
              <span className="flex text-yellow-400" aria-label="5.0 average rating">
                ★★★★★
              </span>
              <span className="text-sm font-medium">5.0 average on Google Reviews</span>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/search/Wesley's+CPR+Fresno"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-cream hover:bg-white/20 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.172-1.228 1.228-3.152 2.576-6.6 2.576-5.384 0-9.648-4.368-9.648-9.752s4.264-9.752 9.648-9.752c2.92 0 5.12 1.152 6.648 2.576l2.32-2.32C18.816 1.712 16.024 0 12.48 0 5.8 0 .448 5.352.448 12s5.352 12 12.032 12c3.544 0 6.232-1.16 8.352-3.344 2.16-2.16 2.84-5.216 2.84-7.664 0-.736-.064-1.424-.184-2.072H12.48z" />
            </svg>
            See all reviews on Google
          </a>
        </header>

        <div className="relative overflow-x-auto no-scrollbar group">
          <div
            className="flex gap-6 pb-4 animate-scroll-x-fast md:animate-scroll-x-slow group-hover:[animation-play-state:paused]"
            role="list"
            aria-label="Testimonials carousel"
          >
              {scrollingReviews.map((review, index) => {
                const baseIndex = index % REVIEWS.length;
                const isDuplicate = index >= REVIEWS.length;
                const isExpanded = !isDuplicate && expandedIndex === baseIndex;
                const shouldClamp = isDuplicate || !isExpanded;

                const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
                  if (isDuplicate) return;
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    toggleReview(baseIndex);
                  }
                };

                return (
                  <article
                    key={`${review.reviewer}-${index}`}
                    className="flex w-full flex-shrink-0 basis-full flex-col rounded-2xl border border-red bg-cream p-6 text-dark shadow-lg md:basis-1/2 lg:basis-1/3"
                    role="listitem"
                    aria-hidden={isDuplicate}
                    aria-expanded={isDuplicate ? undefined : isExpanded}
                    tabIndex={isDuplicate ? -1 : 0}
                    onKeyDown={handleCardKeyDown}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-lg font-semibold">{review.reviewer}</p>
                      <div className="flex items-center gap-1 text-red" aria-label={`${review.rating} star rating`}>
                        {Array.from({ length: review.rating }).map((_, starIndex) => (
                          <span key={starIndex} aria-hidden="true">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    {review.price_comment ? (
                      <p className="mt-2 text-sm uppercase tracking-wide text-dark/70">
                        {review.price_comment}
                      </p>
                    ) : null}

                    {review.services.length > 0 ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {review.services.map((service) => (
                          <span
                            key={`${review.reviewer}-${service}-${index}`}
                            className="rounded-full bg-navy/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-dark"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <p
                      id={`review-text-${baseIndex}`}
                      className={`mt-4 text-base leading-relaxed text-dark/80 ${shouldClamp ? 'line-clamp-4' : ''}`}
                    >
                      {review.review_text}
                    </p>

                    <button
                      type="button"
                      className={`mt-4 inline-flex items-center text-sm font-semibold text-red underline-offset-4 focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 focus:ring-offset-cream ${
                        isDuplicate ? 'pointer-events-none opacity-0' : ''
                      }`}
                      aria-controls={`review-text-${baseIndex}`}
                      aria-expanded={isExpanded}
                      onClick={() => toggleReview(baseIndex)}
                      tabIndex={isDuplicate ? -1 : 0}
                    >
                      {isExpanded ? 'Show less' : 'Read more'}
                    </button>
                  </article>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
