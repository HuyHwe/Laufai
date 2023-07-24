const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
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

function shuffleList(musicList) {
    for (let i = 0; i < musicList.length; i++) {
        const temp = musicList[i];
        const randIdx = Math.floor(Math.random()*musicList.length);
        musicList[i] = musicList[randIdx];
        musicList[randIdx] = temp;
    }
    return musicList;
}

function nextSong(musicList,index) {
    console.log("next");
    index++;
    if(index >= musicList.length) {
        index = 0;
        musicList = shuffleList(musicList);
        console.log("shuffle")
    }
    let music = new Audio(musicList[index].url);
    music.addEventListener("ended", nextSong);
    return {musicList, index, music};
}
function backSong(musicList,index) {
    console.log("back");
    index--;
    if(index <= 0) {
        index = 0;
    }
    music = new Audio(musicList[index].url);
    music.addEventListener("ended", nextSong);
    return {musicList, index, music};
}

function playMusic(music) {
    music.play().then(() => {
        playButton.setAttribute("src", "static/button/stop.png");
        playButton.dataset.playing = true;
        title.innerText = musicList[index].name + " - " + musicList[index].artist
    }).catch(e => {
        console.log(e);
    })   
}

function pauseMusic(music) {
    music.pause();
    playButton.dataset.playing = false;
}

fetch("station/json/songs").then(async (response) => {
    let musicList = await response.json();
    let index = 0;
    musicList = shuffleList(musicList);
    let music = new Audio(musicList[index].url);
    
    playButton.addEventListener("click", () => {
        if (audioContext.state = "suspended") {
            audioContext.resume();
        }
        if (playButton.dataset.playing == "false" || playButton.dataset.playing === undefined) {
            playMusic(music);
        } else if (playButton.dataset.playing == "true") {
            pauseMusic(music);
            playButton.setAttribute("src", "static/button/play.png");
        }
    });

    title.innerText = musicList[index].name + " - " + musicList[index].artist
    music.addEventListener("ended", () => {
            ({musicList, index, music} = nextSong(musicList, index));
            playMusic(music);
    });
    nextButton.addEventListener("click", () => {
        nextButton.setAttribute("src", "/static/button/nextOnClick.png")
        if (playButton.dataset.playing == "true") {
            pauseMusic(music);
            ({musicList, index, music} = nextSong(musicList, index));
            playMusic(music);
        } else {
            ({musicList, index, music} = nextSong(musicList, index));
            playMusic(music);
        }
        title.innerText = musicList[index].name + " - " + musicList[index].artist
        setTimeout(() => {
            nextButton.setAttribute("src", "/static/button/next.png")
        }, 100);
    });
    backButton.addEventListener("click", () => {
        backButton.setAttribute("src", "/static/button/backOnClick.png")
        if (playButton.dataset.playing == "true") {
            pauseMusic(music);
            ({musicList, index, music} = backSong(musicList, index));
            playMusic(music);
        } else {
            ({musicList, index, music} = backSong(musicList, index));
            playMusic(music);
        } 
        title.innerText = musicList[index].name + " - " + musicList[index].artist
        setTimeout(() => {
            backButton.setAttribute("src", "/static/button/back.png")
        }, 100);
    })
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
})
