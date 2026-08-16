# Qwen synthesis notes — colab_2

- **Model:** `Qwen/Qwen3.5-9B`
- **Intermediate reference:** `reference.png`
- **Final cumulative goal:** `../preview.jpg`
- **Viewport:** 1440 × 1056

> This file records a concise, externally verifiable implementation summary,
> not private model chain-of-thought.

## Implementation summary

# Implementation Summary: Step 2 — Rounded Application Shell

## 1. What this stage visibly adds
- A centered, warm-white application frame (the "shell") that contains all subsequent UI elements.
- Rounded corners on the shell boundary.
- A subtle border and a broad, layered drop shadow to create depth.
- The shell acts as a visual clipping boundary (content inside is hidden if it overflows).

## 2. Layout and sizing assumptions
- **Viewport:** 1440 × 1056px (desktop reference).
- **Shell Width:** Fixed at `1300px` on desktop, but fluid (responsive) below that width.
- **Shell Positioning:** Centered horizontally.
- **Shell Height:** Spans the full viewport height (`100vh`).
- **Responsive Behavior:** On screens narrower than 1300px, the shell width adjusts to `calc(100vw - 8.7rem)` to maintain margins.

## 3. Reset and box-sizing decisions
- **Box Sizing:** `border-box` is used globally to ensure padding and borders are included in the element's total width and height.
- **Reset:** Standard CSS reset is applied to remove default browser margins and padding.

## 4. Colors, typography, and supplied assets
- **Background Color:** Neutral 50 (`hsl(35, 60%, 96%)`) or Neutral 100 (`hsl(30, 24%, 93%)`) — a warm off-white.
- **Border Color:** Likely Neutral 200 or 400 for a subtle outline.
- **Typography:** Inherits fonts from previous steps (Fraunces, DM Sans, DM Mono).
- **Assets:** No new assets are introduced in this stage.

## 5. Verification checklist for a 1440×1056 render
- [ ] The shell is centered horizontally on the screen.
- [ ] The shell width is exactly 1300px.
- [ ] The shell has rounded corners (check radius value).
- [ ] The shell has a subtle border (check color and width).
- [ ] The shell has a broad, layered drop shadow (check blur radius and offset).
- [ ] There is no horizontal or vertical overflow visible within the shell.
- [ ] The page contains a `<style>` element and no external stylesheet link.
- [ ] The background outside the shell matches the previous step's canvas/background.
