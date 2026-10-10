Link: https://pranavjoglekarcodes.web.app/

A static site built with [Eleventy](https://www.11ty.dev/) and Alpine.js.

## Run locally

```
npm install
npm start
```

Open http://localhost:8080.

## Where things live

- `_data/` - site text, projects and experience
- `posts/` - blog posts (`index.mdx` plus images, one folder per post)
- `static/` - files served as-is (favicon, resume, images used inside posts)
- `css/style.css` - all styles
- `*.njk` - page templates, with the shared layout in `_includes/base.njk`

## Deploy

```
npm run build
firebase deploy
```
