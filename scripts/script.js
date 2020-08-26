const portfolioApp = {}

portfolioApp.scrambleText = () => {
    const phrases = ['Rahat Rahman'];
    const el = document.querySelector('.name');
    const fx = new TextScramble(el);
    let counter = 0;

    const next = () => {
        fx.setText(phrases[counter]).then(() => {
            setTimeout(next, 10000);
        });
        counter = (counter + 1) % phrases.length;
    };

    next();
}

portfolioApp.init = () => {
    portfolioApp.scrambleText();
}

$(document).ready(function() {
    portfolioApp.init();
})