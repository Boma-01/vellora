document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu-2');
            const menuIcon = document.getElementById('menu-icon');
            const closeIcon = document.getElementById('close-icon');
            const desktopMenu = document.getElementById('desktop-menu');

        // Toggle mobile menu visibility
        mobileMenuButton.addEventListener('click', function() {
            // Toggle mobile menu
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icons
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
            
            // Update aria-expanded attribute
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('#mobile-menu-2 a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            });
        });

        // Close mobile menu when clicking outside (optional)
        document.addEventListener('click', function(event) {
            const isClickInsideMobileMenu = mobileMenu.contains(event.target);
            const isClickOnMobileButton = mobileMenuButton.contains(event.target);
            
            if (!isClickInsideMobileMenu && !isClickOnMobileButton && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        });
    });