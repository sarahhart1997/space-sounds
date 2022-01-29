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
    "Sound 1",
    "Sound 2",
    "Sound 3",
    "Sound 4",
    "Sound 5",
    "Sound 6",
    "Sound 7",
    "Sound 8",
    "Sound 9",
]
//TO BE ERASED: Calls index in array (replace with button call)
var mySound = sounds[8]
//saving to Storage function (probably will require parameter)
var savingToStorage = function(){
    localStorage.setItem(myArr, mySound);
}
//calls saving Storage function
savingToStorage();
//gets youtube video
var getYt = function() {
    // format the github api url
    // var apiUrl = "https://youtube.googleapis.com/youtube/v3/search?channelId=UCvp2nA5u8vapl0iC_qDH2cA&key=AIzaSyDZ9fGPHgNx9yGoHa1Xc2oi-Xl5sIP1Umc";
    var apiUrl = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=juno&channelId=UC_aP7p621ATY_yAa8jMqUVA&key=AIzaSyDZ9fGPHgNx9yGoHa1Xc2oi-Xl5sIP1Umc"
    // var apiUrl = "https://youtube.googleapis.com/youtube/v3/search?channelId=UCjTzujpWCXoUAe5Nk5tkSFA&key=AIzaSyDZ9fGPHgNx9yGoHa1Xc2oi-Xl5sIP1Umc";
    console.log(apiUrl);
    // make a get request to url
    fetch(apiUrl).then(function(response) {
    // request was successful
        if (response.ok) {
            response.json().then(function(data) {
            // displayIssues(data);
                console.log(apiUrl);
                var blah = document.createElement("iframe");
                console.log(blah);
                var stores = document.querySelector("h2");
                blah.setAttribute("id","new-video");
                // var videoare = document.querySelector("#new-video");
                // console.log(videoare);
                blah.src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
                // videoare.src = `https://www.youtube.com/embed/d9uxl_7_nWs`;
                stores.appendChild(blah);
            });
        } else {
            // if not successful, redirect to homepage
            document.location.replace("./index.html");
        }  
    });
};

getYt();

//getting what is in local storage
var savingToStorage = function(){
    localStorage.getItem(myArr, mySound);
    // getYt(mySound);
    
}

//TO DO: event listener for image