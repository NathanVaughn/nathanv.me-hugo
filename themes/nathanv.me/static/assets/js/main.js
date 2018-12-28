// lazyloading config
window.lazySizesConfig = window.lazySizesConfig || {};
lazySizesConfig.preloadAfterLoad = false;

// initialize carousels after modal loads
init_carosuels = function () {
    elems = document.querySelectorAll('.carousel');
    options = {
        fullWidth: false,
        indicators: true
    };
    M.Carousel.init(elems, options);
};

document.addEventListener('DOMContentLoaded', function () {
    // sidenav
    elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);

    // collpasible content
    elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);

    // tabs for the projects
    elems = document.querySelectorAll('.tabs');
    M.Tabs.init(elems);

    // project modals
    elems = document.querySelectorAll('.modal');
    options = {
        onOpenEnd: init_carosuels
    };
    M.Modal.init(elems, options);

    // mix it up
    mixitup('.mix-container');

    // scrollspy for navbar
    elems = document.querySelectorAll('.scrollspy');
    options = {
        scrollOffset: 75
    };
    M.ScrollSpy.init(elems, options);

    // tooltips for social media
    elems = document.querySelectorAll('.tooltipped');
    options = {
        margin: 25
    };
    M.Tooltip.init(elems, options);
});