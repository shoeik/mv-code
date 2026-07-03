# People Card Focus Gallery

## Selected Video

- `video/画面収録 2026-06-15 9.21.40-640.mp4`

## Observed Interaction

The video shows a recruiting site people gallery. Four occupation/person cards sit below a fixed header. The interpreted implementation uses the active card as the full gallery background image, while the four cards remain as foreground selection panels.

## Motion Flow

1. A white header with the `SCOPE RECRUITING 2027` brand and navigation remains fixed at the top.
2. Four people cards are shown in equal columns.
3. Each card has a grayscale portrait/photo, a centered occupation label, and a small green arrow button.
4. On focus/hover/click, the selected person's photo becomes the full background of the list area.
5. The active column keeps a lighter overlay.
6. Inactive columns remain darker foreground panels over the shared active background.
7. There is no auto-rotation; the user controls the active state.
8. A centered `ALL VIEW` button remains below the gallery.

## Implementation Notes

- Render people cards from a data array.
- Use one full-size background layer for the active person.
- Keep four equal foreground panels as the selectable list.
- Darken inactive panels and keep the active panel lighter.
- Support hover, focus, click, and keyboard arrows.
- Remove responsive layout rules for now so mobile also shows the desktop-width layout.
- Preserve the fixed white recruitment header and bottom `ALL VIEW` CTA.

## Interaction Name

`people-card-focus-gallery`
