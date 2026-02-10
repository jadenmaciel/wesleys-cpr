# Specification: CPR Training Subscriptions Section

## 1. Overview
This feature introduces a new, standalone section to the single-page website dedicated to "CPR Training Subscriptions." This service targets healthcare organizations (Nursing facilities, Clinics, Detox facilities) and offers recurring training options. The section will be designed to stand out as a new offering while maintaining the site's clean aesthetic.

## 2. Functional Requirements

### 2.1 Subscription Section Layout
- **Component:** Create a new `SubscriptionsSection` component.
- **Placement:** Insert this section on the main page (e.g., between "Services" and "Pricing" or effectively where it fits the flow).
- **Content:**
    - **Header:** Title "CPR Training Subscriptions" with a visual "New Service" badge/indicator.
    - **Description:** "Join our CPR training subscriptions to receive comprehensive guidance and scenarios..." (adapted from flyer).
    - **Target Audience:** Explicitly list: "Nursing facilities, Clinics, Detox facilities".
    - **Value Prop:** "Enroll today and ensure your team is prepared for any situation..."

### 2.2 Pricing Display
- Display two distinct subscription tiers side-by-side:
    1.  **Monthly:** $120
    2.  **Quarterly:** $200
- **Action Buttons:** "Enroll Today" button for each option.
- **Action Behavior:** Both buttons will link to the general Booky.buzz booking page (as per user direction).

## 3. Non-Functional Requirements
- **Visual Style:** "Standard Clean Style" — Consistent with the existing white/light theme but using typography and a "New" badge to draw attention (avoiding the heavy dark blue/red contrast of the flyer).
- **Responsiveness:** The layout must adapt to mobile devices (stacking the pricing cards).
- **Accessibility:** Ensure proper heading hierarchy and button labels.

## 4. Acceptance Criteria
- [ ] A new "CPR Training Subscriptions" section is rendered on the homepage.
- [ ] The section includes the "New Service" highlight/badge.
- [ ] Correct pricing ($120 Monthly, $200 Quarterly) is displayed.
- [ ] "Enroll Today" buttons navigate to the general booking URL.
- [ ] The section lists the target audience (Nursing facilities, Clinics, etc.).
- [ ] The design is responsive and matches the site's clean aesthetic.

## 5. Out of Scope
- Creating a separate page (kept as a section on the main page).
- Integrating specific deep links for each subscription type (using general link for now).
