//TO BE UPDATED WITH QUERY SELECTORS: Set up array
var arr = [
    "Saturn in Red",
    "Juno Gets Ready to Shake It",
    "The Kepler Spacecraft",
    "Earth Atmosphere Observations",
    "Ganymede Trailing Hemisphere",
    "A Wafer of Titan",
    "Amateur Radio",
    "Echo Test",
    "Rover Driving Test"
];
//TO BE ERASED: Calls index in array (replace with button call)
var myArr = arr[8]
//TO BE ERASED: Console logs index string of array
console.log(myArr);
console.log(arr.length);
//get Photo function (will probably require parameter)
var getPhoto = function() {
    // format the nasa image api url
    var apiUrl = `https://images-api.nasa.gov/search?q=${myArr}`;

    // make a get request to url
    fetch(apiUrl).then(function(response) {
    // request was successful
        if (response.ok) {
            response.json().then(function(data) {
                // query selector for image
                var imagine = document.querySelector("img");
                //gives the src a value
                imagine.src = data.collection.items[0].links[0].href;
            });
        } else {
            // if not successful, redirect to homepage
            document.location.replace("./index.html");
        }  
    });
};
//calls function getPhoto
getPhoto();
//TO BE UPDATED WITH SOUNDS OR VIDEO NAMES: creates sound array
sounds = [
    "saturn",
    "juno",
    "kepler",
    "atmosphere",
    "ganymede",
    "titan",
    "radio",
    "echo",
    "rover",
]
//TO BE ERASED: Calls index in array (replace with button call)
var mySound = sounds[8];
console.log(mySound);
//gets youtube video
var getYt = function(sound) {
    // format the youtube url
    var apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${sound}&channelId=UC_aP7p621ATY_yAa8jMqUVA&key=AIzaSyDZ9fGPHgNx9yGoHa1Xc2oi-Xl5sIP1Umc`;
    //TO BE ERASED: Console log apiURL variable
    console.log(apiUrl);
    // make a get request to url
    fetch(apiUrl).then(function(response) {
    // request was successful
        if (response.ok) {
            response.json().then(function(data) {
                //creates iframe
                var iframeEl = document.createElement("iframe");
                //console logs iframe
                console.log(iframeEl);
                //query selects h2
                var h2El = document.querySelector("h2");
                //creates ID for iframe
                iframeEl.setAttribute("id","new-video");
                // gives iframe a source
                iframeEl.src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
                //appends iframe to H2
                h2El.appendChild(iframeEl);
            });
        } else {
            // if not successful, redirect to homepage
            document.location.replace("./index.html");
        }  
    });
};


//getting what is in local storage
var loadFromStorage = function(){
    //gets from local storage
    localStorage.getItem(myArr, mySound);
    //console logs the value
    console.log(mySound);
    //calls get YT function with mySound variable
    getYt(mySound);
    
}

//saving to Storage function (probably will require parameter)
var savingToStorage = function(){
    //saves to local storage
    localStorage.setItem(myArr, mySound);
    //calls load from local storage
    loadFromStorage();
}
//calls saving Storage function
savingToStorage();

//TO DO: event listener for image