# nathanv.me
![Build Status](https://github.com/NathanVaughn/nathanv.me/workflows/Build/badge.svg)

My portfolio website

## Cloning

```
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
