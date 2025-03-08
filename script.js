document.querySelector('.fashion-dropdown').addEventListener('click', function (e) {
    e.preventDefault();
    // This prevents the default action of the click event. If your dropdown trigger 
    // is a link (<a> tag), 
    // this stops it from navigating to a new page.
    this.classList.toggle('active');
    // This toggles the 'active' class on the clicked element. If the element doesn't 
    // have the 'active' class, it adds it; if it already has it, it removes it.
});