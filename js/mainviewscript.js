$("#rotating-text").Morphext({
    animation: "zoomIn",
    separator: ",",
    speed: 2000,
    complete: function() {

    }
});

let mainNavBar = $(".main-nav-bar");
let secondaryNavBar = $(".secondary-nav-bar");
let menuButton = $(".main-nav-bar .nav-bar-menu");
let closeButton = $(".secondary-nav-bar .closeButton");

menuButton.click( () => {
    mainNavBar.css("visibility","hidden");
    secondaryNavBar.css("visibility","visible");
    secondaryNavBar.css("opacity","1");
});
closeButton.click( () => {
    mainNavBar.css("visibility","visible");
    secondaryNavBar.css("visibility","hidden");
    secondaryNavBar.css("opacity","0");
})