
var Turbolinks = require("turbolinks")
Turbolinks.start()

document.addEventListener("turbolinks:load", function() {
    console.log('ready')

    const stickyElm = document.querySelector('header')

    const observer = new IntersectionObserver(([e]) => e.target.classList.toggle('isStuck', !e.isIntersecting), { threshold: 1.0 })

    observer.observe(stickyElm)
})

if (document.readyState === "interactive") {
    const event = document.createEvent("Event");
    event.initEvent("turbolinks:load", true, true);
    document.dispatchEvent(event);
}

// var nav = document.querySelector('#nav');
// nav.addEventListener('click', (e) => {
//     header.classList.add('open')
// })

// var close = document.querySelector('#close');
// close.addEventListener('click', (e) => {
//     header.classList.remove('open')
// })
