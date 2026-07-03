# Works List Hover Preview

## Selected Video

- `video/画面収録 2026-06-07 6.50.13-640.mp4`

## Observed Interaction

The video shows a `Works` section with a project list on the left and a synchronized preview panel on the right.

## Motion Flow

1. The page scrolls from a service section into the works list.
2. A dark works table appears with project rows.
3. The active row controls the background color, preview image, and circular `view more` button.
4. The preview image changes with a subtle fade/slide.
5. The circular button changes color per project and stays near the preview image.
6. The section can continue scrolling through more rows.

## Implementation Notes

- Use a data array for works.
- Render rows from data.
- Set active row on hover, focus, click, and keyboard navigation.
- Update background color, preview card, and circular CTA based on active work.
- Use generic placeholder visuals and generic text while preserving layout and behavior.

## Interaction Name

`works-list-hover-preview`
