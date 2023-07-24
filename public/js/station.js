const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();


fetch("station/json/songs").then(async (response) => {
    let musicList = await response.json();
    let index = 0;
    function shuffleList() {
        // if (Math.random()*5 > 1) {
            for (let i = 0; i < musicList.length; i++) {
                const temp = musicList[i];
                const randIdx = Math.floor(Math.random()*musicList.length);
                musicList[i] = musicList[randIdx];
                musicList[randIdx] = temp;
            }
        // } else {
        //     for (let i = 0; i < musicList.length; i++) {
        //         let minNop = musicList[i].nop;
        //         let minPos = i;
        //         for (let j = i; j < musicList.length; j++) {
        //             if (musicList[j].nop < minNop) {
        //                 minPos = j;
        //                 minNop = musicList[j].nop;
        //             }
        //         }
        //         temp = musicList[i];
        //         musicList[i] = musicList[minPos];
        //         musicList[minPos] = temp;
        //     }
        // }
    }

    shuffleList();

    function addNop() {
        // fetch('station/json/nop', {
        //       method: 'POST',
        //       headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //       },
        //       body: JSON.stringify({
        //         id: musicList[index].id,
        //         name: musicList[index].name, 
        //     })
        // });
    }

    function nextSong() {
        console.log("next");
        index++;
        if(index >= musicList.length) {
            index = 0;
            shuffleList();
            console.log("shuffle")
        }
        music = new Audio(musicList[index].url);
        music.addEventListener("loadstart", addNop);
        music.addEventListener("ended", nextSong);
        music.play().then(() => {
            playButton.setAttribute("src", "static/button/stop.png");
            playButton.dataset.playing = true;
            title.innerText = musicList[index].name + " - " + musicList[index].artist
        }).catch(e => {
            console.log(e + "  err in place 1");
        })   
    }
    function backSong() {
        console.log("back");
        index--;
        if(index <= 0) {
            index = 0;
        }
        music = new Audio(musicList[index].url);
        music.addEventListener("loadstart", addNop);
        music.addEventListener("ended", nextSong);
        music.play().then(() => {
            playButton.setAttribute("src", "static/button/stop.png");
            playButton.dataset.playing = true;
            title.innerText = musicList[index].name + " - " + musicList[index].artist
        }).catch(e => {
            console.log(e + "  err in place 1");
        })
    }

    let music = new Audio(musicList[index].url);
    const track = audioContext.createMediaElementSource(music);
    track.connect(audioContext.destination);
    const gainNode = audioContext.createGain();
    track.connect(gainNode).connect(audioContext.destination);
    
    const playButton = document.getElementById("play");
    const nextButton = document.getElementById("next");
    const backButton = document.getElementById("back");
    const title = document.getElementById("title");
    const volumeArr = document.querySelectorAll(".volume");
    let volumeControlList = [];
    for (let i = 0; i < volumeArr.length; i++) {
        volumeControlList.push({
            volume: volumeArr[i],
            pos: i+1
        })
    }
    volumeControlList.forEach((volumeControl) => {
        volumeControl.volume.addEventListener("click", () => {
            music.volume = volumeControl.pos * 1/volumeArr.length;
            for (i = 0; i < volumeControl.pos; i++) {
                volumeArr[i].setAttribute("src", "static/button/volumeOn.png");
            }
            for (i = volumeControl.pos; i < volumeArr.length; i++) {
                volumeArr[i].setAttribute("src", "static/button/volumeOff.png")
            }
        })
    })
    
    playButton.addEventListener("click", () => {
        if (audioContext.state = "suspended") {
            audioContext.resume();
        }
     
        if (playButton.dataset.playing == "false" || playButton.dataset.playing === undefined) {
            music.play().then(() => {
                playButton.setAttribute("src", "static/button/stop.png");
                playButton.dataset.playing = true;
            }).catch(e => {
                console.log(e + "  err in place 2");
            })
        } else if (playButton.dataset.playing == "true") {
            music.pause();
            playButton.setAttribute("src", "static/button/play.png");
            playButton.dataset.playing = false;
        }
    
    });

    title.innerText = musicList[index].name + " - " + musicList[index].artist
    music.addEventListener("loadstart", addNop);
    music.addEventListener("ended", nextSong);
    nextButton.addEventListener("click", () => {
        nextButton.setAttribute("src", "/static/button/nextOnClick.png")
        if (playButton.dataset.playing == "true") {
            music.pause();
            playButton.dataset.playing = false;
            nextSong();
        } else {
            nextSong();
        } 
        setTimeout(() => {
            nextButton.setAttribute("src", "/static/button/next.png")
        }, 100);
    });
    backButton.addEventListener("click", () => {
        backButton.setAttribute("src", "/static/button/backOnClick.png")
        if (playButton.dataset.playing == "true") {
            music.pause();
            playButton.dataset.playing = false;
            backSong();
        } else {
            backSong();
        } 
        setTimeout(() => {
            backButton.setAttribute("src", "/static/button/back.png")
        }, 100);
    })
    
    

})
