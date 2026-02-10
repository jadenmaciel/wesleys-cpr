# Implementation Plan - CPR Training Subscriptions

## Phase 1: Subscription Section Component [checkpoint: 47ed772]
- [x] Task: Create SubscriptionsSection Structure [6db02ea]
    - [x] Create `src/components/SubscriptionsSection.test.tsx` and write failing tests (verify rendering of title, "New Service" badge, and pricing options).
    - [x] Create `src/components/SubscriptionsSection.tsx`.
    - [ ] Implement the layout: Title with "New" badge, description, and target audience list.
    - [ ] Implement the Pricing grid (Monthly $120, Quarterly $200) matching the "Standard Clean Style".
    - [ ] Ensure "Enroll Today" buttons link to the general booking URL.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Subscription Section Component' (Protocol in workflow.md)

## Phase 2: Integration & Placement
- [ ] Task: Integrate into Main Page
    - [ ] Update `App.test.tsx` (or main page test) to verify the new section is present.
    - [ ] Import `SubscriptionsSection` in `App.tsx`.
    - [ ] Place the component in the desired location (e.g., between Services and Pricing, or after Pricing).
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Integration & Placement' (Protocol in workflow.md)

## Phase 3: Final Polish
- [ ] Task: Responsive & Accessibility Audit
    - [ ] Verify the section stacks correctly on mobile.
    - [ ] Check color contrast and semantic heading structure.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Final Polish' (Protocol in workflow.md)
