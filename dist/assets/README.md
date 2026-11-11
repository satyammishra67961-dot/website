# Hero assets

The full-screen hero section looks for these files here:

| File | Purpose | Required |
| --- | --- | --- |
| `hero-video.mp4` | Cinematic background video (MP4 / H.264 recommended) | Optional |
| `hero-poster.png` | Poster image shown before the video loads / as fallback | Included |

## Adding the hero video

1. Put your video in this folder and name it exactly **`hero-video.mp4`**.
2. Keep it small. GitHub rejects individual files over **100 MB** and repositories
   should stay well under 1 GB. Aim for a compressed clip under ~15–25 MB.
3. Commit and redeploy. The hero automatically plays it once it loads.

If `hero-video.mp4` is missing, the site gracefully falls back to a branded
gradient + `hero-poster.png` background — nothing breaks.

## Compression tips

- Export MP4 with **H.264** + AAC audio (or no audio).
- 1080p, ~24–30 fps, CRF 23–28, 6–12 seconds is plenty for a loop.
- Optional alternative: also provide `hero-video.webm` (VP9) and add a
  `<source>` line in `src/components/Hero.jsx`.

## Large videos

If your clip is too large for GitHub, host it externally (e.g. Cloudinary,
Bunny, S3) and point the hero `<source src>` at that URL instead.
