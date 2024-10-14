document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navbar = document.querySelector('.navbar');

    
    const navSlide = () => {
        burger.addEventListener('click', () => {
            
            nav.classList.toggle('nav-active');

            
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            
            burger.classList.toggle('toggle');
        });
    };

    
    const shrinkNavbar = () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.padding = '0.5rem 2rem';
            } else {
                navbar.style.padding = '1rem 2rem';
            }
        });
    };

    
    const dropdownHover = () => {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseover', () => {
                dropdown.querySelector('.dropdown-content').style.display = 'block';
            });
            dropdown.addEventListener('mouseout', () => {
                dropdown.querySelector('.dropdown-content').style.display = 'none';
            });
        });
    };

    
    const searchAnimation = () => {
        const searchInput = document.querySelector('.search-container input');
        const searchButton = document.querySelector('.search-container button');

        searchButton.addEventListener('click', (e) => {
            e.preventDefault();
            searchInput.classList.toggle('active');
            searchInput.focus();
        });
    };

    
    navSlide();
    shrinkNavbar();
    dropdownHover();
    searchAnimation();
});
