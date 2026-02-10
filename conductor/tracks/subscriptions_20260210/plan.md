# Implementation Plan - CPR Training Subscriptions

## Phase 1: Data Model & Types [checkpoint: 93de4f1]
- [x] Task: Update Course Data
    - [x] Create/Update unit tests for `src/data/courses.ts` to expect new Subscription entries.
    - [x] Add "CPR Training Subscriptions" (Monthly & Quarterly) to `src/data/courses.ts`.
    - [x] Add necessary type definitions for "Target Audience" fields if strictly typed.
    <!-- 2d1c83f -->
- [x] Task: Conductor - User Manual Verification 'Phase 1: Data Model & Types' (Protocol in workflow.md)

## Phase 2: Subscriptions Section Component
- [x] Task: Create SubscriptionsSection Component
    - [x] Create `src/components/SubscriptionsSection.test.tsx` and write failing tests (verify rendering of title, target audience, and pricing cards).
    - [x] Create `src/components/SubscriptionsSection.tsx`.
    - [x] Implement the layout: Title, Target Audience list, and a grid for the two pricing cards.
    - [x] Reuse `PricingCard` (or similar logic) to display the subscription options from `COURSES` data.
    <!-- 31d74dd -->
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Subscriptions Section Component' (Protocol in workflow.md)

## Phase 3: Integration
- [ ] Task: Add to Landing Page
    - [ ] Update `App.test.tsx` to verify `SubscriptionsSection` is rendered.
    - [ ] Import and place `SubscriptionsSection` in `App.tsx` (e.g., after Pricing or Services).
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Integration' (Protocol in workflow.md)

## Phase 4: Final Verification
- [ ] Task: Responsive & Accessibility Check
    - [ ] Verify layout on mobile, tablet, and desktop.
    - [ ] Run accessibility audit (axe/lighthouse) on new elements.
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Final Verification' (Protocol in workflow.md)
