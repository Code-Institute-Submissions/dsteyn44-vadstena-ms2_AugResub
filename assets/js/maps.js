//**declare fuction**
function myMap() {

    //myProp variables define size of map

    const mapProp = {
        //the center property defines the center of the map*/
        //We use the LatLng constructor from the Map class
    center: new google.maps.LatLng(53, 5),

    //Set ZOOM level of Map
    zoom: 5,

    };
//Creates A new Map inside the div that has the ID of #map
// It then call the propertiesnto see how to render
const map = new google.maps.Map(document.getElementById("map"), mapProp)

//add your marker coordinates

const myMarks = [{"lat": 58.4482176772895, "lng": 14.889506023892594},

]

for(let i=0; i < myMarks.length; i++) {


const marker = new google.maps.Marker({position: myMarks[i]});

marker.setMap(map);
}

}



//Call the map
myMap();