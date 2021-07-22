$('.js-menu').on('click', function () {
    $(this).toggleClass('active');
    $('.header').toggleClass('header--active');
});

$(document).on('click', function (e) {
    var container = $('.header');

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        container.removeClass('header--active');
        $('.burger').removeClass('active');
    }
});

// $(window).scroll(function() {
//     if ($(this).scrollTop() > 5){
//         $('.header').addClass('header--sticky');
//     } else{
//         $('.header').removeClass('header--sticky');
//     }
// });

$(() => {
    var teamSlider = new Swiper('.js-team-slider', {
        speed: 800,
        spaceBetween: 10,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 2,
            },
        }
    });
});

$(() => {
    gsap.config({nullTargetWarn:false});

    const testimonialsScene = gsap.timeline({
        defaults: {
            ease: "ease"
        },
        paused: true,
    });

    // переход с баннера на второй экран + кнопка
    const testimonialsTimeline1 = gsap.timeline({
        defaults: {
          duration: 1.2,
          ease: "ease"
        },
    })
        .to('.banner', {
            yPercent: '-50',
        })
        .to('.testimonials', {
            top: '0',
        }, "-=1")


    //вываливание преимуществ
    const testimonialsTimeline2 = gsap.timeline({
        defaults: {
            ease: "ease"
        },
        onStart: function (){
            // анимация вращения элементов
            gsap.utils.toArray('.testimonials__item').forEach((el, index) => {

                function randomInteger(min, max) {
                    let rand = min - 0.5 + Math.random() * (max - min + 1);
                    if (index === 1 && index === 4) {
                        return -Math.round(rand);
                    } else {
                        return Math.round(rand);
                    }
                }

                gsap.timeline({
                    defaults: {
                        ease: "ease"
                    },
                    // onComplete: function () {
                    //     gsap.timeline().to(el, 2, {
                    //         rotation: randomInteger(index, 3) * -10
                    //     })
                    // },
                    // stagger: -6,
                })
                    .fromTo(el, 8, {
                        rotation: randomInteger(-25, 25)
                    }, {
                        rotation: randomInteger(-25, 25)
                })
            })
        },
        // onComplete: function () {
        //     gsap.timeline({
        //         duration: 1
        //     }).to('.testimonials .button--primary', {
        //         autoAlpha: 1,
        //         visibility: 'visible',
        //     }, '-=3');
        // },
    })
        .fromTo('.testimonials__section--1', 5, {
            yPercent: '-150',
        }, {
            yPercent: '120'
        })
        .fromTo('.testimonials__section--2', 5, {
            yPercent: '-150',
        }, {
            yPercent: '120'
        }, "-=7")
        .fromTo('.testimonials__section--3', 5, {
            yPercent: '-150',
        }, {
            yPercent: '0'
        }, "-=5")
        .to('.testimonials .button--primary', 0.5, {
            autoAlpha: 1,
            visibility: 'visible',
        }, "-=2");


    testimonialsScene
        .add(testimonialsTimeline1, 0)
        .add(testimonialsTimeline2, 0);

    // бумеранг
    const testimonialsWoomeraScene = gsap.timeline({
        defaults: {
            ease: "ease"
        },
        paused: true,
    });

    const woomeraTimeline1 = gsap.timeline({
        defaults: {
            ease: "ease",
        },
    })
        .fromTo('.boomerang', 1, {
            rotation: 180,
            autoAlpha: 0,
            scale: 0,
            xPercent: -40,
            yPercent: -40,
        }, {
            rotation: -60,
            autoAlpha: 1,
            scale: 0.5,
        }, "-=0.1")
        .to('.boomerang', 1, {
            xPercent: -135,
            yPercent: -100,
            rotation: 120,
            scale: .8,
        }, "-=0.1")
        .to('.boomerang', 1, {
            rotation: 320,
            xPercent: 55,
            yPercent: -120,
        }, "-=0.1")
        .to('.boomerang', 1, {
            rotation: 460,
            scale: 1.3,
            xPercent: 55,
            yPercent: 20,
        }, "-=0.1")
        .to('.boomerang', 1.1, {
            rotation: 580,
            xPercent: -115,
            yPercent: 30,
        }, "-=0.2")

        .to('.boomerang', 1.5, {
            rotation: 980,
            xPercent: -115,
            yPercent: -50,
            scale: 0,
        }, "-=0.65");

    const woomeraTimeline2 = gsap.timeline({
        defaults: {
            ease: "ease",
        },
    })
        .to('.testimonials__section--3 .testimonials__item--1', 0.5, {
            xPercent: -15,
            yPercent: -15,
        }, "-=0.5")
        .to('.testimonials__section--3 .testimonials__item--2', 0.5, {
            xPercent: 10,
            yPercent: -10,
        }, "-=0.5")
        .to('.testimonials__section--3 .testimonials__item--3', 0.5, {
            xPercent: -25,
            yPercent: 25,
        }, "-=0.5")
        .to('.testimonials__section--3 .testimonials__item--4', 0.5, {
            xPercent: 25,
            yPercent: 25,
        }, "-=0.5")
        .to('.testimonials__section--3 .testimonials__item--5', 0.5, {
            xPercent: -15,
            yPercent: 25,
        }, "-=0.5");

    const woomeraTimeline3 = gsap.timeline({
        defaults: {
            ease: "ease",
        },
    })
        .to('.testimonials__section--3 .testimonials__item--1', 0.5, {
            xPercent: -155,
            yPercent: -75,
            autoAlpha: 0,
        }, 0.6)
        .to('.testimonials__section--3 .testimonials__item--3', 1.2, {
            xPercent: -175,
            yPercent: 45,
            autoAlpha: 0,
        }, 0.5)
        .to('.testimonials__section--3 .testimonials__item--2', 1, {
            xPercent: 160,
            yPercent: -70,
            autoAlpha: 0,
        }, 1.65)
        .to('.testimonials__section--3 .testimonials__item--4', 0.5, {
            xPercent: 175,
            yPercent: 165,
            autoAlpha: 0,
        }, 2.25)
        .to('.testimonials__section--3 .testimonials__item--5', 0.5, {
            xPercent: -75,
            yPercent: 125,
            autoAlpha: 0,
        }, 2.95);

    $('.js-start-animation').on('click', function() {
        testimonialsScene.play();
    });

    $('.js-start-woomera').on('click', function() {
        testimonialsScene.pause();
        testimonialsWoomeraScene.play();
    });

    // переход со второго на третий
    const serviceTimeline = gsap.timeline({
        defaults: {
            duration: 1.2,
            ease: "ease",
        },
    })
        .to('.service', {
            top: '0',
        })
        .staggerFromTo('.service__item', .6, {y:30,opacity:0}, {y:0,opacity: 1}, 0.2)
        // .fromTo(('.service__item'), {
        //     autoAlpha: 0,
        // }, {
        //     autoAlpha: 1,
        // })
        .fromTo(('.service .button'), {
            autoAlpha: 0,
        }, {
            autoAlpha: 1,
        });

    // скрыть кнопку в преимуществах
    const hideTestimonialsButton = gsap.timeline({
        defaults: {
            duration: 1.2,
            ease: "ease",
        },
    })
        .to('.testimonials .button', {
            autoAlpha: 0,
        })


    testimonialsWoomeraScene
        .add(hideTestimonialsButton, 0.5)
        .add(woomeraTimeline1, 0.7)
        .add(woomeraTimeline2, 0.7)
        .add(woomeraTimeline3, 1.2)
        .add(serviceTimeline);


});