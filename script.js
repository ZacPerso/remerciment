// Fonction pour scroller vers la vidéo et la lancer
function scrollToVideo() {
    const videoSection = document.getElementById("keypad-section");
    videoSection.scrollIntoView({ behavior: "smooth" }); // Défilement fluide

    // Lance la vidéo automatiquement
    const video = document.querySelector('video');
    wordflick();
    video.play();
}

// Gestion du clic sur la flèche
document.querySelector('.scroll-indicator').addEventListener('click', scrollToVideo);

// Retour en haut au rafraîchissement
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual"; // Désactive le retour en arrière automatique
}

window.addEventListener("load", () => {
    setTimeout(() => {
        window.scrollTo(0, 0); // Revenir en haut après le chargement
    }, 0);
});



var
  words = ['Baraka Allahu fiki','Merci beaucoup','Tu es la meilleure'],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 5,
  speed = 100;

var wordflick = function(){
  setInterval(function(){
      if (forwards) {
        if(offset >= words[i].length){
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
         if(offset == 0){
            forwards = true;
            i++;
            offset = 0;
            if(i >= len){
              i=0;
            } 
         }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
    	$('.word').text(part);
  },speed);
};
