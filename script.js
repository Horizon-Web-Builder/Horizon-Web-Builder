function adjustMainPadding() {
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const headerHeight = header.offsetHeight;
    main.style.paddingTop = headerHeight + 'px';
}
// Fonction pour ajuster l'affichage des éléments en fonction de la taille de la fenêtre
function adjustElementsVisibility() {
    const windowWidth = window.innerWidth;

    // Définir une valeur seuil, par exemple 600px
    const thresholdWidth = 820;

    // Sélectionner l'élément que vous souhaitez conditionner
    const imageElement = document.getElementById('logo1');

    // Vérifier si la largeur de la fenêtre est inférieure à la valeur seuil
    if (windowWidth < thresholdWidth) {
        // Si la fenêtre est trop petite, cacher l'image
        imageElement.style.display = 'none';
    } else {
        // Sinon, afficher l'image
        imageElement.style.display = 'block'; // ou 'inline-block' selon le type d'élément
    }
}

// Appeler la fonction d'ajustement au chargement de la page
document.addEventListener('DOMContentLoaded', adjustElementsVisibility);

// Appeler la fonction d'ajustement lors du redimensionnement de la fenêtre
window.addEventListener('resize', adjustElementsVisibility);


// Adjust padding when the page loads
document.addEventListener('DOMContentLoaded', adjustMainPadding);

// Adjust padding when the window is resized
window.addEventListener('resize', adjustMainPadding);

