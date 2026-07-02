//CREDIT TO SAMUEL WALTHER AS HE MADE ALL THE CODE FOR THE JS AND HTML CODE
const playList = ['playlist/LONER.mp3','playlist/STOLEN.mp3']

let currentSong = document.querySelector('#player');
console.log(currentSong)
let songNum = 0;

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function nextSong() {
    console.log('I should go to the next song')
    // Select the <link> element
    if (songNum != playList.length-1) {
        console.log(playList.length-1);
        songNum++;
    }
    else {
        songNum = 0;
    }
    currentSong.setAttribute('src', playList[songNum]);
    playPause("js");
}

function previousSong() {
    console.log('I should go to the previous song')
    // Select the <link> element
    if (songNum != 0) {
        songNum--;
    }
    else {
        songNum = playList.length-1;
        console.log(playList.length-1);
    }
    currentSong.setAttribute('src', playList[songNum]);
    playPause("js");
}

function playPause(source) {
    let player = document.querySelector('#mini-player');
    let playPauseBTN = document.querySelector('#playButton');
    if (source == "js") {
        currentSong.play();
        player.style.backgroundImage = "url('cassettePlay.gif')"
        playPauseBTN.style.backgroundImage = "url('pauseB.png')"
    }
    else {
        if (currentSong.paused) {
            currentSong.play();
            player.style.backgroundImage = "url('cassettePlay.gif')"
            playPauseBTN.style.backgroundImage = "url('pauseB.png')"
            console.log("play")
        }
        else {
            currentSong.pause();
            player.style.backgroundImage = "url('cassettePause.png')"
            playPauseBTN.style.backgroundImage = "url('PlayB.png')"
            console.log('pause')
        }
    }
}

player.style.backgroundImage = "url('cassettePlay.gif')"
player.style.backgroundImage = "url('cassettePause.png')"


function displaySongDuration() {
    let duration = currentSong.duration;
    let minutes = 0;
    while (duration > 60) {
        duration = duration - 60;
        minutes++;
    }
    duration = Math.round(duration);

    if (duration < 10) {
        console.log("i should 0 the title thingy")
        duration = "0" + duration
    };
    console.log("display a duration")

    document.querySelector('#time').innerHTML = minutes + ":" + duration;
}


async function displayDuration() {
    let time = currentSong.currentTime;
    let minutesLeft = 0;
    while (time > 60) {
        time = time - 60;
        minutesLeft++;
    }
    time = Math.round(time);
    if (time < 10) {
        console.log("i should 0")
        time = "0" + time
    }

    document.querySelector('#duration').innerHTML = minutesLeft + ":" + time + "/";

    await sleep(500);
    displayDuration();
}
displayDuration();
function updateName() {
    let SongName = currentSong.getAttribute('src')
    SongName = SongName.substring(9)
    SongName = "Now Playing: " + SongName
    document.querySelector("#song-name").innerHTML = SongName;
}