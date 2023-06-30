const button1 = document.getElementById("play");
button1.addEventListener("click", () => {
    const music = new Audio("static/music/asokah - I always smile, but my eyes are sad.mp3");
    music.play();

})