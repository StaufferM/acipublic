let currentIndex = 0;

function scrollCarousel(direction) {
    const carouselInner = document.querySelector('.icon-carousel-inner');
    const items = document.querySelectorAll('.icon-item');
    const itemWidth = items[0].offsetWidth + 20; // Icon width + gap
    const visibleItems = 5; // Number of visible items
    const totalItems = items.length;

    // Update the current index and loop if necessary
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - visibleItems;
    } else if (currentIndex > totalItems - visibleItems) {
        currentIndex = 0;
    }

    // Apply the transform for full visibility of the current index
    const offset = currentIndex * itemWidth;
    carouselInner.style.transform = `translateX(-${offset}px)`;
}
