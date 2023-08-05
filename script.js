console.log("welcome to my music");
//initialize the variable
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    { songname: "Abhi_Kuch_Dino_Se", filepath: "song/1.mp3", coverpath: "cover/logo4.webp" },
    { songname: "Allah_De_Bande", filepath: "song/2.mp3", coverpath: "cover/logo4.webp" },
    { songname: "Khalipan_Mera", filepath: "song/3.mp3", coverpath: "cover/logo4.webp" },
    { songname: "Saiyaara", filepath: "song/4.mp3", coverpath: "cover/logo4.webp" },
    { songname: "Mannat", filepath: "song/5.mp3", coverpath: "cover/logo4.webp" },
    { songname: "Tu_Hi_Hai_Ashiqui", filepath: "song/6.mp3", coverpath: "cover/logo4.webp" },
]
songitems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})

//audioElement.play();
// handel play / pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})
//listen to event 
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})
const makeallplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songname;
        audioElement.cuurentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 5) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.cuurentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.cuurentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})




