// Image Carousel
let scrollPosition = 0;

function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel-images');
    const carouselWidth = carousel.scrollWidth / carousel.childElementCount;

    scrollPosition += direction * carouselWidth;

    if (scrollPosition < 0) {
        scrollPosition = (carousel.childElementCount - 3) * carouselWidth;
    } else if (scrollPosition >= carousel.scrollWidth - (carouselWidth * 3)) {
        scrollPosition = 0;
    }

    carousel.style.transform = `translateX(-${scrollPosition}px)`;
}

function cloneMarquee() {
    const marquee = document.querySelector('.brand-marquee');
    const clone = marquee.cloneNode(true);
    marquee.parentNode.appendChild(clone);
}

window.onload = cloneMarquee;


// Review Carousel

let reviewIndex = 0;
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
    const reviews = document.querySelector('.reviews');
    const reviewWidth = reviews.querySelector('.review-card').offsetWidth + 20; // 20px margin

    reviewIndex = (reviewIndex + 1) % reviews.childElementCount;
    reviews.style.transform = `translateX(-${reviewWidth * reviewIndex}px)`;

    updateReviewClasses();
}

function startAutoScroll() {
    setInterval(scrollReviews, reviewInterval);
}

// Start the auto-scroll when the page loads
window.onload = () => {
    updateReviewClasses();
    startAutoScroll();
};


document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var whatsappMessage = document.getElementById('whatsapp-message');
        if (whatsappMessage) {
            whatsappMessage.style.display = 'block';
        }
    }, 5000); // 5 seconds delay

    var closeBtn = document.getElementById('close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            var whatsappMessage = document.getElementById('whatsapp-message');
            if (whatsappMessage) {
                whatsappMessage.style.display = 'none';
            }
        });
    }
});
