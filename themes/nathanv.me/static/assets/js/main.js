// lazyloading config
window.lazySizesConfig = window.lazySizesConfig || {};
lazySizesConfig.preloadAfterLoad = false;

document.addEventListener('DOMContentLoaded', function () {
    // sidenav
    elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);

    // scrollspy for navbar
    elems = document.querySelectorAll('.scrollspy');
    options = {
        scrollOffset: 75
    };
    M.ScrollSpy.init(elems, options);

    // collpasible content
    elems = document.querySelectorAll('.collapsible.popout');
    M.Collapsible.init(elems, {
        accordion: false
    });

    // tabs for the projects
    elems = document.querySelectorAll('.tabs');
    M.Tabs.init(elems);

    // mix it up
    mixitup('.mix-container');

    // project modals
    elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);

    // image lightboxes
    elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems);

    // tooltips for social media
    elems = document.querySelectorAll('.tooltipped');
    options = {
        margin: 25
    };
    M.Tooltip.init(elems, options);
});