document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("search-icon");
    const searchBox = document.getElementById("search-box");

    searchIcon.addEventListener("click", function () {
        // Toggle search bar
        if (searchBox.style.display === "none" || searchBox.style.display === "") {
            searchBox.style.display = "flex";
        } else {
            searchBox.style.display = "none";
        }
    });
});