document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".content-section");
    const sidebarLinks = document.querySelectorAll(".sidebar ul li a");

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove("active");
        });
        document.getElementById(sectionId).classList.add("active");

        sidebarLinks.forEach(link => {
            link.classList.remove("active");
        });
        document.querySelector(`[data-section="${sectionId}"]`).classList.add("active");
    }

    sidebarLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute("data-section");
            showSection(sectionId);
        });
    });

    // 最初のステップをデフォルトで表示
    showSection("step1");
});
