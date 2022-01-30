//TO BE UPDATED WITH QUERY SELECTORS: Set up array
var num = 9;
//query selects h2
var containerEl = document.querySelector("#container");
//TO BE ERASED: array of button names
var arr = [
  "Saturn in Red",
  "Liftoff Apollo 11",
  "The Kepler Spacecraft",
  "Earth Atmosphere Observations",
  "Ganymede Trailing Hemisphere",
  "Sputnik Planum",
  "Stardust",
  "Voyager of Jupiter",
  "Rover Driving Test",
  "Frost on Mars",
];
//sets array of medias
var myMedias = [
  {
    video: "saturn",
    sound: "saturn.mp3",
  },
  {
    video: "apollo 11",
    sound: "apollo11.mp3",
  },
  {
    video: "kepler",
    sound: "kepler_star_KIC12268220C.mp3",
  },
  {
    video: "complex earth atmosphere",
    sound: "atmosphere.mp3",
  },
  {
    video: "ganymede",
    sound: "ganymede.mp3",
  },
  {
    video: "sputnik",
    sound: "sputnik.mp3",
  },
  {
    video: "stardust",
    sound: "stardust.mp3",
  },
  {
    video: "voyager",
    sound: "voyager_jupiter_lightning.mp3",
  },
  {
    video: "rover",
    sound: "roverdriving.mp3",
  },
  {
    video: "frost on mars",
    sound: "Mars-sound.mp3",
  },
];
//TO BE ERASED: Calls index in array (replace with button call)
var myArr = arr[num];

//TO BE ERASED: Console logs index string of array
console.log(myArr);
console.log(arr.length);
//get Photo function (will probably require parameter)

var getPhoto = function () {
  // format the nasa image api url
  var apiUrl = `https://images-api.nasa.gov/search?q=${myArr}&media_type=image`;

  // make a get request to url
  fetch(apiUrl).then(function (response) {
    // request was successful
    if (response.ok) {
      response.json().then(function (data) {
        // query selector for image
        var imagine = document.querySelector("#photo-folder");
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
//TO BE ERASED: probably with switch case or if else statement
var mediaNum = myMedias[num];
console.log(mediaNum);
//gets youtube video

var getYt = function (vid) {
  // format the youtube url
  var apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${vid}&channelId=UC_aP7p621ATY_yAa8jMqUVA&key=AIzaSyDZ9fGPHgNx9yGoHa1Xc2oi-Xl5sIP1Umc`;
  //TO BE ERASED: Console log apiURL variable
  console.log(apiUrl);
  // make a get request to url
  fetch(apiUrl).then(function (response) {
    // request was successful
    if (response.ok) {
      response.json().then(function (data) {
        //creates iframe
        var iframeEl = document.createElement("iframe");
        //console logs iframe
        console.log(iframeEl);
        //creates ID for iframe
        iframeEl.setAttribute("id", "new-video");
        // gives iframe a source
        iframeEl.src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
        //appends iframe to H2
        containerEl.appendChild(iframeEl);
      });
    } else {
      // if not successful, redirect to homepage
      document.location.replace("./index.html");
    }
  });
};
//get audio function
var getAudio = function (aud) {
  //creates audio
  var soundEl = document.createElement("audio");
  //gives audio attributes (may add id and/or class)
  soundEl.controls = "controls";
  soundEl.src = `./develop/sounds/${aud}`;
  soundEl.type = "audio/mp3";
  //appends soundEl to h2
  containerEl.appendChild(soundEl);
};

//getting what is in local storage
var loadFromStorage = function () {
  //gets from local storage
  var retrievedString = localStorage.getItem(myArr);
  console.log(myArr);
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
var savingToStorage = function () {
  //saves to local storage, creates object into string
  localStorage.setItem(myArr, JSON.stringify(mediaNum));
  //calls load from local storage
  loadFromStorage();
};
//calls saving Storage function
savingToStorage();

//TO DO: event listener for image
