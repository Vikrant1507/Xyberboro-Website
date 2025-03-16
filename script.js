// // document.querySelector('.fashion-dropdown').addEventListener('click', function (e) {
// //     e.preventDefault();
// //     // This prevents the default action of the click event. If your dropdown trigger 
// //     // is a link (<a> tag), 
// //     // this stops it from navigating to a new page.
// //     this.classList.toggle('active');
// //     // This toggles the 'active' class on the clicked element. If the element doesn't 
// //     // have the 'active' class, it adds it; if it already has it, it removes it.
// // }); 

// document.addEventListener('DOMContentLoaded', function() {
//     // For mobile, make performance dropdown work with click
//     const performanceDropdown = document.querySelector('.performance-dropdown');

//     if (performanceDropdown) {
//       const link = performanceDropdown.querySelector('.nav-link');

//       link.addEventListener('click', function(e) {
//         if (window.innerWidth < 992) {
//           e.preventDefault();
//           const dropdownContent = this.nextElementSibling;
//           dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
//         }
//       });
//     }
//   });


document.addEventListener('DOMContentLoaded', function () {
    /// Ensures the code runs only after the entire HTML document has finished loading
    // This prevents errors that would occur if the code tried to access elements before they exist in the DOM

    const slider = document.querySelector('.collaborations-slider'); // Selects the main slider container
    const prevBtn = document.querySelector('.slider-nav.prev'); // Selects the "previous" navigation button
    const nextBtn = document.querySelector('.slider-nav.next'); // Selects the "next" navigation button
    const itemWidth = document.querySelector('.collaborations-item').offsetWidth;
    const scroltop = document.getElementById('scrollToTop'); // FIX: Changed to getElementById for accurate selection

    // Gets the width of the first collaboration item in pixels
    // This width value is used to determine how far to scroll when buttons are clicked

    prevBtn.addEventListener('click', function () {
        // Sets up a click event handler
        // When clicked, it scrolls the slider left by exactly one item's width
        // The scrollBy() method takes an object with:
        slider.scrollBy({
            left: -itemWidth, // Negative value means scroll left
            behavior: 'smooth' // Creates a smooth scrolling animation instead of jumping instantly
        });
    });

    nextBtn.addEventListener('click', function () {
        slider.scrollBy({
            left: itemWidth, // Positive value means scroll right
            behavior: 'smooth' // Creates a smooth scrolling animation
        });
    });

    // Scroll-to-top functionality
    if (scroltop) { // Ensures scroltop is not null before adding an event listener
        window.addEventListener('scroll', function () {
            if (window.scrollY > 200) { // FIX: Added condition to show the button when scrolling down
                scroltop.classList.add('visible'); // Show button
            } else {
                scroltop.classList.remove('visible'); // Hide button
            }
        });

        scroltop.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});








