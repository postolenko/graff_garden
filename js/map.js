ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){   
    myMap = new ymaps.Map("map", {
        center: [55.807805, 37.476339],
        zoom: 14
    });

    myPlacemark = new ymaps.Placemark([55.807805, 37.476339], { 
        hintContent: 'Garden Graf', 
        balloonContent: 'Ландшафтный дизайн'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [40, 40],
        iconImageOffset: [0, 0]
    });

    myMap.behaviors
    .disable(['scrollZoom', 'rightMouseButtonMagnifier']);

    myMap.geoObjects.add(myPlacemark);

    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('zoomControl');
    myMap.behaviors.disable(['scrollZoom']);

}