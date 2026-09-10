const slogans = [
    "Códigos que conectam.",
    "Ideias que transformam."   
];

const taglineElement = document.querySelector(".abertura-pagina__tagline-text");

let sloganIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
    const currentText = slogans[sloganIndex];

    if (!isDeleting) {
        charIndex = Math.min(charIndex + 1, currentText.length);
        taglineElement.textContent = currentText.slice(0, charIndex);

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeLoop, 1600);
            return;
        }
    } else {
        charIndex = Math.max(charIndex - 1, 0);
        taglineElement.textContent = currentText.slice(0, charIndex);

        if (charIndex === 0) {
            isDeleting = false;
            sloganIndex = (sloganIndex + 1) % slogans.length;
        }
    }

    const speed = isDeleting ? 45 : 90;
    setTimeout(typeLoop, speed);
}

if (taglineElement) {
    taglineElement.textContent = "";
    typeLoop();
}
