# Implementation Plan: Finalize Website To-Do List & Polish

## Phase 1: Content & Pricing Alignment
Update all static data and core logic to reflect the new pricing and scheduling reality.

- [x] Task: Update course data in `src/data/courses.ts` df7872d
    - [ ] Update BLS Renewal price to $85
    - [ ] Update BLS Provider price to $110
    - [ ] Update American Red Cross BLS price to $125
    - [ ] Update American Red Cross Heartsaver price to $140
    - [ ] Update schedule copy for BLS Renewal and Provider
- [x] Task: Update mobile/workplace training details e40a50f
    - [ ] Implement separate sections/tabs for AHA vs Red Cross
    - [ ] Enforce class size limits (4-18 for AHA, 4-24 for Red Cross) in UI copy
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Content & Pricing Alignment' (Protocol in workflow.md)

## Phase 2: Marketing & Discovery Features
Integrate SEO, Analytics, and Social Proof.

- [ ] Task: SEO Optimization
    - [ ] Write Tests: Verify meta tags are rendered correctly in `App.tsx` or specialized SEO component
    - [ ] Implement: Update `react-helmet-async` usage with descriptive meta tags and Open Graph data
- [ ] Task: Analytics Integration
    - [ ] Implement: Add Google Analytics initialization script (respecting environment variables)
- [ ] Task: Google Reviews Integration
    - [ ] Write Tests: Verify Review component renders list of reviews
    - [ ] Implement: Create a `Reviews` section/component using data from `src/data/reviews.ts` (or external widget if provided)
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Marketing & Discovery Features' (Protocol in workflow.md)

## Phase 3: UI/UX Polishing & Audience Targeting
Refine the layout to emphasize key services and target audiences.

- [ ] Task: Refine Service Highlighting
    - [ ] Update `Services.tsx` or `Hero.tsx` to push BLS/Heartsaver/Group classes
- [ ] Task: Audience Targeting Copy
    - [ ] Update copy in `About.tsx` or a new section to explicitly target businesses and schools
- [ ] Task: Conductor - User Manual Verification 'Phase 3: UI/UX Polishing & Audience Targeting' (Protocol in workflow.md)
