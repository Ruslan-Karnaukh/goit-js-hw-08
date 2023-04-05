import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEOPLAYER = "videoplayer-current-time";


player.on('timeupdate', throttle(playerSTime, 1000)); 


function playerSTime (event){  
    localStorage.setItem(VIDEOPLAYER, event.seconds);
};


player.setCurrentTime(localStorage.getItem(VIDEOPLAYER));


