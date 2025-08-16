// Intersection Observer for triggering animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.credential-card');
            
            // Fade-in only (no bounce)
            anime({
                targets: cards,
                opacity: [0, 1],
                duration: 800,
                delay: anime.stagger(200, { start: 200 }),
                easing: 'easeOutExpo',
                complete: function() {
                    cards.forEach(card => card.classList.add('animate'));
                }
            });

            // ❌ Removed floating loop

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Start observing when page loads
window.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.credentials-section');
    observer.observe(section);

    // Hover animations
    const cards = document.querySelectorAll('.credential-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card,
                scale: 1.05,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });

        card.addEventListener('mouseleave', () => {
            anime({
                targets: card,
                scale: 1,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });
});
