//TO BE UPDATED WITH QUERY SELECTORS: Set up array
var arr =  ["Saturn in Red",
            "Juno Gets Ready to Shake It",
            "The Kepler Spacecraft",
            "Earth Atmosphere Observations",
            "Ganymede Trailing Hemisphere",
            "A Wafer of Titan",
            "Amateur Radio",
            "Echo Test",
            "Rover Driving Test"];

var myArr = arr[8]

console.log(myArr);
console.log(arr.length);

var getPhoto = function() {
    // format the github api url
    var apiUrl = `https://images-api.nasa.gov/search?q=${myArr}`;

    // make a get request to url
    fetch(apiUrl).then(function(response) {
    // request was successful
        if (response.ok) {
            response.json().then(function(data) {
            // displayIssues(data);
                var imagine = document.querySelector("img");
                imagine.src = data.collection.items[0].links[0].href;
            });
        } else {
            // if not successful, redirect to homepage
            document.location.replace("./index.html");
        }  
    });
};

getPhoto();