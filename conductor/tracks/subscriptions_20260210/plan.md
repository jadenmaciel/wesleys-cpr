# Implementation Plan - CPR Training Subscriptions

## Phase 1: Data Model & Types
- [x] Task: Update Course Data
    - [x] Create/Update unit tests for `src/data/courses.ts` to expect new Subscription entries.
    - [x] Add "CPR Training Subscriptions" (Monthly & Quarterly) to `src/data/courses.ts`.
    - [x] Add necessary type definitions for "Target Audience" fields if strictly typed.
    <!-- 2d1c83f -->
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Data Model & Types' (Protocol in workflow.md)

## Phase 2: Pricing Card Component Enhancements
- [ ] Task: Add "Featured" Support to PricingCard
    - [ ] Create unit test for `PricingCard` component to verify "featured" styling/prop.
    - [ ] Implement `featured` prop in `PricingCard.tsx` (e.g., distinct border, badge, or background) to highlight subscription options.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Pricing Card Component Enhancements' (Protocol in workflow.md)

## Phase 3: Integration (Services & Pricing Sections)
- [ ] Task: Update Services Display
    - [ ] Update `Services.test.tsx` to verify presence of Subscription service and specific target audience list (Nursing, Clinics, etc.).
    - [ ] Implement rendering logic in `Services.tsx` to include the new Subscription entry.
- [ ] Task: Update Pricing Display
    - [ ] Update `App.test.tsx` or `Pricing.tsx` tests to verify presence of new Monthly/Quarterly cards.
    - [ ] Implement rendering logic in `Pricing.tsx` to display the new cards using the `featured` prop.
    - [ ] Verify "Enroll Today" CTA links to Booky.buzz correctly.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Integration (Services & Pricing Sections)' (Protocol in workflow.md)

## Phase 4: Final Verification
- [ ] Task: Responsive & Accessibility Check
    - [ ] Verify layout on mobile, tablet, and desktop.
    - [ ] Run accessibility audit (axe/lighthouse) on new elements.
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Final Verification' (Protocol in workflow.md)
