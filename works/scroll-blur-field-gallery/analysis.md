# Scroll Blur Field Gallery

## Selected Video

- `video/画面収録 2026-06-15 9.09.42-640.mp4`

## Observed Interaction

The video shows a recruiting or corporate site section entering from a large facility photo into an `Our Field` content area. The key interaction is that the heading, explanatory text, and large image cards become sharp as the user scrolls.

## Motion Flow

1. A wide industrial/facility image fills the upper part of the viewport.
2. A large white rounded content section scrolls into view.
3. `Our Field`, small Japanese category text, and the explanatory copy are initially blurred.
4. As scroll progress increases, the text sharpens with `filter: blur()` only.
5. Two large image cards are also blurred at first and become clear at slightly staggered scroll ranges.
6. Card labels and circular arrow links sit below each image.
7. The section continues scrolling toward the next large visual block.

## Implementation Notes

- Use scroll progress to set CSS custom properties for blur radius.
- Apply the interaction only with `filter: blur(...)`.
- Do not animate or change `opacity` for the blur targets.
- Do not animate or change `transform` for the blur targets.
- Stagger heading, copy, and each image by mapping scroll progress to different ranges.
- Preserve the airy white section, rounded top corners, two-column image grid, and small circular CTA buttons.

## Interaction Name

`scroll-blur-field-gallery`
