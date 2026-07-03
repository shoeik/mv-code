# Circle Work Carousel

## Selected Video

- `video/画面収録 2026-06-07 6.45.45-640.mp4`

## Observed Interaction

The video shows a top-page work carousel with a large circular image mask.

## Motion Flow

1. A work item is shown in the center as a large circular image.
2. The navigation stays fixed at the top.
3. The carousel advances to the next work.
4. The circle image changes inside the mask.
5. The title, year/category line, active dot, tag label, and lower-right news strip update with the active work.

## Implementation Notes

- Use a small data array for each work item.
- Keep a large circular visual centered on the page.
- Animate the image with opacity and scale.
- Animate the title with a clipped or translate-in reveal.
- Sync the active dot and side labels with the current index.
- Include pause/play and dot controls.

## Interaction Name

`circle-work-carousel`
