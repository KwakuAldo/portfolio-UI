document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('navbar')
    const menuBtn = document.getElementById('hamburger-menu')
    const menuClose = document.getElementById('menu-close')


    // Open Mobile Menu
    menuBtn.addEventListener('click', function () {
        nav.classList.remove('hidden')
        nav.classList.add('flex')
        console.log("Menu open")
    })

    // Close Mobile Menu
    menuClose.addEventListener('click', function () {
        nav.classList.add('hidden')
    })

    // Close Mobile Menu when click happens outside of menu element
//     document.addEventListener('click', function (e) {
//         if (!nav.contains(e.target) && e.target !== menuBtn) {
//             nav.classList.remove('flex')
//             nav.classList.add('hidden')
//             console.log("Menu closed")
//         }
//     })
})