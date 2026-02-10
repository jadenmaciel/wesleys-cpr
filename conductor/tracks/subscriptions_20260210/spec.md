# Specification: CPR Training Subscriptions

## 1. Overview
This feature introduces a new "CPR Training Subscriptions" service offering targeting healthcare organizations (Nursing facilities, Clinics, Detox facilities). It aims to provide a cost-effective, recurring training solution. The offering will be integrated into the existing **Services** and **Pricing** sections of the website, utilizing existing design patterns while adding visual highlights to distinguish it as a new/featured service.

## 2. Functional Requirements

### 2.1 Services Section Update
- **New Service Entry:** Add "CPR Training Subscriptions" to the list of services.
- **Target Audience Display:** Explicitly list the target facility types:
    - Nursing facilities
    - Clinics
    - Detox facilities
- **Description:** Include the value proposition: "Ensure your team is prepared for any situation by receiving expert training and support."

### 2.2 Pricing Section Update
- **New Pricing Cards:** Add two new pricing options for subscriptions:
    - **Monthly:** $120
    - **Quarterly:** $200
- **Visual Highlight:** Apply a "Featured" or "New" badge/highlight style to these subscription cards to differentiate them from standard one-time classes.
- **Call to Action (CTA):** Each card must have an "Enroll Today" button that opens/links to the existing Booky.buzz booking widget.

### 2.3 Data Management
- Update `src/data/courses.ts` (or equivalent data file) to include the new subscription service types and pricing details to ensuring a single source of truth.

## 3. Non-Functional Requirements
- **Consistency:** Use existing `PricingCard` and service layout components.
- **Responsiveness:** Ensure new content renders correctly on mobile, tablet, and desktop.
- **Accessibility:** Ensure new buttons and content meet existing accessibility standards (contrast, focus states, ARIA labels).

## 4. Acceptance Criteria
- [ ] The "CPR Training Subscriptions" service appears on the Services page/section with the correct description and target audience.
- [ ] Two new pricing cards (Monthly $120, Quarterly $200) appear in the Pricing section.
- [ ] The subscription pricing cards have a distinct "Featured" or "New" visual indicator.
- [ ] Clicking "Enroll Today" on a subscription card opens the Booky.buzz booking widget.
- [ ] The implementation uses the shared data source in `src/data/`.

## 5. Out of Scope
- Creating a separate dedicated landing page for subscriptions.
- Implementing a custom payment processing flow (relies on existing Booky.buzz).
- Custom design that deviates significantly from the existing design system.
