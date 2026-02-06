# Specification: Finalize Website To-Do List & Polish

## Overview
This track focuses on completing the remaining tasks outlined in `DOCS/WEBSITE_TODO.md`. The goal is to polish the existing marketing site, update critical business information (pricing, schedules), and implement essential marketing features (SEO, Analytics, Google Reviews).

## Functional Requirements
### 1. Marketing & Discovery
- **SEO Optimization:** Implement/improve SEO tags, meta descriptions, and structured data.
- **Analytics Integration:** Add Umami Analytics (privacy-conscious tracking tool).
- **Google Reviews:** Integrate a widget or custom section to showcase real student reviews.

### 2. Content & Accuracy
- **Pricing Updates:**
    - BLS Renewal: Update from $100 to **$85**.
    - BLS Provider: Update from $100 to **$110**.
    - American Red Cross BLS: **$125**.
    - American Red Cross Heartsaver: **$140**.
- **Schedule Updates:**
    - BLS Renewal: Mon-Wed at 1:00 PM.
    - BLS Provider: Mon & Wed at 8:00 AM.
- **Certification Wording:** Ensure clear distinction between AHA and American Red Cross certifications; ensure both are noted on certification cards/references.

### 3. Service Prominence & Audience Targeting
- **Service Highlighting:** Redesign or adjust sections to push BLS, Heartsaver, and group classes more prominently.
- **Audience Emphasis:** Tailor copy to explicitly mention businesses, schools, and specific industries (e.g., parks).

### 4. Mobile & Workplace Training
- **Class Size Enforcement:** Clearly state min 4 / max 24 for mobile/workplace classes.
- **Categorization:** Separate AHA (4-18 students) and American Red Cross (4-24 students) into distinct tabs or sections.
- **Pricing Alignment:** Ensure mobile/workplace pricing matches the new individual rates.

## Non-Functional Requirements
- **Maintain >80% Test Coverage:** Ensure all new logic (pricing calculations, tab switching) is covered by unit tests.
- **Mobile Responsiveness:** All UI changes must be verified on mobile viewports.
- **Performance:** Ensure third-party widgets (Reviews, Analytics) do not significantly degrade page load speeds.

## Acceptance Criteria
- [ ] All pricing displayed on the site matches the updated values in `spec.md`.
- [ ] SEO meta tags are present and accurate for all primary pages/routes.
- [ ] Umami Analytics is successfully receiving events (verified in dev console).
- [ ] Google Reviews are visible and styled according to the project's visual identity.
- [ ] AHA and Red Cross sections are clearly separated and display correct class size limits.

## Out of Scope
- **Digital Waivers:** As per `WEBSITE_TODO.md`, waivers remain in-person only for this track.
- **Payment Gateway Implementation:** Only pricing display and policy wording are updated; the booking iframe (Booky.buzz) handles the transaction logic.
