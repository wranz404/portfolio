// === Переключение темы ===
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle("dark-theme");
    const btn = document.querySelector(".theme-toggle button");
    const icon = btn.querySelector("span:first-child");
    const text = btn.querySelector("span:last-child");

    if (isDark) {
        icon.textContent = "☀️";
        text.textContent = "Светлая тема";
        localStorage.setItem("theme", "dark");
    } else {
        icon.textContent = "🌙";
        text.textContent = "Тёмная тема";
        localStorage.setItem("theme", "light");
    }
}

// === Сохранение темы и анимации при загрузке ===
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        const btn = document.querySelector(".theme-toggle button");
        btn.innerHTML = '<span>☀️</span><span>Светлая тема</span>';
    }

    // Анимация появления секций
    const sections = document.querySelectorAll(".main-content section");
    sections.forEach((sec, i) => {
        setTimeout(() => {
            sec.style.opacity = 1;
        }, 200 * i);
    });

    // Анимация карточек
    const cards = document.querySelectorAll(".skill-card, .testimonial-card");
    cards.forEach((card, i) => {
        card.style.opacity = 0;
        setTimeout(() => {
            card.style.transition = "all 0.6s ease";
            card.style.opacity = 1;
        }, 300 + i * 100);
    });
};