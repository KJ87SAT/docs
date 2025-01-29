document.addEventListener("DOMContentLoaded", function () {
    const sidebarItems = document.querySelectorAll(".sidebar li");
    const contents = document.querySelectorAll(".content");
    const sidebarToggle = document.getElementById("sidebarToggle");
    const body = document.body;

    sidebarItems.forEach(item => {
        item.addEventListener("click", function () {
            sidebarItems.forEach(el => el.classList.remove("active"));
            item.classList.add("active");

            contents.forEach(section => section.classList.remove("active"));
            document.getElementById(item.dataset.target).classList.add("active");
        });
    });

    sidebarToggle.addEventListener("click", function () {
        body.classList.toggle("sidebar-open");
    });
});
