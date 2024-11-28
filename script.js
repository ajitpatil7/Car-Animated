// let audio = document.createElement('audio');
// audio.setAttribute('src','E:\ajit projects7\car animated\Car Aminated\sound.mp3'); 
// audio.loop=true;
// audio.play();

var audio = document.createElement('audio');
audio.setAttribute('src','sound.mp3'); 
audio.play().then(() => {
    console.log('Audio is playing');
}).catch(error => {
    console.error('Error playing audio:', error);
});
