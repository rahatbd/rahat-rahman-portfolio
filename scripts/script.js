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
    const options = {
        strings: ['a front-end web developer.', 'based in Toronto.'],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
    }
    const typed = new Typed('.typed', options);
    console.log(options);
})