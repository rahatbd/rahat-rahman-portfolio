const portfolioApp = {}

portfolioApp.scrambleText = () => {
    const phrases = ['Rahat Rahman'];
    const el2 = $('.name');
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

portfolioApp.menuBar = () => {
    const $menu = $('.fa-bars');
    $(document).mouseup(event => {
        if (!$menu.is(event.target)) {
            $('nav ul').removeClass('menu');
            $('#background').removeClass('background');
        }
    })
    $menu.on('click', () => {
        $('nav ul').toggleClass('menu');
        $('#background').toggleClass('background');
    })
    $menu.keypress(event => {
        if (event.keyCode === 13) {
            event.preventDefault();
            $('nav ul').toggleClass('menu');
            $('#background').toggleClass('background');
        }
    })
}

portfolioApp.init = () => {
    portfolioApp.scrambleText();
    portfolioApp.typedText();
    portfolioApp.menuBar();
}

$(document).ready(function() {
    portfolioApp.init();
})