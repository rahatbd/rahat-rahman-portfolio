const portfolioApp = {}

portfolioApp.scrambleText = () => {
    const phrases = ['Rahat Rahman'];
    const el = document.querySelector('.name');
    // const el = $(".name");
    const fx = new TextScramble(el);
    let counter = 0;

    const next = () => {
        fx.setText(phrases[counter]).then(() => {
            setTimeout(next, 10000);
        });
        // fx.text(phrases[counter]).then(() => {
        //     setTimeout(next, 10000);
        // });
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

portfolioApp.mouseClick = () => {
    $('#mouse').on('click', function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    })
}

portfolioApp.init = () => {
    portfolioApp.scrambleText();
    portfolioApp.typedText();
    portfolioApp.mouseClick();
}

$(document).ready(function() {
    portfolioApp.init();
})