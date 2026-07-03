# People Card Focus Gallery

## Selected Video

- `video/画面収録 2026-06-15 9.21.40-640.mp4`

## Observed Interaction

The video shows a recruiting site people gallery. Four occupation/person cards sit below a fixed header. The default view is a monochrome, darkened four-column grid. When a card becomes active, that card expands into a wide color image while inactive cards remain dimmed or slide behind the active image.

## Motion Flow

1. A white header with the `SCOPE RECRUITING 2027` brand and navigation remains fixed at the top.
2. Four people cards are shown in equal columns.
3. Each card has a grayscale portrait/photo, a centered occupation label, and a small green arrow button.
4. On focus/hover/rotation, one card expands into a large color photo.
5. The active card removes grayscale and dark overlay.
6. Inactive cards compress, darken, or sit behind the active image.
7. The transition uses overlapping layers, giving a crossfade/slide feel between people.
8. A centered `ALL VIEW` button remains below the gallery.

## Implementation Notes

- Render people cards from a data array.
- Use CSS grid columns to switch between equal columns and active-focused column widths.
- Apply grayscale and dark overlay to inactive cards.
- Remove grayscale and most of the overlay for the active card.
- Support hover, focus, click, keyboard arrows, and auto-rotation.
- Preserve the fixed white recruitment header and bottom `ALL VIEW` CTA.

## Interaction Name

`people-card-focus-gallery`
