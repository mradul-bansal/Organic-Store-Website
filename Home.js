// Image Carousel
let scrollPosition = 0;

function scrollCarousel(direction = 1) {
    const carousel = document.querySelector('.carousel-images');
    const carouselWidth = carousel.scrollWidth / carousel.childElementCount;

    scrollPosition += direction * carouselWidth;

    if (scrollPosition < 0) {
        scrollPosition = (carousel.childElementCount - 1) * carouselWidth;
    } else if (scrollPosition >= carousel.scrollWidth) {
        scrollPosition = 0;
    }

    carousel.style.transform = `translateX(-${scrollPosition}px)`;
}

function cloneMarquee() {
    const marquee = document.querySelector('.brand-marquee');
    const clone = marquee.cloneNode(true);
    marquee.parentNode.appendChild(clone);
}

// Review Carousel
let reviewIndex = -1;
const reviewInterval = 3000; // 3 seconds interval

function updateReviewClasses() {
    const reviews = document.querySelectorAll('.review-card');
    reviews.forEach((review, index) => {
        review.classList.remove('middle');
        if (index === (reviewIndex + 1) % reviews.length) {
            review.classList.add('middle');
        }
    });
}

function scrollReviews() {
    const reviewsContainer = document.querySelector('.reviews');
    const reviewWidth = reviewsContainer.querySelector('.review-card').offsetWidth + 20; // 20px margin

    reviewIndex = (reviewIndex + 1) % reviewsContainer.childElementCount;
    reviewsContainer.style.transform = `translateX(-${reviewWidth * reviewIndex}px)`;

    updateReviewClasses();
}

function startAutoScroll() {
    setInterval(scrollReviews, reviewInterval);
}

// Initialize functions after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateReviewClasses();
    startAutoScroll();

    // Display WhatsApp message after 5 seconds
    setTimeout(() => {
        const whatsappMessage = document.getElementById('whatsapp-message');
        if (whatsappMessage) {
            whatsappMessage.classList.add('show'); // Use a CSS class for showing the message
        }
    }, 5000); // 5 seconds delay

    // Close button functionality
    const closeBtn = document.getElementById('close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const whatsappMessage = document.getElementById('whatsapp-message');
            if (whatsappMessage) {
                whatsappMessage.classList.remove('show'); // Use a CSS class for hiding the message
            }
        });
    }
});
