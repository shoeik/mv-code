# People Card Focus Gallery

## Selected Video

- `video/画面収録 2026-06-15 9.21.40-640.mp4`

## Observed Interaction

The video shows a recruiting site people gallery. Four occupation/person cards sit below a fixed header. The interpreted implementation starts with four independent card images. On hover or focus, the active card image becomes the full gallery background.

## Motion Flow

1. A white header with the `SCOPE RECRUITING 2027` brand and navigation remains fixed at the top.
2. Four people cards are shown in equal columns.
3. Each card has a grayscale portrait/photo, a centered occupation label, and a small green arrow button.
4. On focus/hover, the selected person's photo becomes the full background of the list area.
5. Only the active column keeps its label and arrow visible.
6. Inactive columns remain as darker foreground hit areas without labels.
7. There is no auto-rotation; the user controls the active state.
8. A centered `ALL VIEW` button remains below the gallery.

## Implementation Notes

- Render people cards from a data array.
- Use Picsum images for clearer visual distinction.
- In the initial state, each card shows its own background image and label.
- Use one full-size background layer only while a card is active.
- Keep four equal foreground panels as hit areas.
- Hide inactive labels and arrows while active.
- Support hover, focus, keyboard arrows, and Escape.
- Remove responsive layout rules for now so mobile also shows the desktop-width layout.
- Preserve the fixed white recruitment header and bottom `ALL VIEW` CTA.

## Interaction Name

`people-card-focus-gallery`
