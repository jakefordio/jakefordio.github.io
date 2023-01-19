document.addEventListener("DOMContentLoaded", function(docEvent) {
    // toggle side menu
    let collapseButton = document.getElementById('sidebar_button');
    let sidebar = document.getElementById('sidebar');
    collapseButton.addEventListener('click', (collEvent) => {
        // open/close the menu
        sidebar.classList.toggle('active');
        collapseButton.classList.toggle('active');
    });
}); // end doc ready