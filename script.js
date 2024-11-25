// Fonction pour scroller vers la vidéo et la lancer
function scrollToVideo() {
    const videoSection = document.getElementById("keypad-section");
    videoSection.scrollIntoView({ behavior: "smooth" }); // Défilement fluide

    // Lance la vidéo automatiquement
    const video = document.querySelector('video');
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
