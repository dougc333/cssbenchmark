# Qwen synthesis notes — colab_6

- **Model:** `Qwen/Qwen3.5-9B`
- **Intermediate reference:** `reference.png`
- **Final cumulative goal:** `../preview.jpg`
- **Viewport:** 1440 × 1056

> This file records a concise, externally verifiable implementation summary,
> not private model chain-of-thought.

## Implementation summary

# Step 6 — Receipt Card Implementation Plan

## 1. What this stage visibly adds
- A centered, tilted receipt card with a subtle drop shadow.
- Booking metadata: check-in/out dates, times, and room details.
- Itemized charges using a `<dl>` list (room, breakfast, tax).
- Total paid amount and payment method line.
- A barcode graphic at the bottom right.
- Subtle horizontal dashed lines to mimic paper texture.

## 2. Layout and sizing assumptions
- The receipt is absolutely positioned within the hero container (inherited from Step 5).
- Desktop: centered horizontally, tilted ~3° clockwise, with a soft shadow.
- Mobile: centered, no tilt, full width or constrained max-width.
- Font sizes:
  - Dates: 24px (bold)
  - Labels: 12px (uppercase, spaced)
  - Charges: 14px
  - Total: 28px (bold, serif)
- Spacing: generous padding inside the receipt to mimic paper.

## 3. Reset and box-sizing decisions
- Use `box-sizing: border-box` globally.
- Reset margins/padding on `body`, `h1`, `ul`, `li`, `img`.
- No external CSS files — all styles in `<style>` tag.

## 4. Colors, typography, and supplied assets
- **Typography**:
  - Headings: Fraunces (400/italic)
  - Body: DM Sans (400/500/600)
  - Monospace labels: DM Mono (400)
- **Colors**:
  - Text: Neutral 900 / 800
  - Total: Neutral 900 (bold)
  - Dashed lines: Neutral 200
- **Assets**:
  - `../assets/images/icon-barcode.svg` — placed at bottom right of receipt.

## 5. Verification checklist (1440×1056)
- [ ] Receipt is centered and tilted ~3° on desktop.
- [ ] No horizontal/vertical overflow in viewport.
- [ ] All dates, times, and charges match reference.
- [ ] Total amount (€730.40) is bold and prominent.
- [ ] Barcode is visible and correctly positioned.
- [ ] Dashed lines are subtle and don’t distract.
- [ ] No external `<link>` for CSS — only `<style>` tag.
- [ ] Mobile view: receipt is upright and readable.
