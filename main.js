document.addEventListener("DOMContentLoaded", function() {

    const videoPlayer = document.getElementById("videoPlayer");
    const playButton = document.getElementById("playButton");
    const pauseButton = document.getElementById("pauseButton");
    const volumeUpButton = document.getElementById("volumeUpButton");
    const volumeDownButton = document.getElementById("volumeDownButton");
    const buttonsDiv = document.getElementById("buttonsRow");
    videoPlayer.hidden=true;
    buttonsDiv.hidden=true;

    
    playButton.addEventListener("click", function() {
        videoPlayer.play();
    });
    
    pauseButton.addEventListener("click", function() {
        videoPlayer.pause();
    });
    
    volumeUpButton.addEventListener("click", function() {
        if (videoPlayer.volume < 1.0) {
            videoPlayer.volume += 0.1;
        }
    });
    
    volumeDownButton.addEventListener("click", function() {
        if (videoPlayer.volume > 0.0) {
            videoPlayer.volume -= 0.1;
        }
    });

})
function selectedVideo(event) {
    if (!window.File || !window.FileReader || !window.FileList) {
      alert('Este navegador no soporta la API de File.');
      return;
    }
  
    const input = document.getElementById('file');
    const buttonsDiv = document.getElementById('buttonsRow');
    const file = event.target.files[0];
  
    if (!file) {
      return;
    }
  
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {  
      if (file.type.startsWith('video')) {
        videoPlayer.src = reader.result;
        videoPlayer.hidden = false;
        buttonsDiv.hidden = false;
        alert("Cargando vídeo...");
      } else {
        input.value = '';
        videoPlayer.hidden = true;
        buttonsDiv.hidden = true;
        alert("Archivo inválido.");
      }
    }, false);
  
    reader.readAsDataURL(file);
  }
  
