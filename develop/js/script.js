//TO BE UPDATED WITH QUERY SELECTORS: Set up array
var arr = ["Saturn","Juno","Kepler","Atmosphere","Ganymede","Titan","Radio","Echo","Rover"];

console.log(arr[4]);

var getPhoto = function() {
    // format the github api url
    var apiUrl = `https://images-api.nasa.gov/search?q=${arr[4]}`;

    // make a get request to url
    fetch(apiUrl).then(function(response) {
    // request was successful
        if (response.ok) {
            response.json().then(function(data) {
            // displayIssues(data);
                var imagine = document.querySelector("img");
                imagine.src = data.collection.items[1].links[0].href;
            });
        } else {
            // if not successful, redirect to homepage
            document.location.replace("./index.html");
        }  
    });
};

getPhoto();