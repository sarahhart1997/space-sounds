//set variables 
var vesselEl = document.querySelector("#vessel");
var photovesselEl = document.querySelector("#photo-container");
var audiovesselEl = document.querySelector("#audio-container");
var videovesselEl = document.querySelector("#video-container");
var buttonsEl = document.querySelector("#photo-buttons")

//creates switch case statement for each button name and returns object of video and sound name called mediaNum
var myMedias = function(txt){
    switch(txt){
        case "Saturn in Red":
            var mediaNum = {
                video: "saturn",
                sound: "saturn.mp3",
            };
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
//gets name of photo from click event listener
var getPhoto = function(event) {
    //gets targets ids of the button clicked
    var buttonClicked = event.target.getAttribute("id");
    //if there is text content when the click event happens, return the function
    if(buttonClicked === null){
        return;
    }
    //clears photo vessel element
    photovesselEl.innerHTML="";
    //gets text of the button by the id and trims empy white space
    var buttonText = document.getElementById(buttonClicked).textContent.trim();

    // format the nasa image api url that takes the button text as input
    var apiUrl = `https://images-api.nasa.gov/search?q=${buttonText}&media_type=image`;

    // make a get request to url
    fetch(apiUrl).then(function (response) {
        // request was successful
        if (response.ok) {
            response.json().then(function (data) {
            //creates image element and gives id attribute
            var imageEl = document.createElement("img");
            imageEl.setAttribute("id","photo-folder");
            //gives the src a value and width
            imageEl.src = data.collection.items[0].links[0].href;
            imageEl.width = "400";
            //appends image variable to photo vessel and appends photo vessel div to vessel div
            photovesselEl.appendChild(imageEl);
            vesselEl.appendChild(photovesselEl);
            //calls saving to storage function
            savingToStorage(buttonText);
        });
        } else {
        // if not successful, redirect to homepage
            document.location.replace("./index.html");
        }
    });
};


var getYt = function (vid) {
    //clears video vessel element
    videovesselEl.innerHTML="";
    // format the youtube url
    var apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${vid}&channelId=UC_aP7p621ATY_yAa8jMqUVA&key=AIzaSyDZ9fGPHgNx9yGoHa1Xc2oi-Xl5sIP1Umc`;
    
    //second API Key if needed
    //var apiUrl: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${vid}s&channelId=UC_aP7p621ATY_yAa8jMqUVA&key=AIzaSyBerfzrgwMnphwHhcfhDkxjGVfwXoPd0fA`;

    // make a get request to url
    fetch(apiUrl).then(function (response) {
        // request was successful
        if (response.ok) {
            response.json().then(function (data) {
            //creates iframe
            var iframeEl = document.createElement("iframe");
            //creates ID for iframe
            iframeEl.setAttribute("id", "new-video");
            // gives iframe a source
            iframeEl.src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
            //gives iframe a width and height
            iframeEl.width = "400";
            iframeEl.height = "250";
            //appends iframe variable to video  vessel and appends video vessel div to vessel div
            videovesselEl.appendChild(iframeEl);
            vesselEl.appendChild(videovesselEl);
        });
        } else {
            // if not successful, redirect to homepage
            document.location.replace("./index.html");
        }
    });
};
//get audio function
var getAudio = function (aud) {
    //creates audio element
    var soundEl = document.createElement("audio");
    // clears audio vessel element
    audiovesselEl.innerHTML="";
    //gives audio attributes
    soundEl.controls = "controls";
    soundEl.src = `./develop/sounds/${aud}`;
    soundEl.type = "audio/mp3";
    //appends audio variable to audio vessel and appends audio vessel div to vessel div
    audiovesselEl.appendChild(soundEl);
    vesselEl.appendChild(audiovesselEl);
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

//event listener for image that calls the buttonsEl
buttonsEl.addEventListener("click",getPhoto);