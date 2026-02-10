# Specification: CPR Training Subscriptions

## 1. Overview
This feature introduces a new "CPR Training Subscriptions" service offering targeting healthcare organizations (Nursing facilities, Clinics, Detox facilities). It aims to provide a cost-effective, recurring training solution. The offering will be integrated into the existing **Services** and **Pricing** sections of the website, utilizing existing design patterns while adding visual highlights to distinguish it as a new/featured service.

## 2. Functional Requirements

### 2.1 Dedicated Subscriptions Section
- **New Section:** Create a dedicated visual section (e.g., `SubscriptionsSection`) on the landing page.
- **Placement:** This section should be prominent, likely positioned after the "Pricing" or "Services" section.
- **Content:**
    - **Headline:** Clear title "CPR Training Subscriptions".
    - **Target Audience:** Explicitly list "Nursing facilities, Clinics, Detox facilities".
    - **Value Prop:** "Ensure your team is prepared..."
    - **Pricing Cards:** Display the two options (Monthly $120, Quarterly $200) side-by-side within this section.
    - **Call to Action:** "Enroll Today" buttons linking to Booky.buzz.

### 2.2 Data Management
- Update `src/data/courses.ts` to include the new subscription service types (Completed in Phase 1).

## 3. Non-Functional Requirements
- **Consistency:** Use existing `PricingCard` components (or similar style) within the new section.
- **Responsiveness:** Section must be fully responsive (stacking cards on mobile).
- **Accessibility:** Section headings and structure must follow semantic HTML.

## 4. Acceptance Criteria
- [ ] A new "CPR Training Subscriptions" section appears on the main page.
- [ ] The section contains the target audience list and value proposition.
- [ ] Monthly ($120) and Quarterly ($200) options are displayed clearly in this section.
- [ ] "Enroll Today" buttons function correctly.
- [ ] The standard Services and Pricing sections remain unchanged (do not include subscriptions there).

## 5. Out of Scope
- Creating a separate page (kept as single-page section).
- Mixing subscriptions into the main Pricing table.
