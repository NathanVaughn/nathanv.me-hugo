# nathanv.me
[![Build Status](https://github.com/NathanVaughn/nathanv.me/workflows/Build/badge.svg)](https://github.com/NathanVaughn/nathanv.me/actions?workflow=Build)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/NathanVaughn/nathanv.me.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/NathanVaughn/nathanv.me/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/NathanVaughn/nathanv.me.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/NathanVaughn/nathanv.me/context:javascript)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5aa3bcdc68514799ab98e8f67e8c29c1)](https://www.codacy.com/manual/NathanVaughn/nathanv.me?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=NathanVaughn/nathanv.me&amp;utm_campaign=Badge_Grade)

My portfolio website

## Cloning

```bash
git clone https://github.com/NathanVaughn/nathanv.me.git
npm install
```

## npm scripts

### svgmin

Minifies all SVG files that the theme uses. Only need to run when new SVG files are added

### critical

Visits `http://localhost:1313` to generate the critical CSS. `hugo serve` is automatically stopped and started.

### build:js

Minifies JS

### build:css

Polyfills and minifies CSS

### minify

Minifies output HTML file

### beautify

Beautifies output HTML file

### build

This script:
1. Runs `build:js` and `build:css`
2. Runs `hugo` to generate the site
3. Runs `beautify` to beautify the output HTML
4. Removes the ` public/assets/icons` folder as all SVG icons are inlined
