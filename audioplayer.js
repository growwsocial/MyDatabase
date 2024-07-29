 function tryToPlayAudio() {
    var audio = document.getElementById('background-audio');
    audio.play().then(() => {
      console.log('Audio is playing');
    }).catch(function(error) {
      console.log('Autoplay was prevented. Prompting user for interaction.');
    });
  }

  // Attempt to play the audio as soon as possible
  document.addEventListener('DOMContentLoaded', tryToPlayAudio);

  // Fallback interaction to ensure audio plays
  document.body.addEventListener('click', tryToPlayAudio, { once: true });
  document.body.addEventListener('touchstart', tryToPlayAudio, { once: true });