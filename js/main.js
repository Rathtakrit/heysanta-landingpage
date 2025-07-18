// HeySanta Landing Page JavaScript
// Author: GitHub Copilot
// Description: Interactive functionality for the HeySanta landing page

class HeySantaLanding {
    constructor() {
        this.launchDate = new Date('2025-08-12T00:00:00').getTime();
        this.init();
    }

    init() {
        this.initCountdown();
        this.initModal();
        this.initAnimations();
        this.initEventListeners();
        this.initScrollEffects(); // Added scroll effects
    }

    // Countdown Timer Functionality
    initCountdown() {
        this.updateCountdown();
        this.countdownInterval = setInterval(() => {
            this.updateCountdown();
        }, 1000);
    }

    updateCountdown() {
        const now = new Date().getTime();
        const distance = this.launchDate - now;

        const elements = {
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds')
        };

        if (distance < 0) {
            document.getElementById('countdown').innerHTML = 
                '<div class="countdown-launched">🎄 LAUNCHED! 🎄</div>';
            clearInterval(this.countdownInterval);
            return;
        }

        const time = {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
        };

        Object.keys(time).forEach(key => {
            if (elements[key]) {
                elements[key].textContent = time[key].toString().padStart(2, '0');
            }
        });
    }

    // Modal Functionality
    initModal() {
        this.modal = document.getElementById('email-modal');
        this.form = document.getElementById('email-form');
        this.message = document.getElementById('form-message');
        this.emailInput = document.getElementById('email-input');
    }

    showModal() {
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Focus on email input
        setTimeout(() => {
            this.emailInput.focus();
        }, 100);
    }

    hideModal() {
        this.modal.classList.remove('show');
        document.body.style.overflow = 'auto';
        this.resetForm();
        
        // Reset the sign-up button state when modal closes
        const waitlistBtn = document.getElementById('waitlist-btn');
        if (waitlistBtn) {
            this.resetButtonState(waitlistBtn);
        }
    }

    resetForm() {
        this.form.reset();
        this.message.style.display = 'none';
        this.message.className = 'form-message';
    }

    showMessage(text, type = 'success') {
        this.message.textContent = text;
        this.message.className = `form-message ${type}`;
        this.message.style.display = 'block';
    }

    // Form Submission
    async handleFormSubmit(e) {
        e.preventDefault();
        
        const email = this.emailInput.value.trim();
        
        if (!this.validateEmail(email)) {
            this.showMessage('Please enter a valid email address.', 'error');
            return;
        }

        this.showMessage('🎄 Adding you to our nice list...', 'loading');

        try {
            // Simulate API call - Replace with your Google Apps Script URL
            await this.simulateAPICall(email);
            
            this.showMessage('🎁 Welcome to the HeySanta family! We\'ll notify you when we launch.', 'success');
            
            // Close modal after 2 seconds
            setTimeout(() => {
                this.hideModal();
            }, 2000);
            
        } catch (error) {
            this.showMessage('Something went wrong. Please try again.', 'error');
        }
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Simulate API call (replace with actual implementation)
    simulateAPICall(email) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Email submitted:', email);
                resolve();
            }, 1500);
        });
    }

    // Animation Effects
    initAnimations() {
        // Add staggered animations to elements
        const elements = document.querySelectorAll('.fade-in-up');
        elements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.1}s`;
        });

        // Add bounce animation to scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.classList.add('bounce-gentle');
        }
    }

    // Scroll Effects - Progress Bar and Auto-Hide Navbar
    initScrollEffects() {
        let lastScrollY = window.scrollY;
        const header = document.querySelector('.header');
        const progressFill = document.querySelector('.progress-fill');
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Update progress bar
            this.updateProgressBar(progressFill);
            
            // Auto-hide navbar
            this.updateNavbarVisibility(header, currentScrollY, lastScrollY);
            
            lastScrollY = currentScrollY;
        });
    }

    // Update reading progress bar
    updateProgressBar(progressFill) {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / (documentHeight - windowHeight)) * 100;
        
        progressFill.style.width = Math.min(progress, 100) + '%';
    }

    // Auto-hide navbar based on scroll direction
    updateNavbarVisibility(header, currentScrollY, lastScrollY) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down - hide header
            header.classList.add('hidden');
        } else {
            // Scrolling up - show header
            header.classList.remove('hidden');
        }
    }

    // Button Animations
    animateButton(button) {
        // Prevent multiple clicks during animation
        if (button.disabled) return;
        
        button.disabled = true;
        button.style.pointerEvents = 'none';
        button.style.transform = 'scale(0.95)';
        button.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            button.style.transform = 'scale(1.05)';
        }, 250);
        
        setTimeout(() => {
            button.style.transform = 'scale(1)';
            button.style.pointerEvents = 'auto';
            button.disabled = false;
        }, 500);
    }

    // Reset button state
    resetButtonState(button) {
        // Clear all inline styles to let CSS take over
        button.style.transform = '';
        button.style.pointerEvents = '';
        button.style.transition = '';
        button.classList.remove('clicked');
        
        // Force a reflow to ensure styles are applied
        button.offsetHeight;
        
        // Re-enable the button explicitly
        button.disabled = false;
        button.style.cursor = 'pointer';
    }

    // Event Listeners
    initEventListeners() {
        // Waitlist button
        const waitlistBtn = document.getElementById('waitlist-btn');
        if (waitlistBtn) {
            waitlistBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.animateButton(waitlistBtn);
                setTimeout(() => {
                    this.showModal();
                }, 200);
            });
        }

        // Close modal button
        const closeBtn = document.getElementById('close-modal');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.hideModal();
                // Reset the sign-up button state when modal closes
                const waitlistBtn = document.getElementById('waitlist-btn');
                if (waitlistBtn) {
                    this.resetButtonState(waitlistBtn);
                }
            });
        }

        // Modal backdrop click
        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.hideModal();
                    // Reset the sign-up button state when modal closes
                    const waitlistBtn = document.getElementById('waitlist-btn');
                    if (waitlistBtn) {
                        this.resetButtonState(waitlistBtn);
                    }
                }
            });
        }

        // Form submission
        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                this.handleFormSubmit(e);
            });
        }

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('show')) {
                this.hideModal();
                // Reset the sign-up button state when modal closes via Escape
                const waitlistBtn = document.getElementById('waitlist-btn');
                if (waitlistBtn) {
                    this.resetButtonState(waitlistBtn);
                }
            }
        });

        // Kickstarter button hover effect
        const kickstarterBtn = document.getElementById('kickstarter-btn');
        if (kickstarterBtn) {
            kickstarterBtn.addEventListener('mouseenter', () => {
                kickstarterBtn.style.transform = 'scale(1.02)';
            });
            
            kickstarterBtn.addEventListener('mouseleave', () => {
                kickstarterBtn.style.transform = 'scale(1)';
            });
        }

        // Smooth scroll for scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth'
                });
            });
        }

        // Footer waitlist button
        const footerWaitlistBtn = document.getElementById('footer-waitlist-btn');
        if (footerWaitlistBtn) {
            footerWaitlistBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal();
            });
        }
    }

    // Utility Methods
    addSparkleEffect(element) {
        const rect = element.getBoundingClientRect();
        const sparkleCount = 6;
        
        for (let i = 0; i < sparkleCount; i++) {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.cssText = `
                position: fixed;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
                font-size: 20px;
                pointer-events: none;
                z-index: 9999;
                animation: sparkleFloat 1s ease-out forwards;
                transform: translate(-50%, -50%);
            `;
            
            document.body.appendChild(sparkle);
            
            // Random direction
            const angle = (i / sparkleCount) * 2 * Math.PI;
            const distance = 50 + Math.random() * 30;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            sparkle.style.setProperty('--x', x + 'px');
            sparkle.style.setProperty('--y', y + 'px');
            
            setTimeout(() => sparkle.remove(), 1000);
        }
    }

    // Cleanup
    destroy() {
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.heySantaLanding = new HeySantaLanding();
});

// Add sparkle animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleFloat {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        50% {
            transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(0);
            opacity: 0;
        }
    }
    
    .countdown-launched {
        font-family: 'Archivo Black', sans-serif;
        font-size: 1.5rem;
        color: var(--red);
        text-align: center;
    }
`;
document.head.appendChild(style);
