# Logo Loading Transition

## Selected Video

- `video/logo-loading.mp4`

## Observed Interaction

The video shows a page transition with a full-screen logo loading state.

1. A project/detail page is visible first.
2. The page transitions into a white full-screen overlay.
3. A centered `F&S CREATIONS` logo appears.
4. The logo fades out.
5. The overlay clears and a blue hero page is revealed.

## Motion Notes

- The loading screen is minimal and white.
- The brand mark is centered horizontally and vertically.
- The logo appears after the page is already mostly white.
- The logo fade is soft and brief.
- The final hero page fades in underneath the loading layer.

## Implementation Notes

- Use a fixed full-screen loading layer above the page.
- Drive the sequence with CSS classes and timed JavaScript.
- Keep the logo centered and high contrast.
- Fade the page content in after the loader exits.
- Include a replay control for testing the interaction repeatedly.

## Interaction Name

`logo-loading-transition`
