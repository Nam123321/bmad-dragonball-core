# Hero Specification

## Overview
- **Target file:** `src/components/cloned/Hero.tsx`
- **Interaction model:** Static with click-driven download button

## DOM Structure
- `section` (Hero root)
  - `div` (Content container)
    - `h1` (Main headline wrapper)
      - `span` (Quote)
      - `span` (Translation)
    - `p` (Lead paragraph)
    - `div` (Action group)
      - `button` (Download Free)
      - `p` (Platform labels)

## Computed Styles (exact values from tokens)

### Container (section)
- display: `flex`
- minHeight: `100vh`
- position: `relative`
- backgroundColor: `transparent` // Navy inherited from body

### Headline Quote (span 1)
- fontSize: `72px`
- fontWeight: `300`
- lineHeight: `72px`
- letterSpacing: `-0.4px`
- color: `rgb(255, 255, 255)`

### Headline Sub (span 2)
- fontSize: `36px`
- fontWeight: `500`
- lineHeight: `40px`
- letterSpacing: `-0.4px`
- color: `rgb(255, 255, 255)`

### Lead Paragraph (p)
- fontSize: `20px`
- fontWeight: `400`
- lineHeight: `32.5px`
- color: `rgb(115, 135, 174)`

### Download Button (button)
- fontSize: `18px`
- fontWeight: `500`
- lineHeight: `28px`
- padding: `16px 32px`
- borderRadius: `9999px`
- backgroundColor: `rgb(255, 255, 255)`
- color: `rgb(0, 0, 0)`

## States & Behaviors
### Hover state for Button
- **Trigger:** mouse entering button area
- **State A:** `backgroundColor: rgb(255,255,255)`
- **State B:** `backgroundColor: rgb(230,230,230)` (Approximate, depending on site opacity)
- **Transition:** `all 0.2s ease`

## Text Content (verbatim)
“Gnôthi Seautón”
Know Thyself.
OpenGnothia is an AI-powered psychotherapy support application designed strictly for your eyes only.
Download Free
Open source · macOS, Windows, Linux

## Responsive Behavior
- **Desktop (1440px):** Two column flex or centered with heavy max-width.
- **Mobile (390px):** Content stacks vertically, headline font-sizes scale down to `48px` / `24px`.
