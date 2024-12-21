// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll for Navigation Links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Counter Animation
    const counters = document.querySelectorAll('.counter-number');
    const speed = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target') || 5000;
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });

    // Navbar Hover Effect for Email Button
    const emailButton = document.querySelector('.email-btn');
    if (emailButton) {
        emailButton.addEventListener('mouseover', () => {
            emailButton.style.transform = 'scale(1.1)';
            emailButton.style.transition = 'transform 0.3s ease';
        });
        emailButton.addEventListener('mouseout', () => {
            emailButton.style.transform = 'scale(1)';
        });
    }

    // Navbar Blur Effect on Hover
    const navLinks = document.querySelectorAll('nav ul li a');
    const nav = document.querySelector('nav');

    if (nav) {
        navLinks.forEach(link => {
            link.addEventListener('mouseover', () => {
                nav.style.backdropFilter = 'blur(10px)';
                nav.style.transition = 'backdrop-filter 0.3s ease';
            });
            link.addEventListener('mouseout', () => {
                nav.style.backdropFilter = 'none';
            });
        });
    }

    // Dynamic AI Image Scrolling Animation
    const scrollingImages = document.querySelectorAll('.scrolling-image');

    const animateImages = () => {
        scrollingImages.forEach((image, index) => {
            image.style.transform = `translateY(${window.scrollY * 0.2}px)`;
        });
    };

    window.addEventListener('scroll', animateImages);

    // Hero Section Animation on Page Load
    const heroText = document.querySelector('.hero h1');
    if (heroText) {
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
        heroText.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    }
});
