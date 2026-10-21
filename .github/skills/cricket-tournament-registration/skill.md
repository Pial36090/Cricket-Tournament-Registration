---
name: cricket-tournament-registration
description: Use when updating the static cricket tournament registration website, including form logic, responsive styling, accessibility fixes, or branding updates without introducing server-side dependencies.
---

# Cricket Tournament Registration

## Purpose

Maintain the tournament registration demo as a dependency-free website that runs by opening `index.html` in a browser. This project is a front-end prototype for a cricket tournament and should remain lightweight, accessible, and clearly labeled as a local demo.

## Working rules

- Keep the site dependency-free and runnable with no build step.
- Preserve keyboard accessibility, responsive behavior, and visible labels for all form controls.
- Keep the local demo notice clear so users understand that form data remains in the browser only.
- Do not present browser-only form storage as a real registration submission to organizers.
- Replace sample tournament branding with official details before launch.
- Prefer small, targeted updates that match the existing HTML, CSS, and JavaScript structure.

## Project layout

- `index.html`: page structure, sections, forms, and content
- `site.css`: visual design, layout, and responsive behavior
- `script.js`: client-side validation and browser-only state handling
- `README.md`: run instructions and project notes

## Typical tasks

- Update tournament name, season, and leadership copy.
- Add or adjust validation rules while keeping accessible error messaging.
- Improve the experience for mobile and keyboard users.
- Refine success states without implying backend submission.
- Ensure the demo remains usable offline or in a simple local preview.

## Quality bar

Before considering a change complete:

1. Confirm the website still opens directly in a browser.
2. Check that interactive elements remain usable with a keyboard.
3. Keep all textual warnings and disclaimers accurate.
4. Ensure no code introduces dependencies, build tooling, or fake server submissions.
5. Verify any branding text is consistent with the official tournament details.
