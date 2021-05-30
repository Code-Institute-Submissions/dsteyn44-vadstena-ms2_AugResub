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
    zoom: 6,
  });
//addTownInfo();
const townMark = {"lat": 58.448, "lng": 14.889, "name": "Vadstena", "icon":'assets/images/vmark.svg',};//figured out how to a my icon -took me forever!

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
content:'<h2 style="color: black;">Vadstena</h2>'+ '<p style="color: black;"> Hej! Welcome to the beautiful town of Vadstena in Östergötland Sweden. There is so much to see so click on any of the portals to get going.</p>' + '<img src="assets/images/town.png">',//infomation for the info-window
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
document.getElementById("btn-site").addEventListener("click",siteMap);
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

var points = {
  site: {
    icon: 'assets/images/pillarpng.png'
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
    image: '<img src="assets/images/new-castle.png" style="width: 25px, height: 25px;">',
    LatLng: [{
      lat: 58.44601892145026,
      lng: 14.883571690993277
    }],
    type:'site'
},

{
    placeName: 'Vadstena Town Hall',
    information: 'The Oldest town hall in Sweden and believed to be the 3rd oldest in Europe. The town hall construction date is referred to as 1490 and was the seat of the local government until the 1970s.',
    image: '<img src="assets/images/hall.png" style="width: 25px, height: 25px;">',
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
    image: '<img src="assets/images/kchurch.png" style="max-width: 100%, height: 25px;">',
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
    var contentString = '<h3 style="color: black;">' + markerSite[i].placeName + '</h3>' + '<p style="color: black; text-align: justify;">' + markerSite[i].information + '</p>' + markerSite[i].image;

  const markerB = new google.maps.Marker({
      position: markerSite[i].LatLng[0],
      icon: points [markerSite[i].type].icon,
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
  markerB.addListener("click", () => {
    closeOtherInfo();
    infowindow.open(markerB.get('map'), markerB);
    InfoObj[0] = infowindow;//this is used to clear previous information when clicking on another marker.We previously created a info Object at the top.
  });
}
//create a function to make the marker value as null whenever it loads 
function closeOtherInfo() {
  if(InfoObj.length > 0) {
  InfoObj[0].set("markerB", null);//then close the marker 
  InfoObj[0].close();
  InfoObj[0].length = 0;
  }
}
}

//-----------"RESTAURANT" SITES------------//
function restMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: cenCoords,
    zoom: 15,
  });
addRestInfo();
}

//Add the event listener for the botton
document.getElementById("btn-eat").addEventListener("click", restMap);

var icons = {
  restaurants: {
    icon: 'assets/images/dinePng.png',
  },
};
//Add the information for the sites. we have defined as markerSite.
var markerRest = [
  {
    placeName: 'Bakgatan $$$ ****',
    information: 'Quaint restaurant in the back street. Serves local  fusion food and great beers',
    image: '<img src="assets/images/bakgatan.png" style="width: 25px, height: 25px;">',
    LatLng: [{
      lat: 58.448710,
      lng: 14.889413
    }],
    type:'restaurants'
},

{
    placeName: 'Borgmästern $$ **',
    information: 'Centrally located gastropub and sports bar. Typical pub fare and great beers.',
    image: '<img src="assets/images/borgmaster.png" style="width: 25px, height: 25px;">',
    LatLng: [{
      lat: 58.44601892145026,
      lng: 14.883571690993277
    }],
    type:'restaurants'
},

{
    placeName: 'Rådhuskällaren $$ **',
    information: 'Located at the old town hall, it serves typical pub fare and local dishes. Great Beer!',
    image: '<img src="assets/images/kallen.png" style="width: 25px, height: 25px;">',
    LatLng: [{
      lat: 58.447146583493584,
      lng: 14.887741724686729
    }],
    type:'restaurants'
},

{
    placeName: 'Hörnet $$$ *****',
    information: 'Translated to \"Corner\", this one not to be missed... if you can afford it. Fusion Gastromony in a homey atmosphere. Best coctail bar in town',
    image: '<img src="assets/images/hornet.png" style="width: 25px, height: 25px;">',
    LatLng: [{
      lat: 58.44883,
      lng: 14.89435
    }],
    type:'restaurants'
},

{
    placeName: 'Munkens Restaurang $$$ ****',
    information: 'This is the restaurant to the Hotel. great service and a fantastic wine list is paired with fantastic soul food. Reasonably priced. Great bar upstairs and great lounge during summer',
    image: '<img src="assets/images/munkens.png" style="max-width: 100%, height: 25px;">',
    LatLng: [{
      lat: 58.45031599493132,
      lng: 14.890632079588977
    }],
    type:'restaurants'
},
];
//creates a loop that array that will run for elements markersOn Map
function addRestInfo() {
  for( var i = 0; i < markerRest.length; i++) {
    //adding more information for info window in the form of content string
    var contentString = '<h3 style="color: black;">' + markerRest[i].placeName + '</h3>' + '<p style="color: black; text-align: justify;">' + markerRest[i].information + '</p>' + markerRest[i].image ;

  const marker = new google.maps.Marker({
      position: markerRest[i].LatLng[0],
      icon: icons [markerRest[i].type].icon,
      title: markerRest[i].placeName,
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

//-----------"STAY" SITES------------//
function stayMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: cenCoords,
    zoom: 14,
  });
addStayInfo();
}

//Add the event listener for the botton
document.getElementById("btn-stay").addEventListener("click",stayMap);

var labels = {
  hotels: {
    label: 'assets/images/housepng.png',
  },
};
//Add the information for the sites. we have defined as markerSite.
var markerStay = [
  {
    placeName: ' Vadstena Kloster Hotel $$$ ****',
    information: 'The hotel and Restaurant Munkklostret are housed in some of Sweden\s oldest buildings; St. Birgitta\'s Monastery from the 14th century and Birger Jarl\'s princely palace from the 13th century and the King\'s Hall from 1253. Quaint with a touch of elegance.',
    image: '<img src="assets/images/kloster.png" style="width: 25px, height: 25px;">',
    LatLng: [{
      lat: 58.45031599493132,
      lng: 14.890632079588977
    }],
    type:'hotels'
},

{
    placeName: 'Stårby $$ ***',
    information: 'Quaint hotel located a little outside of town. Food is well served and reooms are spacious.',
    image: '<img src="assets/images/starby.png" style="width: 25px, height: 25px;">',
    LatLng: [{
      lat: 58.44153683720099,
      lng: 14.879127679714298
    }],
    type:'hotels'
},

{
    placeName: ' Sjögården $ **',
    information: 'Centrally located. This quaint B & B  offers well comfortable rooms and friendly service',
    image: '<img src="assets/images/sjor.png" style="width: 25px, height: 25px;">',
    LatLng: [{
      lat: 58.447508791970435,
      lng: 14.88678809334407
    }],
    type:'hotels'
},

{
    placeName: 'Hotel Slottsgården $ **',
    information: 'Located just outside Vadstena Castle. Rooms are comfortable and include a nautical theme. Service is friendly',
    image: '<img src="assets/images/slottsgarden.png" style="width: 25px, height: 25px;">',
    LatLng: [{
      lat: 58.44474794971851,
      lng: 14.88181783206976
    }],
    type:'hotels'
},

];
//creates a loop that array that will run for elements markersOn Map
function addStayInfo() {
  for( var i = 0; i < markerStay.length; i++) {
    //adding more information for info window in the form of content string
    var contentString = '<h3 style="color: black;">' + markerStay[i].placeName + '</h3>' + '<p style="color: black; text-align: justify;">' + markerStay[i].information + '</p>' + markerStay[i].image ;

  const markerA = new google.maps.Marker({
      position: markerStay[i].LatLng[0],
      icon: labels [markerStay[i].type].label,
      title: markerStay[i].placeName,
      map: map, 
      animation: google.maps.Animation.DROP,
    });
//Adding the info window from google
 const infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 300 //in pixels the width of the infowindow
  });
//Adding the event listener - from Googole
  markerA.addListener("click", () => {
    closeOtherInfo();
    infowindow.open(markerA.get('map'), markerA);
    InfoObj[0] = infowindow;//this is used to clear previous information when clicking on another marker.We previously created a info Object at the top.
  });
}
//create a function to make the marker value as null whenever it loads 
function closeOtherInfo() {
  if(InfoObj.length > 0) {
  InfoObj[0].set("markerA", null);//then close the marker 
  InfoObj[0].close();
  InfoObj[0].length = 0;
  }
}

}

//-----------"SHOP" SITES------------//
function shopMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: cenCoords,
    zoom: 17,
  });
addShopInfo();
}

//Add the event listener for the botton
document.getElementById("btn-shop").addEventListener("click",shopMap);

var tabs = {
  shops: {
    tab: 'assets/images/presentpng.png',
  },
};
//Add the information for the sites. we have defined as markerSite.
var markerShop = [
  {
    placeName: 'Manfreds $$$ ****',
    information: 'Iconic highend elegant men\'s wear shop featuring brands such as Gant, Oscar of Sweden and Ralph Lauren. Great selection of suits',
    image: '<img src="assets/images/manfreds.png" style="width: 25px, height: 25px;">',
    LatLng: [{
      lat: 58.4482176772895,
      lng: 14.889506023892594
    }],
    type:'shops'
},

{
    placeName: 'Mrs. Manfreds $$$ ****',
    information: 'Iconic highend Lady\'s brands, featuring Lexington, Scotch & Soda and Gant.',
    image: '<img src="assets/images/mrs-manfreds.png" style="width: 25px, height: 25px;">',
    LatLng: [{
      lat: 58.44819,
      lng: 14.88959

    }],
    type:'shops'
},

{
    placeName: 'Kopp & Kanna $ ****',
    information: 'Great Home Decor store that will suit all your home needs.',
    image: '<img src="assets/images/koppa.png" style="width: 25px, height: 25px;">',
    LatLng: [{
      lat: 58.447866565927654,
      lng: 14.889000564334662
    }],
    type:'shops'
},

{
    placeName: 'Vadstena Blommor $ ***',
    information: 'Quaint flower shop that has a few bits and bobs inside too',
    image: '<img src="assets/images/blommor.png" style="width: 25px, height: 25px;">',
    LatLng: [{
      lat: 58.44752554248506,
      lng: 14.888766328472473
    }],
    type:'shops'
},

{
    placeName: 'Stilepok $ **',
    information: 'Quaint home decor/home hardware store.',
    image: '<img src="assets/images/stil.png" style="width: 25px, height: 25px;">',
    LatLng: [{
      lat: 58.44822057673208,
      lng: 14.889817619555906
    }],
    type:'shops'
},

];
//creates a loop that array that will run for elements markersOn Map
function addShopInfo() {
  for( var i = 0; i < markerShop.length; i++) {
    //adding more information for info window in the form of content string
    var contentString = '<h3 style="color: black;">' + markerShop[i].placeName + '</h3>' + '<p style="color: black; text-align: justify;">' + markerShop[i].information + '</p>' + markerShop[i].image ;

  const markerB = new google.maps.Marker({
      position: markerShop[i].LatLng[0],
      icon: tabs [markerShop[i].type].tab,
      title: markerShop[i].placeName,
      map: map, 
      animation: google.maps.Animation.DROP,
    });
//Adding the info window from google
 const infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 300 //in pixels the width of the infowindow
  });
//Adding the event listener - from Googole
  markerB.addListener("click", () => {
    closeOtherInfo();
    infowindow.open(markerB.get('map'), markerB);
    InfoObj[0] = infowindow;//this is used to clear previous information when clicking on another marker.We previously created a info Object at the top.
  });
}
//create a function to make the marker value as null whenever it loads 
function closeOtherInfo() {
  if(InfoObj.length > 0) {
  InfoObj[0].set("markerB", null);//then close the marker 
  InfoObj[0].close();
  InfoObj[0].length = 0;
  }
}

}