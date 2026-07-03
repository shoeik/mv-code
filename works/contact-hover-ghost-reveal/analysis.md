# Contact Hover Ghost Reveal

## Selected Video

- `video/画面収録 2026-06-07 6.14.38-640.mp4`

## Observed Interaction

The relevant interaction is the hover behavior on the centered `Contact` heading. The page itself scrolls in the recording, but the implementation target is only the heading hover moment.

## Motion Flow

1. The default heading shows a black dot followed by `Contact`.
2. A small yellow custom cursor approaches the heading.
3. When the cursor enters the heading area, the dot fades toward gray.
4. The `Contact` text gains a ghost layer that slips downward, making the letters feel doubled and slightly masked.
5. The cursor position subtly affects the ghost layer, so the distortion feels tied to the pointer.
6. When the cursor leaves, the dot returns to black and the ghost layer collapses back into the original text.

## Implementation Notes

- Keep the scene minimal: white background, fixed header marks, thin rules, centered heading.
- Use a custom yellow cursor that follows pointer movement with easing.
- Split the heading into a main text layer and a clipped ghost text layer.
- Trigger the hover state on the heading group.
- Let pointer position update CSS variables for a small directional text offset.
- Keep the interaction accessible by preserving a normal pointer fallback on coarse pointers.

## Interaction Name

`contact-hover-ghost-reveal`
