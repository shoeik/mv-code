# Scroll Service Switcher

## Selected Video

- `video/画面収録 2026-06-07 6.48.17-640.mp4`

## Observed Interaction

The video shows a `What We Do` section where the active service changes based on scroll position.

## Motion Flow

1. The section starts with `WEBサイト・ホームページ制作`.
2. As the page scrolls, the left image changes and the text switches to `WEBマーケティング・集客支援`.
3. A vertical two-dot indicator on the right marks the active service.
4. Scrolling back or continuing through the section changes the active state again.

## Implementation Notes

- Use a sticky service section with internal scroll range.
- Track scroll progress and map it to the active service index.
- Animate the image with fade and slight horizontal movement.
- Animate the copy with fade and small vertical movement.
- Keep a right-side vertical dot indicator synced with the active service.

## Interaction Name

`scroll-service-switcher`
