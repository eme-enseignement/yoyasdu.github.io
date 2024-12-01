function afficherTexte(idTexte) {
    // Masquer tous les textes
    const tousLesTextes = document.querySelectorAll('.texte-indice');
    tousLesTextes.forEach(texte => {
        texte.style.display = 'none';
    });

    // Récupérer l'élément de texte
    const texte = document.getElementById(idTexte);
    
    // Définir le contenu du texte
    const contenuTextes = {
        'texte1': 'Texte de l\'indice 1 pour la Salle 6',
        'texte2': 'Texte de l\'indice 2 pour la Salle 6',
        'texte3': 'Texte de l\'indice 3 pour la Salle 6',
        'texte4': 'Texte de l\'indice 4 pour la Salle 5',
        'texte5': 'Texte de l\'indice 5 pour la Salle 5',
        'texte6': 'Texte de l\'indice 6 pour la Salle 5'
    };

    // Afficher le texte sélectionné
    texte.textContent = contenuTextes[idTexte];
    texte.style.display = 'block';
}