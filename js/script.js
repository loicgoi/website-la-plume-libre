document.addEventListener('DOMContentLoaded', function () {
    // Gestion du formulaire
    const form = document.querySelector('form');
    if (form) { 
        form.addEventListener('submit', function (event) { // Événement de soumission du formulaire
            event.preventDefault();

            // Récupération des champs du formulaire
            const name = form.querySelector('input[name="name"]');
            const email = form.querySelector('input[name="email"]');
            const message = form.querySelector('textarea[name="message"]');
            
            // Validation des champs
            let errors = [];
            
            // Vérification des champs requis
            // Vérification du nom
            if (!name.value.trim()) {
                errors.push("Veuillez renseigner votre nom.");
            }
            // Vérification de la longueur du nom
            if (name.value.trim().length > 0 && name.value.trim().length <= 2) {
                errors.push("Le nom doit contenir plus de 2 caractères.");
            }
            // Vérification de l'adresse e-mail
            if (!email.value.trim()) {
                errors.push("Veuillez renseigner votre adresse e-mail.");
            } else if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email.value.trim())) { // Expression régulière pour valider l'adresse e-mail
                errors.push("Format d'adresse e-mail invalide.");
            }
            // Vérification du message
            if (!message.value.trim()) {
                errors.push("Veuillez écrire un message.");
            }
            // Vérification de la longueur du message
            if (errors.length > 0) {
                alert(errors.join('\n'));
            } else { // Si tout est valide, on peut envoyer le formulaire
                alert("Votre message a bien été envoyé ! Merci pour votre contact.");
                form.reset();
            }
        });
    }

    // Gestion du menu hamburger format smartphone
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Vérification de l'existence des éléments avant d'ajouter l'événement
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }
});