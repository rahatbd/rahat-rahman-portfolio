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
        strings: ['a web developer', 'based in Toronto', 'working at Q4'],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
    }
    const typed = new Typed('.typed', options);
}

portfolioApp.hamburgerMenu = () => {
    const $hamburger = $('.hamburger');
    const $label = $('.label');
    const $menu = $('nav ul');
    const $background = $('#background');
    $(document).mouseup(event => {
        if (!$hamburger.is(event.target) && $hamburger.has(event.target).length === 0 && !$background.is(event.target)) {
            removeClass();
        }
    })
    $hamburger.on('click', () => {
        toggleClass();
    })
    $hamburger.keypress(event => {
        if (event.keyCode === 13) {
            event.preventDefault();
            toggleClass();
        }
        $menu.on('click', () => {
            removeClass();
        })
    })
    $hamburger.keydown(event => {
        if (event.keyCode === 27) {
            removeClass();
        }
    })
    $(window).scroll(() => {
        removeClass();
    })
    const removeClass = () => {
        $hamburger.removeClass('is-active');
        $label.removeClass('active');
        $menu.removeClass('menu');
        $background.removeClass('background', 250, 'easeOutExpo');
    }
    const toggleClass = () => {
        $hamburger.toggleClass('is-active');
        $label.toggleClass('active');
        $menu.toggleClass('menu');
        $background.toggleClass('background');
    }
}

portfolioApp.mouseCursor = () => {
    $(document).on('mousemove', event => {
        const xPos = event.pageX;
        const yPos = event.pageY;
        $('.cursor').css({
            'top': yPos + 20,
            'left': xPos + 7,
        })
    })
}

portfolioApp.init = () => {
    AOS.init();
    portfolioApp.scrambleText();
    portfolioApp.typedText();
    portfolioApp.hamburgerMenu();
    portfolioApp.mouseCursor();
    console.log('%c Welcome to my Portfolio!', 'background: #fafafa; color: #212121');
}

$(document).ready(function() {
    portfolioApp.init();
})