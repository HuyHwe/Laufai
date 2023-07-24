const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const body = document.getElementById("body")
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
let typeControlList = document.querySelectorAll(".type");

let index = 0;
function shuffleList(musicList) {
    for (let i = 0; i < musicList.length; i++) {
        const temp = musicList[i];
        const randIdx = Math.floor(Math.random()*musicList.length);
        musicList[i] = musicList[randIdx];
        musicList[randIdx] = temp;
    }
    return musicList;
}

function nextSong(musicList) {
    console.log("next");
    index++;
    if(index >= musicList.length) {
        index = 0;
        musicList = shuffleList(musicList);
        console.log("shuffle")
    }
    let music = new Audio(musicList[index].url);
    
    music.addEventListener("ended", () => {
        nextSong(musicList);
        changeTitle();
    });
    return {musicList, music};
}
function backSong(musicList) {
    console.log("back");
    index--;
    if(index <= 0) {
        index = 0;
    }
    music = new Audio(musicList[index].url);
    music.addEventListener("ended", nextSong);
    return {musicList, music};
}

function playMusic(music) {
    music.play().then(() => {
        playButton.setAttribute("src", "static/button/stop.png");
        playButton.dataset.playing = true;
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

    title.innerText = musicList[index].name + " - " + musicList[index].artist;
    music.addEventListener("ended", () => {
            ({musicList, music} = nextSong(musicList));
            playMusic(music);
            function changeTitle() {
                title.innerText = musicList[index].name + " - " + musicList[index].artist
            }
            changeTitle();
    });
    nextButton.addEventListener("click", () => {
        nextButton.setAttribute("src", "/static/button/nextOnClick.png")
        if (playButton.dataset.playing == "true") {
            pauseMusic(music);
            ({musicList, music} = nextSong(musicList));
            playMusic(music);
        } else {
            ({musicList, music} = nextSong(musicList));
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
            ({musicList, music} = backSong(musicList));
            playMusic(music);
        } else {
            ({musicList, music} = backSong(musicList));
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
    typeControlList.forEach((typeControl) => {
        typeControl.addEventListener("input", () => {
            if(typeControl.value == "0") {
                body.style.backgroundImage = "url(static/background/mix.gif)"
            } else if(typeControl.value == "1") {
                body.style.backgroundImage = "url(static/background/xK.gif)"
            } else if (typeControl.value == "2") {
                body.style.backgroundImage = "url(static/background/g32K.gif)"
            } else {
                body.style.backgroundImage = "url(static/background/lennart-butz-idea5anim4.gif)"
            }
            while(musicList.length-1 > index) {
                musicList.pop();
            }
            if (typeControl.value == "0") {
                fetch(`station/json/songs`).then(async (response) => {
                    let newList = await response.json();
                    musicList = musicList.concat(shuffleList(newList));
                })
            } else {
                fetch(`station/json/songs/${typeControl.value}`).then(async (response) => {
                    let newList = await response.json();
                    musicList = musicList.concat(shuffleList(newList));
                })
            }
        })
    })


})
