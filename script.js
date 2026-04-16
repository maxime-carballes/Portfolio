document.addEventListener('DOMContentLoaded', () => {
    // Add JS check for animations
    document.body.classList.add('js-enabled');

    /* --- Navigation Mobile Burger --- */
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });

    /* --- Scroll Reveal Animations --- */
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Trigger distance

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    /* --- Progress Bar Animations --- */
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    
    const fillProgressBars = () => {
        const windowHeight = window.innerHeight;
        
        progressBars.forEach(bar => {
            const elementTop = bar.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                const percentage = bar.getAttribute('data-width');
                bar.style.width = percentage;
            }
        });
    };

    window.addEventListener('scroll', fillProgressBars);
    setTimeout(fillProgressBars, 500); // Check short after load if currently in view

    setTimeout(fillProgressBars, 500); // Check short after load if currently in view
});
