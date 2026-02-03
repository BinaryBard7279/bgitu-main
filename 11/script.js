// Smooth scroll по якорям
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Бургер‑меню
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
  });

  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('nav--open'));
  });
}

// FAQ аккордеон
const faq = document.getElementById('faq');
if (faq) {
  faq.addEventListener('click', e => {
    const btn = e.target.closest('.faq__question');
    if (!btn) return;
    const item = btn.parentElement;
    const answer = item.querySelector('.faq__answer');
    const icon = btn.querySelector('.faq__icon');
    const isOpen = answer.classList.contains('faq__answer--open');

    // можно сделать аккордеон с одним открытым
    faq.querySelectorAll('.faq__answer').forEach(a => a.classList.remove('faq__answer--open'));
    faq.querySelectorAll('.faq__icon').forEach(i => (i.textContent = '+'));

    if (!isOpen) {
      answer.classList.add('faq__answer--open');
      icon.textContent = '−';
    }
  });
}

// Интерактивный учебный план
const curriculumData = {
  frontend: [
    { name: 'Информатика и основы программирования', s1: 'Информатика, алгоритмы, базовый код', s2: 'ООП основы', s3: '', s4: '' },
    { name: 'Frontend‑разработка', s1: '', s2: 'HTML/CSS, базовый JS', s3: 'JS, DOM, React basics', s4: '' },
    { name: 'Веб‑проект (командный)', s1: '', s2: '', s3: 'Учебный проект', s4: 'Производственный проект' }
  ],
  backend: [
    { name: 'Информатика и Java', s1: 'Информатика, Java basics', s2: 'ООП, коллекции', s3: '', s4: '' },
    { name: 'Backend на Java', s1: '', s2: 'Servlets, JDBC', s3: 'Spring Boot, REST', s4: 'Microservices' },
    { name: 'Базы данных', s1: '', s2: 'SQL, нормализация', s3: 'Оптимизация, транзакции', s4: '' }
  ],
  mobile: [
    { name: 'Информатика', s1: 'Основы', s2: 'Алгоритмы', s3: '', s4: '' },
    { name: 'Мобильная разработка', s1: '', s2: '', s3: 'Android (Kotlin)', s4: 'iOS / кроссплатформа' }
  ],
  ai: [
    { name: 'Информатика и Python', s1: 'Python basics', s2: 'Алгоритмы и структуры данных', s3: '', s4: '' },
    { name: 'Машинное обучение и ИИ', s1: '', s2: '', s3: 'ML основы, sklearn', s4: 'Нейросети, DL' }
  ],
  devops: [
    { name: 'Информатика', s1: 'Основы', s2: 'Алгоритмы', s3: '', s4: '' },
    { name: 'Системное администрирование', s1: '', s2: '', s3: 'Linux basics', s4: 'Сетевые сервисы' },
    { name: 'DevOps‑практики', s1: '', s2: '', s3: 'Docker, CI', s4: 'Kubernetes, monitoring' }
  ],
  onec: [
    { name: 'Информатика', s1: 'Основы', s2: 'Алгоритмы', s3: '', s4: '' },
    { name: '1С: Разработка', s1: '', s2: '', s3: 'Введение и конфигурирование', s4: 'Отчётность, интеграции' }
  ]
};

const trackSelect = document.getElementById('trackSelect');
const curriculumTable = document.getElementById('curriculumTable');

function renderCurriculum(track = 'frontend') {
  if (!curriculumTable) return;
  const tbody = curriculumTable.querySelector('tbody');
  tbody.innerHTML = '';
  const rows = curriculumData[track] || [];
  rows.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${row.name}</td>
      <td>${row.s1 || ''}</td>
      <td>${row.s2 || ''}</td>
      <td>${row.s3 || ''}</td>
      <td>${row.s4 || ''}</td>
    `;
    tbody.appendChild(tr);
  });
}

if (trackSelect) {
  renderCurriculum(trackSelect.value);
  trackSelect.addEventListener('change', () => renderCurriculum(trackSelect.value));
}

// Простая сохранённая форма (localStorage для MVP без бэкенда)
const leadForm = document.getElementById('leadForm');
const leadSuccess = document.getElementById('leadSuccess');

if (leadForm && leadSuccess) {
  leadForm.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(leadForm).entries());
    try {
      const existing = JSON.parse(localStorage.getItem('bgitu_leads') || '[]');
      existing.push({
        ...data,
        ts: new Date().toISOString()
      });
      localStorage.setItem('bgitu_leads', JSON.stringify(existing));
    } catch (err) {
      console.warn('localStorage not available', err);
    }
    leadSuccess.hidden = false;
    leadForm.reset();
  });
}

// Active nav link on scroll (минимальная версия)
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle(
            'nav__link--active',
            link.getAttribute('href') === `#${id}`
          );
        });
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(sec => observer.observe(sec));
}
