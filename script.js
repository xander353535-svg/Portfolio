const menuButton = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");
const header = document.querySelector(".header");
const sections = document.querySelectorAll("section");
const progressBar = document.querySelector("#scroll-progress");
const themeToggle = document.querySelector("#theme-toggle");
const cursorGlow = document.querySelector(".cursor-glow");
const projectModal = document.querySelector("#project-details");
const projectModalCategory = document.querySelector("#project-modal-category");
const projectModalTitle = document.querySelector("#project-modal-title");
const projectModalDescription = document.querySelector("#project-modal-description");
const projectModalTools = document.querySelector("#project-modal-tools");
const projectModalClose = document.querySelector(".project-modal-close");
const siteSearch = document.querySelector("#site-search");
const searchInput = document.querySelector("#site-search-input");
const searchResults = document.querySelector("#search-results");

const sectionLabels = {
    home: "Beranda",
    about: "Tentang Saya",
    education: "Pendidikan",
    services: "Keahlian",
    portfolio: "Proyek",
    "contact-information": "Contact Information",
    contact: "Kontak"
};

const searchWebsite = () => {
    const query = searchInput.value.trim().toLowerCase();
    searchResults.replaceChildren();

    if (!query) {
        searchResults.classList.remove("show");
        return;
    }

    const matches = [...sections].filter((section) =>
        section.textContent.toLowerCase().includes(query)
    );

    if (!matches.length) {
        const emptyResult = document.createElement("p");
        emptyResult.className = "search-empty";
        emptyResult.textContent = "Tidak ada hasil ditemukan.";
        searchResults.append(emptyResult);
    } else {
        matches.forEach((section) => {
            const result = document.createElement("a");
            result.href = `#${section.id}`;
            result.setAttribute("role", "option");
            result.innerHTML = `<i class="bx bx-right-arrow-alt"></i><span>${sectionLabels[section.id] || section.id}</span>`;
            result.addEventListener("click", () => {
                searchResults.classList.remove("show");
                searchInput.value = "";
            });
            searchResults.append(result);
        });
    }

    searchResults.classList.add("show");
};

searchInput.addEventListener("input", searchWebsite);
siteSearch.addEventListener("submit", (event) => {
    event.preventDefault();
    searchWebsite();
});
document.addEventListener("click", (event) => {
    if (!siteSearch.contains(event.target)) searchResults.classList.remove("show");
});

const projectDetails = {
    python: {
        category: "PEMROGRAMAN TERSTRUKTUR",
        title: "Mempelajari dasar-dasar bahasa pemrograman Python",
        description: "Project ini berisi latihan untuk memahami dasar pemrograman Python, mulai dari variabel, tipe data, percabangan, perulangan, hingga pembuatan fungsi. Latihan disusun secara bertahap agar logika pemrograman dan pemecahan masalah menjadi lebih terstruktur.",
        tools: ["Python", "Logika pemrograman", "Problem solving"]
    },
    oop: {
        category: "PEMBELAJARAN BERORIENTASI OBJEK",
        title: "Memahami konsep pemrograman berorientasi objek",
        description: "Project ini mengeksplorasi cara membangun program menggunakan class dan object. Di dalamnya terdapat penerapan encapsulation, inheritance, dan method agar kode lebih terorganisir, mudah dikembangkan, serta dapat digunakan kembali.",
        tools: ["Python", "Class & object", "OOP"]
    },
    pplg: {
        category: "PPLG",
        title: "Menanam tanaman untuk lingkungan yang lebih baik",
        description: "Project ini merupakan kegiatan kolaboratif dalam menerapkan kepedulian terhadap lingkungan. Prosesnya meliputi persiapan media tanam, penanaman, dan perawatan tanaman sebagai langkah sederhana untuk menciptakan lingkungan sekolah yang lebih hijau.",
        tools: ["Kerja sama", "Perawatan tanaman", "Peduli lingkungan"]
    }
};

const openProjectModal = (event) => {
    event.preventDefault();
    const detail = projectDetails[event.currentTarget.dataset.project];

    if (!detail || !projectModal) return;

    projectModalCategory.textContent = detail.category;
    projectModalTitle.textContent = detail.title;
    projectModalDescription.textContent = detail.description;
    projectModalTools.replaceChildren(
        ...detail.tools.map((tool) => {
            const item = document.createElement("span");
            item.textContent = tool;
            return item;
        })
    );
    projectModal.classList.add("show");
    projectModal.setAttribute("aria-hidden", "false");
    projectModalClose.focus();
};

const closeProjectModal = () => {
    if (!projectModal) return;
    projectModal.classList.remove("show");
    projectModal.setAttribute("aria-hidden", "true");
};

document.querySelectorAll(".project-detail-trigger").forEach((trigger) => {
    trigger.addEventListener("click", openProjectModal);
});

projectModalClose.addEventListener("click", closeProjectModal);
projectModal.addEventListener("click", (event) => {
    if (event.target === projectModal) closeProjectModal();
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeProjectModal();
});

menuButton.addEventListener("click", () => {
    navbar.classList.toggle("active");

    const icon = menuButton.querySelector("i");
    icon.classList.toggle("bx-menu");
    icon.classList.toggle("bx-x");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");

        const icon = menuButton.querySelector("i");
        icon.classList.add("bx-menu");
        icon.classList.remove("bx-x");
    });
});

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 30);

    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / pageHeight) * 100;

    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }

    let currentSection = "";

    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 180) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentSection}`
        );
    });
});

/* Theme switcher */
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const icon = themeToggle.querySelector("i");
    icon.classList.toggle("bx-sun");
    icon.classList.toggle("bx-moon");
});

/* Cursor glow */
document.addEventListener("mousemove", (event) => {
    if (cursorGlow) {
        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;
    }
});

/* Efek sparkle setiap klik */
document.addEventListener("click", (event) => {
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement("span");
        sparkle.className = "sparkle";

        sparkle.style.left = `${event.clientX}px`;
        sparkle.style.top = `${event.clientY}px`;
        sparkle.style.setProperty("--x", `${Math.random() * 120 - 60}px`);
        sparkle.style.setProperty("--y", `${Math.random() * 120 - 60}px`);

        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 700);
    }
});

if (typeof ScrollReveal !== "undefined") {
    ScrollReveal({
        distance: "40px",
        duration: 1000,
        delay: 100,
        reset: false
    });

    ScrollReveal().reveal(
        ".stats, .about-content, .about-image, .section-heading, .service-card, .project-card, .contact-form",
        {
            origin: "bottom",
            interval: 100
        }
    );
}
