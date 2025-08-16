document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
            dropdown.addEventListener('mouseenter', () => {
                anime({
                    targets: dropdown.querySelectorAll('.dropdown-menu li'),
                    opacity: [0, 1],
                    translateY: [-10, 0],
                    delay: anime.stagger(80),
                    duration: 400,
                    easing: 'easeOutQuad'
                });
            });
        });



        window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) { // Change after 50px scroll
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });