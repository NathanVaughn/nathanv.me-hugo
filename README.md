# nathanv.me-hugo

## npm scripts

### svgmin

Minifies all SVG files that the theme uses. Only need to run when new SVG files are added

### critical

Visits `http://localhost:1313` to generate the critical CSS. `hugo serve` needs to have been started in another terminal before this is run.

### build:js

Minifies JS

### build:css

Polyfills and minifies CSS

### minify

Minifies output HTML file

### build

This script:
1. Goes into the `public` directory and updates the git submodule
2. Removes all contents of the `public` folder
3. Runs `build:js` and `build:css`
4. Runs `hugo` to generate the site
5. Runs `minify` to minify the output HTML
6. Removes the ` public/assets/icons` folder as all SVG icons are inlined
7. Creates a file called `CNAME` with the contents being `nathanv.me` for GitHub.

### deploy

This script can take an argument of a commit message such as:

```
npm run script deploy -- "Message goes here"
```

This script simply goes into the `public` directory and adds, commits, and pushes the contents.

