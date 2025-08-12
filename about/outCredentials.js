
   
        // Intersection Observer for triggering animations
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.credential-card');
                    
                    // Animate cards with staggered timing
                    anime({
                        targets: cards,
                        opacity: [0, 1],
                        translateY: [50, 0],
                        scale: [0.9, 1],
                        duration: 800,
                        delay: anime.stagger(200, {start: 200}),
                        easing: 'easeOutExpo',
                        complete: function() {
                            cards.forEach(card => card.classList.add('animate'));
                        }
                    });

                    // Add floating animation
                    anime({
                        targets: cards,
                        translateY: [0, -10, 0],
                        duration: 3000,
                        loop: true,
                        delay: anime.stagger(300),
                        easing: 'easeInOutSine',
                        direction: 'alternate'
                    });

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Start observing when page loads
        window.addEventListener('DOMContentLoaded', () => {
            const section = document.querySelector('.credentials-section');
            observer.observe(section);

            // Add hover animations
            const cards = document.querySelectorAll('.credential-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    anime({
                        targets: card,
                        scale: 1.05,
                        translateY: -15,
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                });

                card.addEventListener('mouseleave', () => {
                    anime({
                        targets: card,
                        scale: 1,
                        translateY: 0,
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                });
            });
        });