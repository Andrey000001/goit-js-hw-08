import Player from '@vimeo/player';
const CURRENT_TIME = 'videoplayer-current-time';
const vimeoPlayer = document.querySelector('#vimeo-player');

const player = new Player(vimeoPlayer);

player.on('timeupdate', onPlay, 1000);

function onPlay({ seconds }) {
  localStorage.setItem(CURRENT_TIME, seconds);
}

setCurrentTime();
function setCurrentTime() {
  if (!localStorage.getItem(CURRENT_TIME)) {
    return;
  }
  player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
}
