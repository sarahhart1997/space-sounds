//query selects h2
var vesselEl = document.querySelector("#vessel");
var photovesselEl = document.querySelector("#photo-container");
var audiovesselEl = document.querySelector("#audio-container");
var videovesselEl = document.querySelector("#video-container");
var buttonsEl = document.querySelector("#photo-buttons")
//TO BE UPDATED WITH QUERY SELECTORS: Set up array
var num = 1;
//TO BE ERASED: array of button names
// var arr = [
//     "Saturn in Red",
//     "Liftoff Apollo 11",
//     "The Kepler Spacecraft",
//     "Earth Atmosphere Observations",
//     "Ganymede Trailing Hemisphere",
//     "Sputnik Planum",
//     "Stardust",
//     "Voyager of Jupiter",
//     "Rover Driving Test",
//     "Frost on Mars",
// ];
//sets array of medias
var myMedias = function(txt){
    switch(txt){
        case "Saturn in Red":
            var mediaNum = {
                video: "saturn",
                sound: "saturn.mp3",
            };
            // var mediaNum = "blue";
            return mediaNum;
            break;
        case "Liftoff Apollo 11":
            var mediaNum = {
                video: "apollo 11",
                sound: "apollo11.mp3",
            };
            return mediaNum;
            break;
        case "The Kepler Spacecraft":
            var mediaNum = {
                video: "kepler",
                sound: "kepler_star_KIC12268220C.mp3",
            };
            // var mediaNum = "blue";
            return mediaNum;
            break;
        case "Earth Atmosphere Observations":
            var mediaNum = {
                video: "complex earth atmosphere",
                sound: "atmosphere.mp3",
            };
            return mediaNum;
            break;
        case "Ganymede Trailing Hemisphere":
            var mediaNum = {
                video: "ganymede",
                sound: "ganymede.mp3",
            };
            // var mediaNum = "blue";
            return mediaNum;
            break;
        case "Sputnik Planum":
            var mediaNum = {
                video: "sputnik",
                sound: "sputnik.mp3",
            };
            return mediaNum;
            break;
        case "Stardust":
            var mediaNum = {
                video: "stardust",
                sound: "stardust.mp3",
            };
            // var mediaNum = "blue";
            return mediaNum;
            break;
        case "Voyager of Jupiter":
            var mediaNum = {
                video: "voyager",
                sound: "voyager_jupiter_lightning.mp3",
            };
            return mediaNum;
            break;
        case "Rover Driving Test":
            var mediaNum = {
                video: "rover",
                sound: "roverdriving.mp3",
            };
            // var mediaNum = "blue";
            return mediaNum;
            break;
        case "Frost on Mars":
            var mediaNum = {
                video: "frost on mars",
                sound: "Mars-sound.mp3",
            };
            return mediaNum;
            break;
    };
}
//     [
//     {
//         video: "saturn",
//         sound: "saturn.mp3",
//     },
//     {
//         video: "apollo 11",
//         sound: "apollo11.mp3",
//     },
//     {
//         video: "kepler",
//         sound: "kepler_star_KIC12268220C.mp3",
//     },
//     {
//         video: "complex earth atmosphere",
//         sound: "atmosphere.mp3",
//     },
//     {
//         video: "ganymede",
//         sound: "ganymede.mp3",
//     },
//     {
//         video: "sputnik",
//         sound: "sputnik.mp3",
//     },
//     {
//         video: "stardust",
//         sound: "stardust.mp3",
//     },
//     {
//         video: "voyager",
//         sound: "voyager_jupiter_lightning.mp3",
//     },
//     {
//         video: "rover",
//         sound: "roverdriving.mp3",
//     },
//     {
//         video: "frost on mars",
//         sound: "Mars-sound.mp3",
//     }
// ];
//TO BE ERASED: Calls index in array (replace with button call)
// var myArr = arr[num];

//TO BE ERASED: Console logs index string of array
// console.log(myArr);
// console.log(arr.length);
//get Photo function (will probably require parameter)

var getPhoto = function(event) {
    //gets targets ids of the button clicked
    var buttonClicked = event.target.getAttribute("id");
    console.log(buttonClicked);
    if(buttonClicked === null){
        return;
    }
    //clears container element
    // vesselEl.innerHTML ="";
    photovesselEl.innerHTML="";
    //gets text of the button by the id
    var buttonText = document.getElementById(buttonClicked).textContent.trim();
    if (document.getElementById(buttonClicked).textContent) {
    console.log(buttonText);
    // format the nasa image api url
    var apiUrl = `https://images-api.nasa.gov/search?q=${buttonText}&media_type=image`;

    // make a get request to url
    fetch(apiUrl).then(function (response) {
        // request was successful
        if (response.ok) {
            response.json().then(function (data) {
            var imageEl = document.createElement("img");
            imageEl.setAttribute("id","photo-folder");
            // query selector for image
            //gives the src a value
            imageEl.src = data.collection.items[0].links[0].href;
            imageEl.width = "400";
            photovesselEl.appendChild(imageEl);
            vesselEl.appendChild(photovesselEl);
            savingToStorage(buttonText);
            // vesselEl.appendChild(imageEl);
        });
        } else {
        // if not successful, redirect to homepage
            document.location.replace("./index.html");
        }
    });
}
};
//TO BE ERASED: probably with switch case or if else statement
// var mediaNum = myMedias[num];
// console.log(mediaNum);
//gets youtube video

var getYt = function (vid) {
    // format the youtube url
    // var apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${vid}&channelId=UC_aP7p621ATY_yAa8jMqUVA&key=AIzaSyDZ9fGPHgNx9yGoHa1Xc2oi-Xl5sIP1Umc`;
    // //TO BE ERASED: Console log apiURL variable
    // console.log(apiUrl);
    // // make a get request to url
    // fetch(apiUrl).then(function (response) {
    //     // request was successful
    //     if (response.ok) {
    //         response.json().then(function (data) {
    //         //creates iframe
    //         var iframeEl = document.createElement("iframe");
    //         iframeEl.innerHTML ="";
    //         //console logs iframe
    //         console.log(iframeEl);
    //         //creates ID for iframe
    //         iframeEl.setAttribute("id", "new-video");
    //         // gives iframe a source
    //         iframeEl.src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
    //         //appends iframe to H2
    //         // videovesselEl.appendChild(iframeEl);
    //         // vesselEl.appendChild(videovesselEl);
    //         vesselEl.appendChild(iframeEl);
    //     });
    //     } else {
    //         // if not successful, redirect to homepage
    //         document.location.replace("./index.html");
    //     }
    // });
    console.log(vid);
    //creates iframe
    var iframeEl = document.createElement("iframe");
    // iframeEl.innerHTML ="";
    videovesselEl.innerHTML="";
    //console logs iframe
    console.log(iframeEl);
    //creates ID for iframe
    iframeEl.setAttribute("id", "new-video");
    // gives iframe a source
    iframeEl.src = `https://www.youtube.com/embed/d9uxl_7_nWs`;
    //size of video
    iframeEl.width = "400";
    iframeEl.height = "300";
    // vesselEl.appendChild(iframeEl);
    videovesselEl.appendChild(iframeEl);
    vesselEl.appendChild(videovesselEl);

};
//get audio function
var getAudio = function (aud) {
    //creates audio
    var soundEl = document.createElement("audio");
    // soundEl.innerHTML ="";
    audiovesselEl.innerHTML="";
    //gives audio attributes (may add id and/or class)
    soundEl.controls = "controls";
    soundEl.src = `./develop/sounds/${aud}`;
    soundEl.type = "audio/mp3";
    //appends soundEl to h2
    audiovesselEl.appendChild(soundEl);
    vesselEl.appendChild(audiovesselEl);
    // vesselEl.appendChild(soundEl);
};

//getting what is in local storage
var loadFromStorage = function (txt) {
    //gets from local storage
    var retrievedString = localStorage.getItem(txt);
    console.log(txt);
    //converts string into Object
    var retrievedObject = JSON.parse(retrievedString);
    console.log(retrievedObject);
    console.log(retrievedObject.sound);
    //calls get YT function with object video
    getYt(retrievedObject.video);
    //calls get Audio function with object sound
    getAudio(retrievedObject.sound);
};

//saving to Storage function (probably will require parameter)
var savingToStorage = function (txt) {
    //saves to local storage, creates object into string
    // console.log(myMedias(txt));
    // console.log(myMedias);
    localStorage.setItem(txt, JSON.stringify(myMedias(txt)));
    //calls load from local storage
    loadFromStorage(txt);
};

//TO DO: event listener for image
buttonsEl.addEventListener("click",getPhoto);

// CAROUSEL 
//     document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });
