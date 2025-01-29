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

        const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }

        // URLのハッシュを更新（履歴に残さない）
        history.replaceState(null, null, `#${sectionId}`);
    }

    sidebarLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute("data-section");
            showSection(sectionId);
        });
    });

    // 初回読み込み時にURLのハッシュを確認し、適切なセクションを表示
    const initialSection = location.hash ? location.hash.substring(1) : "step1";
    if (document.getElementById(initialSection)) {
        showSection(initialSection);
    } else {
        showSection("step1");
    }
});
