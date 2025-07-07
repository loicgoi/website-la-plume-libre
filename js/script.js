document.addEventListener('DOMContentLoaded', function () {
    // Gestion du formulaire
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = form.querySelector('input[name="name"]');
            const email = form.querySelector('input[name="email"]');
            const message = form.querySelector('textarea[name="message"]');

            let errors = [];

            if (!name.value.trim()) {
                errors.push("Veuillez renseigner votre nom.");
            }

            if (name.value.trim().length > 0 && name.value.trim().length <= 2) {
                errors.push("Le nom doit contenir plus de 2 caractères.");
            }

            if (!email.value.trim()) {
                errors.push("Veuillez renseigner votre adresse e-mail.");
            } else if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email.value.trim())) {
                errors.push("Format d'adresse e-mail invalide.");
            }

            if (!message.value.trim()) {
                errors.push("Veuillez écrire un message.");
            }

            if (errors.length > 0) {
                alert(errors.join('\n'));
            } else {
                alert("Votre message a bien été envoyé ! Merci pour votre contact.");
                form.reset();
            }
        });
    }

    // Gestion du menu hamburger format smartphone
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }
});