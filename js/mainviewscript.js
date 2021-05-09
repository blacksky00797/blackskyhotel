let imgRotateSec = 10;
let hotelImgIndex=0;
let hotelImgPath = "img/";
let hotelImgList = [
    hotelImgPath+"hotel1.jpg",
    hotelImgPath+"hotel2.jpg",
    hotelImgPath+"hotel3.jpg",
    hotelImgPath+"hotel4.jpg",
    hotelImgPath+"hotel5.jpg",
    hotelImgPath+"hotel6.jpg",
    hotelImgPath+"hotel7.jpg",
];
let getHotelImg = $(".hotelImg");

$("#rotating-text").Morphext({
    animation: "zoomIn",
    separator: ",",
    speed: 2000,
    complete: function() {

    }
});

changeHotelImageBackgroundAlgorithm();

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
});

function changeHotelImageBackgroundAlgorithm() {
    for ( let id=0 ; id<7200 ; id++ ) {
        setTimeout( () => {
            getHotelImg.css("filter","brightness(0%)");
            
            setTimeout(() => {
                getHotelImg.attr("src",hotelImgList[hotelImgIndex]);
                getHotelImg.css("filter","brightness(50%)");
            }, 1000);
            ++hotelImgIndex;
            if ( hotelImgIndex == hotelImgList.length ) hotelImgIndex=0;
        },id*(imgRotateSec*1000)); 
        
    }
}


