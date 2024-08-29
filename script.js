document.addEventListener('DOMContentLoaded', () => {
    const greetButton = document.getElementById('greetButton');
    const greetingMessage = document.getElementById('greetingMessage');

    greetButton.addEventListener('click', () => {
        greetingMessage.textContent = 'Hello! Thanks for visiting my website.';
    });
});
