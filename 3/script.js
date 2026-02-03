// Переключение темы
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const body = document.body;

// Проверяем сохраненную тему
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Обработчик переключения темы
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Обновление иконки темы
function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// Мобильное меню
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.setAttribute('aria-expanded', navMenu.classList.contains('active'));
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
});

// Слайдер направлений
const sliderTrack = document.querySelector('.slider-track');
const directionCards = document.querySelectorAll('.direction-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderDotsContainer = document.querySelector('.slider-dots');

let currentSlide = 0;
const slideCount = directionCards.length;

// Создание точек навигации
for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    sliderDotsContainer.appendChild(dot);
}

const sliderDots = document.querySelectorAll('.slider-dot');

// Функция перехода к слайду
function goToSlide(slideIndex) {
    if (slideIndex < 0) slideIndex = slideCount - 1;
    if (slideIndex >= slideCount) slideIndex = 0;
    
    currentSlide = slideIndex;
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Обновление активной точки
    sliderDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Обработчики кнопок навигации
prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

// Автоматическое перелистывание
let slideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);

// Остановка автопрокрутки при наведении
sliderTrack.addEventListener('mouseenter', () => clearInterval(slideInterval));
sliderTrack.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
});

// Аккордеон для особенностей направлений
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    
    header.addEventListener('click', () => {
        // Закрываем все открытые элементы
        accordionItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // Открываем/закрываем текущий элемент
        item.classList.toggle('active');
    });
});

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Анимация появления элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Наблюдаем за элементами, которые нужно анимировать
document.querySelectorAll('.direction-card, .discipline-card, .teacher-card, .schedule-card, .accordion-item').forEach(el => {
    observer.observe(el);
});

// Добавляем CSS класс для анимации
const style = document.createElement('style');
style.textContent = `
    .direction-card, .discipline-card, .teacher-card, .schedule-card, .accordion-item {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .direction-card.animate-in, 
    .discipline-card.animate-in, 
    .teacher-card.animate-in, 
    .schedule-card.animate-in, 
    .accordion-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Форма обратной связи
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Получаем данные формы
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const direction = this.querySelector('select').value;
        
        // В реальном приложении здесь был бы запрос к серверу
        // Для демо просто показываем сообщение
        alert(`Спасибо, ${name}! Ваша заявка на направление "${getDirectionName(direction)}" принята. Мы свяжемся с вами по email ${email} в ближайшее время.`);
        
        // Сбрасываем форму
        this.reset();
    });
}

// Вспомогательная функция для получения названия направления
function getDirectionName(value) {
    const directions = {
        'cybersecurity': 'Кибербезопасность',
        'ai': 'Искусственный интеллект',
        'software': 'Разработка ПО',
        'data': 'Анализ данных',
        'web': 'Веб-технологии'
    };
    
    return directions[value] || value;
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Добавляем класс для анимации уже видимых элементов
    setTimeout(() => {
        const visibleElements = document.querySelectorAll('.direction-card, .discipline-card, .teacher-card, .schedule-card, .accordion-item');
        visibleElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('animate-in');
            }
        });
    }, 100);
});