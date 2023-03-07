// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.

// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");

// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");

// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
// let images = ["https://i1.sndcdn.com/artworks-oDdflDikYpVv-0-t500x500.png",
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KzE3pt5ti2ZVKRc7G-FgRr5pIsufTBhLZQ&usqp=CAU",
// "https://i.scdn.co/image/ab67616d0000b27308e30ab6a058429303d75876",
// "https://upload.wikimedia.org/wikipedia/en/2/2f/KSI_-_Holiday.png",
// "https://i.scdn.co/image/ab67616d0000b2732bf0876d42b90a8852ad6244",
// "https://upload.wikimedia.org/wikipedia/en/3/36/%22Chicago%22_promotional_cover.jpg"
// ] ;

// let song = ["Heart Mind", "Golden Hour", "Intentions", "Holiday", "Until I found you (Em Beihold Version)", "Chicago"];

// let artists = ["Kodak Black & Plies", "Jvke", "Justin Bieber & Quavo", "KSI", "Stephen Sanchez & Em Beihold", "Michael Jackson"];

// let link = ["https://www.youtube.com/watch?v=VZJoUC1F5xI",
// "https://www.youtube.com/watch?v=UsR08cY8k0A",
// "https://www.youtube.com/watch?v=3AyMjyHu1bA",
// "https://www.youtube.com/watch?v=gfHbg53ykPY",
// "https://www.youtube.com/watch?v=kPlSyYtE63M",
// "https://www.youtube.com/watch?v=Y_8mUx4VOmo"];

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.
let songList = [{
  imageLink: "https://i1.sndcdn.com/artworks-oDdflDikYpVv-0-t500x500.png", 
  song: "Heart Mind",
  artists: "Kodak Black & Plies",
  vidLink: "https://www.youtube.com/watch?v=VZJoUC1F5xI"
},
{
  imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KzE3pt5ti2ZVKRc7G-FgRr5pIsufTBhLZQ&usqp=CAU", 
  song: "Golden Hour",
  artists: "Jvke",
  vidLink: "https://www.youtube.com/watch?v=UsR08cY8k0A"
},
{
  imageLink: "https://upload.wikimedia.org/wikipedia/en/2/2f/KSI_-_Holiday.png", 
  song: "Holiday",
  artists: "KSI",
  vidLink:  "https://www.youtube.com/watch?v=gfHbg53ykPY",
},
{
  imageLink: "https://i.scdn.co/image/ab67616d0000b2732bf0876d42b90a8852ad6244", 
  song: "Until I found you (Em Beihold Version)",
  artists: "Stephen Sanchez & Em Beihold",
  vidLink: "https://www.youtube.com/watch?v=kPlSyYtE63M",
},
{
  imageLink: "https://upload.wikimedia.org/wikipedia/en/3/36/%22Chicago%22_promotional_cover.jpg", 
  song: "Chicago",
  artists: "Michael Jackson",
  vidLink: "https://www.youtube.com/watch?v=Y_8mUx4VOmo"
}]
//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.

function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
let imageLink = image.value; 
let song = songName.value; 
let artists = artist.value; 
let vidLink = songLink.value; 

// task 10: use `.push()` to add each input value to the correct array.
images.push(newImg);
song.push(newSong);
artists.push(newArtist);
link.push(newLink);
}

/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}

function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
  console.log("we got here");
  songList.forEach(function(song) {
  displayImage.insertAdjacentHTML("Beforeend", `<p> <img src = ${song.imageLink}> </p>`)
    displaySong.insertAdjacentHTML("Beforeend", `<p>${song.song}</p>`)
    displayArtist.insertAdjacentHTML("Beforeend", `<p>${song.artists}</p>`)
    displayLink.insertAdjacentHTML("Beforeend", `<p> <a href =${song.vidLink} target="_blank"> This songs link<a/></p>`)
});
}

// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
