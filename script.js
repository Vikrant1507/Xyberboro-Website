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
    const slider = document.querySelector('.collaborations-slider');
    const prevBtn = document.querySelector('.slider-nav.prev');
    const nextBtn = document.querySelector('.slider-nav.next');
    const itemWidth = document.querySelector('.collaborations-item').offsetWidth;

    prevBtn.addEventListener('click', function () {
        slider.scrollBy({
            left: -itemWidth,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', function () {
        slider.scrollBy({
            left: itemWidth,
            behavior: 'smooth'
        });
    });
});