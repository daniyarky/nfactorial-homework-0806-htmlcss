const background = document.getElementById("video-background")
const container = document.getElementById("container")
let playVideoBtn = document.getElementById("btn-change-bckgrnd")
const playPauseTrackBtn = document.getElementById("playpause-track")
const audio = document.getElementById("audio")
const progressBar = document.getElementById("progressBar")
let vol


function instantPlay() {
  background.play();        
  audio.play();
}

function playVideo(){

    if(background.paused){
        background.play();
        audio.play();
        playVideoBtn.style.backgroundColor='transparent';
        playVideoBtn.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
    } else {
        background.pause()
        playVideoBtn.style.backgroundColor = 'transparent';
        audio.pause();
        playVideoBtn.innerHTML = '<i class="fa fa-play-circle fa-3x"></i>';

    }
}

function volume_change(){
    volume_show.innerHTML= recent_volume.value;
    track.volume=recent_volume.value/100;
}


  function progressValue() {
    progressBar.max = track.duration;
    progressBar.value = track.currentTime;

    currentTime.textContent = formatTime(track.currentTime);
    durationTime.textContent = formatTime(track.duration);
  }

  setInterval(progressValue, 500);

  function formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec - minutes * 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  function changeProgressBar() {
    track.currentTime = progressBar.value;
  }

  progressBar.addEventListener("click", changeProgressBar);

  document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    alert(`Key pressed ${name} \r\n Key code value: ${code}`);
  }, false);
