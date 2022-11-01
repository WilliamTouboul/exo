let nav = document.querySelector('nav');
let work = document.querySelector('h1');
let button_line = document.querySelector('.button_line');
let gallery = document.querySelector('.gallery')

let target = document.querySelector('.target');
let modal = document.querySelector('.modal');
let close_modal = document.querySelector('.close_modal');

/* ---------------------------------- modal --------------------------------- */

// Open
target.addEventListener('click', function () {

    gsap.to(modal, {
        right: 0,
        ease: Power4.easeOut,
    });

    gsap.to('.filter', {
        right: 0,
        ease: Power4.easeOut,
        duration: 0
    })

    let open_tl = gsap.timeline({
        delay: .8,
        ease: Power4.easeOut,
    });

    open_tl.from('.modal .header', {
        height: 0,
        duration: 1.2,
        ease: Power4.easeOut
    });

    open_tl.from('.modal .content', {
        y: 80,
        duration: 1.2,
        ease: Power4.easeOut,
        opacity: 0
    });

})

// Close
close_modal.addEventListener('click', function () {
    gsap.to(modal, {
        right: '-100%',
        ease: Power4.easeOut,
    })

    gsap.to('.filter', {
        right: '-120%',
        duration: 0,
        ease: Power4.easeOut,
    })
})

document.querySelector('.filter').addEventListener('click', function () {
    gsap.to(modal, {
        right: '-100%',
        ease: Power4.easeOut,
    })

    gsap.to('.filter', {
        right: '-120%',
        duration: 0,
        ease: Power4.easeOut,
    })
});

/* --------------------------------- load TL -------------------------------- */
var load_tl = gsap.timeline({});

load_tl.from(nav, {
    y: -150,
    duration: .8,
}, 0);

load_tl.from(work, {
    paddingTop: 400,
    duration: .8,
    opacity: 0
}, 0);

load_tl.from(button_line, {
    y: 200,
    duration: .8,
    opacity: 0
}, 1)

load_tl.from(gallery, {
    y: 700,
    duration: .8,
    opacity: 0
}, 1)