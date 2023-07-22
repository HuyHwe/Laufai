const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();


fetch("http://localhost:3010/station/json").then(async (response) => {
    let musicList = await response.json();
    let index = 0;
    console.log(musicList);
    let music = new Audio(musicList[index].url);
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
        music = new Audio(musicList[index].url);
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
});

