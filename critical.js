var critical = require('critical');
critical.generate({
    // Inline the generated critical-path CSS
    // - true generates HTML
    // - false generates CSS
    inline: false,

    // Your base directory
    base: 'themes/nathanv.me/static/assets/',

    // HTML source file
    src: 'http://localhost:1313',

    dimensions: [{
                width: 375,
                height: 600
            },
            {
                width: 768,
                height: 1024
            },
            {
                width: 1024,
                height: 1500
            },
            {
                width: 1920,
                height: 1080
            }
        ],

    // Target for final HTML output.
    // use some CSS file when the inline option is not set
    dest: 'css/critical.min.css',

    // Minify critical-path CSS when inlining
    minify: true,

    // Extract inlined styles from referenced stylesheets
    extract: false,

    // Complete Timeout for Operation
    timeout: 30000,

    ignore: ['iframe.lazyload'],
});