const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

fetch("station/json/songs").then(async (response) => {
    let musicList = await response.json();
    
    function addNop() {
        console.log("ok playing");
        (async () => {
            const rawResponse = await fetch('station/json/nop', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                id: musicList[index].id,
                name: musicList[index].name, 
            })
            });
            const content = await rawResponse.json();
          
            console.log(content);
          })();
    }
    let music = new Audio(musicList[index].url);
    const track = audioContext.createMediaElementSource(music);
    track.connect(audioContext.destination);
    const gainNode = audioContext.createGain();
    track.connect(gainNode).connect(audioContext.destination);
    
    const playButton = document.getElementById("play");
    const nextButton = document.getElementById("next");
    const volumeControl = document.querySelector("#volume");
    
    music.addEventListener("loadstart", addNop);
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
        music.addEventListener("play", addNop);
        music.play();
        playButton.dataset.playing = true;
    })
    
    
    volumeControl.addEventListener("input",() => {
        gainNode.gain.value = volumeControl.value;
      },
      false,
    );
});

