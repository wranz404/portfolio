// === Открыть/закрыть модальное окно ===
function openAuthModal() {
    document.getElementById("authModal").style.display = "flex";
}

function closeAuthModal() {
    document.getElementById("authModal").style.display = "none";
}

// === Переключение между вкладками: Вход / Регистрация ===
function openTab(tabName) {
    const forms = document.querySelectorAll('.auth-form');
    forms.forEach(form => form.style.display = 'none');

    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}

// === Имитация входа → переход в кабинет ===
document.getElementById("login").addEventListener("submit", function(e) {
    e.preventDefault();
    document.querySelector(".hero").style.display = "none";
    document.querySelector(".main-content").style.display = "none";
    document.getElementById("authModal").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
});

// === Выход из кабинета ===
function logout() {
    document.getElementById("dashboard").style.display = "none";
    document.querySelector(".hero").style.display = "block";
    document.querySelector(".main-content").style.display = "block";
}

// === Показ разделов кабинета ===
function showSection(id) {
    const contents = document.querySelectorAll('.dash-content');
    contents.forEach(content => content.style.display = 'none');

    const buttons = document.querySelectorAll('.dash-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(id).style.display = 'block';
    event.currentTarget.classList.add('active');
}

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
    const sections = document.querySelectorAll(".main-content section, #testimonials");
    sections.forEach((sec, i) => {
        setTimeout(() => {
            sec.style.opacity = 1;
        }, 200 * i);
    });

    // Анимация карточек
    const cards = document.querySelectorAll(".skill-card, .project-card, .testimonial-card");
    cards.forEach((card, i) => {
        card.style.opacity = 0;
        setTimeout(() => {
            card.style.transition = "all 0.6s ease";
            card.style.opacity = 1;
        }, 300 + i * 100);
    });
};

// === Отправка нового заказа ===
document.querySelector("#new-order .btn").addEventListener("click", function () {
    const textarea = document.querySelector("#new-order textarea");
    const value = textarea.value.trim();

    if (value === "") {
        alert("Опишите ваш проект");
        return;
    }

    // Имитация успешной отправки
    alert("Заказ отправлен! Спасибо, я свяжусь с вами в ближайшее время.");
    textarea.value = "";
});