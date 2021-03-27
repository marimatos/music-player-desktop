let currentSong = 1;
let songsList = [];

const title = document.querySelector("h2");
const musicInput = document.querySelector("input");
const labelInput = document.querySelector("label");
const player = document.querySelector("audio");
const prevBtn = document.querySelector("#prev");
const playBtn = document.querySelector("#play");
const stopBtn = document.querySelector("#stop");
const nextBtn = document.querySelector("#next");

function addSongs(event) {
  songsList = event.target.files;
  labelInput.style.display = "none";
  playSong();
}

function playSong() {
  title.innerText = songsList[currentSong - 1].name;

  const musicURL = URL.createObjectURL(songsList[currentSong - 1]);
  player.setAttribute("src", musicURL);
  player.play();
  playBtn.innerText = "︎ ⏸︎";
  playBtn.onclick = pauseSong;
}

function pauseSong() {
  player.pause();
  playBtn.innerText = "▶";
  playBtn.onclick = continueSong;
}

function continueSong() {
  player.play();
  playBtn.innerText = "︎⏸︎";
  playBtn.onclick = pauseSong;
}

function stopSong() {
  player.pause();
  player.currentTime = 0;
  playBtn.innerText = "▶";
}

function nextSong() {
  currentSong = currentSong + 1;

  if (currentSong > songsList.length) {
    currentSong = 1;
  }

  playSong();
}

function previousSong() {
  currentSong = currentSong - 1;

  if (currentSong < songsList.length) {
    currentSong = songsList.length;
  }
  playSong();
}

const reloadBtn = document.querySelector('#reload');

function reloadPage(){
  return window.location.reload();
}

musicInput.onchange = addSongs;
stopBtn.onclick = stopSong;
nextBtn.onclick = nextSong;
prevBtn.onclick = previousSong;

reloadBtn.onclick = reloadPage;