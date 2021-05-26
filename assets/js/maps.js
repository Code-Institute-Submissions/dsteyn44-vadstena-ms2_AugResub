//create center coordinate this code is created Pradip Debnath
//*map = new google.maps.Map(document.getElementById('map'), {
  //center: {lat: -34.397, lng: 150.644},
  //zoom: 8,
  //mapId: 'a06b13e576ffa52d'
//});*/

//Setting your Variables for the center
//------The Town location in Sweden------//
//----All credit to Eamon smytth and Pradip Debnath--//
var map;
var InfoObj =[];
var cenCoords = {
    lat: 58.448,
    lng: 14.889
};

window.onload = function () {//makes it open up quick 
initMap();
};
//We are calling this function on the window.load above
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: cenCoords,
    zoom: 5,
  });
//addTownInfo();
const townMark = {"lat": 58.448, "lng": 14.889, "name": "Vadstena", "icon":'assets/images/vadstena-pointer.svg',};//figured out how to a my icon -took me forever!

//Used beacon for my name for the marker
const beacon = new google.maps.Marker({
  position: new google.maps.LatLng(townMark.lat, townMark.lng),
  map:map,
  title: townMark.name,
  animation: google.maps.Animation.DROP,
  icon: townMark.icon,
  });
//making the call for the event listener// 
const infowindow = new google.maps.InfoWindow ({
content:'<h2 style="color: black;">Vadstena</h2>'+ '<p>The beautiful city</p>' + '<img src="assets/images/town.png">',//infomation for the info-window
});
//almost gave up on the event listener!! 
beacon.addListener("click", () => {
    infowindow.open(beacon.get('map'), beacon);
    });
}
///
//-----------"MUST-SEE" SITES------------//
//We are calling this function on the window.load above
function siteMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: cenCoords,
    zoom: 15,
  });
addSiteInfo();
}

//Add the event listener for the botton
document.getElementById("btn-parking").addEventListener("click",siteMap);
//function parkingSites() {
    //var parkingMap = new google.maps.Map(document.getElementById("map"), {
        //center: cenCoords,
       // zoom: 6,
    //});
//Googles custom icons - can use 
//var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

//you could also use in this circumstance
//event: {
//icon: 'URL...'
//},
//restaurant: {
//icon: 'URL...'
//},
//};

var icons = {
  site: {
    icon: 'assets/images/site-icon.png'
  },
};
//Add the information for the sites. we have defined as markerSite.
var markerSite = [
  {
    placeName: 'Saint Birgitta\'s Monastery',
    information: 'The museum is located in the so-called Folkungaättens palace, a royal palace built in the 1260s. It is the Nordic region\'s, perhaps northern Europe\'s best preserved medieval palace and Sweden\'s first profane brick building. Large parties, tournaments and political meetings were held here.',
    image: '<img src="assets/images/monastery.png" style="width: 25px, height: 25px;">',
    LatLng: [{
      lat: 58.45146933933863,
      lng: 14.891471457116726
    }],
    type:'site'
},

{
    placeName: 'Vadstena Castle',
    information: 'The Castle was originally built by King Gustav I in 1545 as a fortress to protect Stockholm from enemies approaching from the South. Since 1620, the castle has been very well preserved, and is one of Sweden\'s best examples of Renaissance architecture. Vadstena Castle was a royal palace until 1716, when the royal family lost interest in it after which it became a storage barn for grain.',
    image: '<img src="assets/images/castle-air.png" style="width: 25px, height: 25px;">',
    LatLng: [{
      lat: 58.44601892145026,
      lng: 14.883571690993277
    }],
    type:'site'
},

{
    placeName: 'Vadstena Town Hall',
    information: 'The Oldest town hall in Sweden and believed to be the 3rd oldest in Europe. The town hall construction date is referred to as 1490 and was the seat of the local government until the 1970s.',
    image: '<img src="assets/images/town-hall.png" style="width: 25px, height: 25px;">',
    LatLng: [{
      lat: 58.447198953180575,
      lng: 14.88761373316239
    }],
    type:'site'
},

{
    placeName: 'Mårten Skinnare\'s House',
    information: 'Mårten Skinnare is the author of the strange building Mårten Skinnares hus from the 16th century. Originally built to care for sick, poor and weary pilgrims. It is from here that mental health care later emerges.',
    image: '<img src="assets/images/martin.png" style="width: 25px, height: 25px;">',
    LatLng: [{
      lat: 58.451697812573116,
      lng: 14.894286406680505
    }],
    type:'site'
},

{
    placeName: 'Vadstena Abbey',
    information: 'The Abbey of Our Lady and of St. Bridget, more commonly referred to as Vadstena Abbey, situated on Lake Vättern in the Diocese of Linköping, Sweden, was the motherhouse of the Bridgettine Order.The abbey started on one of the farms donated to it by the king, but the town of Vadstena grew up around it. It was active from 1346 until 1595. Today it is one of the biggest attractions.',
    image: '<img src="assets/images/church.png" style="max-width: 100%, height: 25px;">',
    LatLng: [{
      lat: 58.450810760361286,
      lng: 14.890794120035338
    }],
    type:'site'
},
];
//creates a loop that array that will run for elements markersOn Map
function addSiteInfo() {
  for( var i = 0; i < markerSite.length; i++) {
    //adding more information for info window in the form of content string
    var contentString = '<h3 style="color: black;">' + markerSite[i].placeName + '</h3>' + '<p style="color: black; text-align: justify;">' + markerSite[i].information + '</p>' + markerSite[i].image ;

  const marker = new google.maps.Marker({
      position: markerSite[i].LatLng[0],
      icon: icons [markerSite[i].type].icon,
      title: markerSite[i].placeName,
      map: map, 
      animation: google.maps.Animation.DROP,
    });
//Adding the info window from google
 const infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 300 //in pixels the width of the infowindow
  });
//Adding the event listener - from Googole
  marker.addListener("click", () => {
    closeOtherInfo();
    infowindow.open(marker.get('map'), marker);
    InfoObj[0] = infowindow;//this is used to clear previous information when clicking on another marker.We previously created a info Object at the top.
  });
}
//create a function to make the marker value as null whenever it loads 
function closeOtherInfo() {
  if(InfoObj.length > 0) {
  InfoObj[0].set("marker", null);//then close the marker 
  InfoObj[0].close();
  InfoObj[0].length = 0;
  }
}
}

//-----------"MUST-SEE" SITES------------//