const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
let index = 0;
const musicList = [
   
    "Deltarune Hip Shop (LoFi Hip Hop Remix)",
    "And So It Begins - Artificial Music",
    "asokah - I always smile, but my eyes are sad",
    "asokah - water lily",
    "Burbank - seeing your name makes me happy",
    "coffee - beabadoobee (lyrics)",
    "Deltarune Remix Friendship (Chiptune LoFi Hip Hop Mix)",
    "dizralph.c - two of us",
    "dvdkm - lonely",
    "elijah who - i've got her love",
];

let music = new Audio(`static/music/${musicList[index]}.mp3`);
const track = audioContext.createMediaElementSource(music);
track.connect(audioContext.destination);
const gainNode = audioContext.createGain();
track.connect(gainNode).connect(audioContext.destination);

const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");
const volumeControl = document.querySelector("#volume");

music.addEventListener("playing", () => {
    console.log("ok playing");
})
music.addEventListener("ended", () => {
    console.log("ended");
})
playButton.addEventListener("click", () => {
    if (audioContext.state = "suspended") {
        audioContext.resume();
    }
 
    if (playButton.dataset.playing == "false" || playButton.dataset.playing === undefined) {
        music.play();
        playButton.dataset.playing = true;
    } else if (playButton.dataset.playing == "true") {
        music.pause();
        playButton.dataset.playing = false;
    }

})

nextButton.addEventListener("click", () => {
    music.pause();
    index++;
    music = new Audio(`static/music/${musicList[index]}.mp3`);
    music.play();
    playButton.dataset.playing = true;
})


volumeControl.addEventListener(
  "input",
  () => {
    gainNode.gain.value = volumeControl.value;
  },
  false,
);