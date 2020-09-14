const portfolioApp = {}

portfolioApp.scrambleText = () => {
    const phrases = ['Rahat Rahman'];
    const el2 = $(".name");
    const fx = new TextScramble(el2[0]);
    let counter = 0;

    const next = () => {
        fx.setText(phrases[counter]).then(() => {
            setTimeout(next, 5000);
        });
        counter = (counter + 1) % phrases.length;
    }

    next();
}

portfolioApp.typedText = () => {
    const options = {
        strings: ['a front-end web developer.', 'based in Toronto.'],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
    }
    const typed = new Typed('.typed', options);
}

portfolioApp.init = () => {
    portfolioApp.scrambleText();
    portfolioApp.typedText();
}

$(document).ready(function() {
    portfolioApp.init();
})