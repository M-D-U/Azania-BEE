function toggleFaq(faqNumber) {
            const faqItem = document.querySelector(`[data-faq="${faqNumber}"]`);
            const content = faqItem.querySelector('.faq-content');
            const icon = faqItem.querySelector('.faq-icon i');
            const isActive = faqItem.classList.contains('active');

            // Close all other FAQs first
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem && item.classList.contains('active')) {
                    const otherContent = item.querySelector('.faq-content');
                    const otherIcon = item.querySelector('.faq-icon i');
                    
                    anime({
                        targets: otherContent,
                        maxHeight: '0px',
                        duration: 300,
                        easing: 'easeInOutQuad'
                    });
                    
                    anime({
                        targets: item.querySelector('.faq-icon'),
                        rotate: '0deg',
                        duration: 300,
                        easing: 'easeInOutQuad'
                    });
                    
                    otherIcon.classList.remove('fa-minus');
                    otherIcon.classList.add('fa-plus');
                    item.classList.remove('active');
                }
            });

            if (!isActive) {
                // Open this FAQ
                const contentHeight = content.scrollHeight + 'px';
                
                anime({
                    targets: content,
                    maxHeight: contentHeight,
                    duration: 400,
                    easing: 'easeInOutQuad'
                });
                
                anime({
                    targets: faqItem.querySelector('.faq-icon'),
                    rotate: '45deg',
                    duration: 300,
                    easing: 'easeInOutQuad'
                });
                
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
                faqItem.classList.add('active');
            } else {
                // Close this FAQ
                anime({
                    targets: content,
                    maxHeight: '0px',
                    duration: 300,
                    easing: 'easeInOutQuad'
                });
                
                anime({
                    targets: faqItem.querySelector('.faq-icon'),
                    rotate: '0deg',
                    duration: 300,
                    easing: 'easeInOutQuad'
                });
                
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
                faqItem.classList.remove('active');
            }
        }

        // Initialize all FAQ contents to be closed
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.faq-content').forEach(content => {
                content.style.maxHeight = '0px';
            });
        });