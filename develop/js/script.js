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
//get Photo function
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
//
var savingToStorage = function(){
    localStorage.setItem(myArr, mySound);
}
//calls saving Storage function
savingToStorage();

