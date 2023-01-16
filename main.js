let menuVisible = false;
document.addEventListener("DOMContentLoaded", function(event) {
    // toggle side menu
    let collapseButton = document.getElementById('sidebar_button');
    let sidebar = document.getElementById('sidebar');
    collapseButton.addEventListener('click', (event) => {
        // open/close the menu
        sidebar.classList.toggle('active');
    });
}); // end doc ready