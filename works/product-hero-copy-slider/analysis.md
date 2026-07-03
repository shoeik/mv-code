# Product Hero Copy Slider

## Selected Video

- `video/画面収録 2026-06-02 15.02.17-640.mp4`

## Observed Interaction

The video shows a product hero slider transition. The implementation focuses on the image/card transition and the white copy animation, without recreating the fixed header, logo, navigation, search, or menu UI.

## Motion Flow

1. A full-bleed product visual appears with a large white multi-line copy.
2. The page background turns red and the first visual contracts into a rounded card.
3. The old copy exits one line at a time by moving downward through a fixed line mask.
4. The first card slides left while the next product card enters from the right.
5. The new card expands into the full hero visual.
6. The new copy appears from below using line masks.
7. Each new line has a slight delay, and individual characters have a subtle stagger delay.

## Implementation Notes

- Use `overflow: hidden` line masks rather than opacity or horizontal wipes.
- Old copy: each line translates downward out of its mask.
- New copy: each character translates upward from below inside its line mask.
- Keep image transition separate from copy transition.
- Use extracted video frames as local visual assets.

## Interaction Name

`product-hero-copy-slider`
