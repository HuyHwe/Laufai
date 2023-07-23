const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();


fetch("station/json/songs").then(async (response) => {
    let musicList = await response.json();
    let index = 0;
    function shuffleList() {
        if (Math.random()*5 > 1) {
            for (let i = 0; i < musicList.length; i++) {
                const temp = musicList[i];
                const randIdx = Math.floor(Math.random()*musicList.length);
                musicList[i] = musicList[randIdx];
                musicList[randIdx] = temp;
            }
        } else {
            for (let i = 0; i < musicList.length; i++) {
                let minNop = musicList[i].nop;
                let minPos = i;
                for (let j = i; j < musicList.length; j++) {
                    if (musicList[j].nop < minNop) {
                        minPos = j;
                        minNop = musicList[j].nop;
                    }
                }
                temp = musicList[i];
                musicList[i] = musicList[minPos];
                musicList[minPos] = temp;
            }
        }
    }

    shuffleList();

    function addNop() {
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

    function nextSong() {
        console.log("ended");
        index++;
        if(index >= musicList.length) {
            index = 0;
            shuffleList();
            console.log("shuffle")
        }
        music = new Audio(musicList[index].url);
        music.addEventListener("play", addNop);
        music.addEventListener("ended", nextSong);
        music.play();
        playButton.dataset.playing = true;
    }
    let music = new Audio(musicList[index].url);
    const track = audioContext.createMediaElementSource(music);
    track.connect(audioContext.destination);
    const gainNode = audioContext.createGain();
    track.connect(gainNode).connect(audioContext.destination);
    
    const playButton = document.getElementById("play");
    const nextButton = document.getElementById("next");
    const volumeControl = document.querySelector("#volume");
    
    
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
    music.addEventListener("loadstart", addNop);
    music.addEventListener("ended", nextSong);
    nextButton.addEventListener("click", () => {
        music.pause();
        nextSong();
    })
    
    
    volumeControl.addEventListener("input",() => {
        gainNode.gain.value = volumeControl.value;
      },
      false,
    );
});

