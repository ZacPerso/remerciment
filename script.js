// Fonction pour scroller vers la vidéo et la lancer
function scrollToVideo() {
    const videoSection = document.getElementById("video");
    videoSection.scrollIntoView({ behavior: "smooth" }); // Défilement fluide

    // Lance la vidéo automatiquement
    const video = document.querySelector('video');
    wordflick();
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
  words = ['Baraka Allahu fiki', 'Merci beaucoup', 'Tu es la meilleure'],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 20, // Longer pause when fully displayed
  speed = 100; // Smoother and slower typing effect

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
              i = 0;
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
  }, speed);
};
window.addEventListener('load', () => {
  // Check for the 'access_granted' cookie
  const isAccessGranted = document.cookie.split('; ').some(cookie => cookie.startsWith('access_granted='));

  // If the cookie is valid, hide the keypad and show the video
  if (isAccessGranted) {
    hideKeypadAndShowVideo();
    const youtubePlayer = document.getElementById("youtube-player");
    youtubePlayer.src = localStorage.getItem('videoUrl');
  }

  // After 2 seconds (or desired delay), hide the loader and show the content
  setTimeout(() => {
    document.querySelector('.loader').style.display = 'none'; // Hide loader
    document.querySelector('.content').style.display = 'block'; // Show content
    document.body.style.overflow = ''; // Re-enable scrolling
  }, 2000); // 2-second delay
});


function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');

  hamburger.classList.toggle('open');
  navbar.classList.toggle('open');
}
