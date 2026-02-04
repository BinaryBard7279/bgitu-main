/* БГИТУ IT-Институт - Interactive Features */

// ============================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================
// Защита от XSS (вставка вредоносного кода через данные)
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ============================================
// ДАННЫЕ: КУРСЫ (Для дорожной карты)
// ============================================
const courses = [
  {
    name: 'Информатика',
    startSemester: 1,
    endSemester: 2,
    color: 'bg-pastel-sky',
    description: 'Базовые основы программирования и алгоритмического мышления',
  },
  {
    name: 'Алгоритмы и структуры данных',
    startSemester: 2,
    endSemester: 3,
    color: 'bg-pastel-mint',
    description: 'Фундаментальные алгоритмы, сложность, оптимизация',
  },
  {
    name: 'Frontend-разработка',
    startSemester: 3,
    endSemester: 4,
    color: 'bg-pastel-peach',
    description: 'HTML, CSS, JavaScript, React и современные фреймворки',
  },
  {
    name: 'Backend (Java/C#)',
    startSemester: 4,
    endSemester: 5,
    color: 'bg-pastel-coral',
    description: 'Серверная разработка, REST API, микросервисы',
  },
  {
    name: 'Базы данных',
    startSemester: 4,
    endSemester: 6,
    color: 'bg-pastel-lavender',
    description: 'SQL, NoSQL, проектирование и оптимизация БД',
  },
  {
    name: 'Машинное обучение и ИИ',
    startSemester: 5,
    endSemester: 7,
    color: 'bg-pastel-sage',
    description: 'Python, нейросети, обработка данных, ML-модели',
  },
  {
    name: 'Мобильная разработка',
    startSemester: 6,
    endSemester: 7,
    color: 'bg-pastel-sky',
    description: 'Кроссплатформенная и нативная разработка приложений',
  },
  {
    name: 'Дипломный проект',
    startSemester: 7,
    endSemester: 8,
    color: 'bg-pastel-mint',
    description: 'Реальный проект для компании-партнёра',
  },
];
const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

// ============================================
// ДАННЫЕ: НАПРАВЛЕНИЯ (Для первого слайдера)
// ============================================
const directions = [
  {
    title: 'Кибербезопасность',
    badge: 'IT',
    qualification: 'Бакалавр',
    period: '4 года',
    fieldName: 'Информатика и вычислительная техника (ИВТ)',
    description: 'Программа готовит специалистов по защите информационных систем от кибератак и обеспечению безопасности данных.',
  },
  {
    title: 'Искусственный интеллект',
    badge: 'IT',
    qualification: 'Бакалавр',
    period: '4 года',
    fieldName: 'Информатика и вычислительная техника (ИВТ)',
    description: 'Машинное обучение, нейронные сети, обработка естественного языка и работа с большими данными.',
  },
  {
    title: 'Автоматизированное проектирование',
    badge: 'IT',
    qualification: 'Бакалавр',
    period: '4 года',
    fieldName: 'Информатика и вычислительная техника (ИВТ)',
    description: 'Робототехнические системы, CAD-технологии и промышленная автоматизация.',
  },
  {
    title: 'Информационные системы и технологии',
    badge: 'IT',
    qualification: 'Бакалавр',
    period: '4 года',
    fieldName: 'Информационные системы и технологии (ИСиТ)',
    description: 'Проектирование и разработка корпоративных информационных систем.',
  },
  {
    title: 'Программная инженерия',
    badge: 'IT',
    qualification: 'Бакалавр',
    period: '4 года',
    fieldName: 'Программная инженерия (09.03.04)',
    description: 'Полный цикл разработки ПО: от архитектуры до DevOps и тестирования.',
  },
];

// SVG иконки
const DIRECTION_ICONS = {
  qualification: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>',
  period: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  field: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
};

// ============================================
// ДАННЫЕ: ПРЕПОДАВАТЕЛИ
// ============================================
const faculty = [
  {
    name: 'Анна Смирнова',
    company: 'Huesoft',
    disciplines: ['Кибербезопасность', 'Защита сетей', 'Криптография', 'Анализ уязвимостей', 'Этичный хакинг'],
  },
  {
    name: 'Протасов Павел Николаевич',
    company: 'Директор ООО «СОФТСОЛ»',
    disciplines: ['Разработка приложений в среде Java', 'Язык программирования Java', 'Объектно-ориентированное программирование'],
  },
  {
    name: 'Кондратенко Сергей Викторович',
    company: 'Директор ООО «НООСОФТ»',
    disciplines: ['JavaScript-разработка'],
  },
  {
    name: 'Иванов И.И.',
    company: 'TechSoft',
    disciplines: ['Java', 'Backend архитектура'],
  },
  {
    name: 'Петрова А.С.',
    company: 'DataCorp',
    disciplines: ['Аналитика данных', 'Python'],
  },
  {
    name: 'Сидоров В.К.',
    company: 'SoftSol',
    disciplines: ['1С-разработка', 'Бизнес-аналитика'],
  },
  {
    name: 'Козлова М.А.',
    company: 'ГК Иннотех',
    disciplines: ['Frontend', 'JavaScript'],
  },
];

// ============================================
// ЗАПУСК (DOM Ready)
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initAchievements(); // Загружаем достижения
  initHeader();       // Запускаем эффект шапки
  initNavigation();   // Включаем навигацию
  initScrollReveal(); // Включаем анимацию при скролле
  initDirectionsCarousel(); // Собираем слайдер направлений
  initFacultyTape();  // Собираем ленту преподавателей (ИСПРАВЛЕНО)
  initRoadmap();      // Строим дорожную карту
  initStaggerAnimations(); // Настраиваем задержки анимаций
  setCurrentYear();   // Ставим текущий год в футере
  initFAQ();          // Включаем аккордеон вопросов
  initApplyForm();    // Включаем обработку формы
});

// ============================================
// ЭФФЕКТ ШАПКИ
// ============================================
function initHeader() {
  const header = document.getElementById('header');
  const updateHeader = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', updateHeader);
  updateHeader();
}

// ============================================
// НАВИГАЦИЯ
// ============================================
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = ['directions', 'disciplines', 'features', 'faculty', 'roadmap'];
  
  // Плавный скролл при клике
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.dataset.target;
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Ссылки в футере
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  
  // Подсветка активной секции при скролле
  const updateActiveSection = () => {
    let activeSection = '';
    
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 150) {
        activeSection = id;
        break;
      }
    }
    
    navLinks.forEach(link => {
      if (link.dataset.target === activeSection) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };
  
  window.addEventListener('scroll', updateActiveSection);
  updateActiveSection();
}

// ============================================
// SCROLL REVEAL
// ============================================
function initScrollReveal() {
  const observerOptions = {
    threshold: 0.1, 
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}

// ============================================
// КАРУСЕЛЬ НАПРАВЛЕНИЙ
// ============================================
function buildDirectionSlide(data) {
  const slide = document.createElement('div');
  slide.className = 'direction-slide';
  slide.innerHTML = `
    <div class="direction-card">
      <div class="direction-card-head">
        <h3 class="direction-title">${escapeHtml(data.title)}</h3>
        <span class="direction-badge">${escapeHtml(data.badge || 'IT')}</span>
      </div>
      <div class="direction-attrs">
        <div class="direction-attr">
          <span class="direction-attr-icon" aria-hidden="true">${DIRECTION_ICONS.qualification}</span>
          <div>
            <span class="direction-attr-label">Квалификация</span>
            <span class="direction-attr-value">${escapeHtml(data.qualification)}</span>
          </div>
        </div>
        <div class="direction-attr">
          <span class="direction-attr-icon" aria-hidden="true">${DIRECTION_ICONS.period}</span>
          <div>
            <span class="direction-attr-label">Срок обучения</span>
            <span class="direction-attr-value">${escapeHtml(data.period)}</span>
          </div>
        </div>
        <div class="direction-attr">
          <span class="direction-attr-icon" aria-hidden="true">${DIRECTION_ICONS.field}</span>
          <div>
            <span class="direction-attr-label">Направление</span>
            <span class="direction-attr-value">${escapeHtml(data.fieldName)}</span>
          </div>
        </div>
      </div>
      <p class="direction-description">${escapeHtml(data.description)}</p>
    </div>
  `;
  return slide;
}

function initDirectionsCarousel() {
  const track = document.getElementById('directionsTrack');
  const dotsContainer = document.getElementById('directionsDots');
  const prevBtn = document.getElementById('directionsPrev');
  const nextBtn = document.getElementById('directionsNext');

  if (!track || !dotsContainer) return;

  directions.forEach((data) => {
    track.appendChild(buildDirectionSlide(data));
  });

  const slides = track.querySelectorAll('.direction-slide');
  const total = slides.length;
  let currentIndex = 0;

  function goToSlide(index) {
    currentIndex = (index + total) % total;
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === currentIndex);
    });
    dotsContainer.querySelectorAll('.directions-dot').forEach((dot, i) => {
      dot.classList.toggle('is-active', i === currentIndex);
      dot.setAttribute('aria-current', i === currentIndex ? 'true' : 'false');
    });
  }

  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'directions-dot' + (i === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', `Направление ${i + 1}`);
    dot.setAttribute('aria-current', i === 0 ? 'true' : 'false');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

  goToSlide(0);
}

// ============================================
// ЛЕНТА ПРЕПОДАВАТЕЛЕЙ (ИСПРАВЛЕНО)
// ============================================
function buildFacultyCard(data) {
  const card = document.createElement('div');
  card.className = 'faculty-card';
  // Генерируем список дисциплин
  const disciplinesList = data.disciplines.map((d) => `<li>${escapeHtml(d)}</li>`).join('');
  
  card.innerHTML = `
    <div class="faculty-photo-placeholder"></div>
    <div class="faculty-info">
      <h3 class="faculty-name">${escapeHtml(data.name)}</h3>
      <p class="faculty-company">${escapeHtml(data.company)}</p>
      <p class="faculty-disciplines-title">Дисциплины:</p>
      <ul class="faculty-disciplines">${disciplinesList}</ul>
    </div>
  `;
  return card;
}

function initFacultyTape() {
  const track = document.getElementById('facultyTrack');
  const prevBtn = document.getElementById('facultyPrev');
  const nextBtn = document.getElementById('facultyNext');

  if (!track) return;

  // 1. Создаем внутренний контейнер
  const inner = document.createElement('div');
  inner.className = 'faculty-track-inner';
  
  // Наполняем карточками
  faculty.forEach((person) => {
    inner.appendChild(buildFacultyCard(person));
  });

  // Очищаем трек и вставляем внутренний контейнер
  track.innerHTML = ''; 
  track.appendChild(inner);

  // 2. Переменные состояния
  let currentOffset = 0;
  let maxOffset = 0;
  const CARD_GAP = 24; // 1.5rem = 24px

  // 3. Обновление метрик (ResizeObserver)
  const updateMetrics = () => {
    // maxOffset = Ширина контента минус ширина окна просмотра
    maxOffset = Math.max(0, inner.scrollWidth - track.clientWidth);
    
    // Если при ресайзе мы улетели дальше конца, возвращаемся
    if (currentOffset > maxOffset) {
      currentOffset = maxOffset;
      applyOffset();
    }
  };

  const resizeObserver = new ResizeObserver(() => {
    updateMetrics();
  });
  resizeObserver.observe(track);
  resizeObserver.observe(inner);

  function applyOffset() {
    inner.style.transform = `translateX(-${currentOffset}px)`;
  }

  function getStepWidth() {
    // Берем ширину первой карточки + отступ. Если карточек нет, дефолт 300
    const card = inner.querySelector('.faculty-card');
    return card ? card.offsetWidth + CARD_GAP : 300; 
  }

  // Логика кнопок
  const scrollByArrow = (direction) => {
    const step = getStepWidth();
    const targetOffset = currentOffset + (direction * step);
    currentOffset = Math.max(0, Math.min(maxOffset, targetOffset));
    applyOffset();
  };

  if (prevBtn) prevBtn.addEventListener('click', () => scrollByArrow(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => scrollByArrow(1));

  // --- DRAG & DROP (Мышь + Touch) ---
  let isDragging = false;
  let startX = 0;
  let startOffset = 0;
  let lastTime = 0;
  let lastX = 0;
  let velocity = 0;
  let inertiaRaf = null;

  const startDrag = (x) => {
    if (inertiaRaf) cancelAnimationFrame(inertiaRaf);
    track.classList.remove('faculty-inertia');
    isDragging = true;
    startX = x;
    startOffset = currentOffset;
    lastX = x;
    lastTime = performance.now();
    velocity = 0;
    track.classList.add('faculty-dragging');
  };

  const moveDrag = (x) => {
    if (!isDragging) return;
    const delta = startX - x;
    let newOffset = startOffset + delta;
    
    // Эффект резинки на границах
    if (newOffset < 0) newOffset = newOffset * 0.5;
    if (newOffset > maxOffset) newOffset = maxOffset + (newOffset - maxOffset) * 0.5;

    currentOffset = newOffset;
    applyOffset();

    // Расчет скорости
    const now = performance.now();
    const dt = now - lastTime;
    if (dt > 0) {
      velocity = (lastX - x) / dt;
      lastX = x;
      lastTime = now;
    }
  };

  const endDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove('faculty-dragging');

    // Если вышли за границы - возвращаем (CSS transition)
    if (currentOffset < 0 || currentOffset > maxOffset) {
      track.classList.add('faculty-inertia');
      currentOffset = Math.max(0, Math.min(maxOffset, currentOffset));
      applyOffset();
    } else {
      // Иначе запускаем инерцию
      startInertia();
    }
  };

  const startInertia = () => {
    const friction = 0.95;
    if (Math.abs(velocity) < 0.05) return;

    function step() {
      if (Math.abs(velocity) < 0.05) {
        track.classList.remove('faculty-inertia');
        return;
      }
      velocity *= friction;
      currentOffset += velocity * 10;
      
      // Проверка границ в полете
      if (currentOffset < 0) { currentOffset = 0; velocity = 0; }
      else if (currentOffset > maxOffset) { currentOffset = maxOffset; velocity = 0; }

      applyOffset();
      inertiaRaf = requestAnimationFrame(step);
    }
    inertiaRaf = requestAnimationFrame(step);
  };

  // События мыши
  track.addEventListener('mousedown', (e) => { e.preventDefault(); startDrag(e.pageX); });
  window.addEventListener('mousemove', (e) => moveDrag(e.pageX));
  window.addEventListener('mouseup', endDrag);
  window.addEventListener('mouseleave', endDrag);

  // События тачскрина (Телефоны)
  track.addEventListener('touchstart', (e) => startDrag(e.touches[0].pageX), { passive: true });
  window.addEventListener('touchmove', (e) => moveDrag(e.touches[0].pageX), { passive: false });
  window.addEventListener('touchend', endDrag);
}

// ============================================
// КАСКАДНАЯ АНИМАЦИЯ (Stagger)
// ============================================
function initStaggerAnimations() {
  const sections = document.querySelectorAll('.disciplines-grid, .features-grid');
  sections.forEach(section => {
    const items = section.querySelectorAll('[data-stagger]');
    items.forEach((el, i) => {
      el.style.animationDelay = `${0.1 * (i + 1)}s`;
    });
  });
}

// ============================================
// ДОРОЖНАЯ КАРТА
// ============================================
function initRoadmap() {
  const grid = document.getElementById('roadmap-grid');
  const tooltip = document.getElementById('course-tooltip');
  
  if (!grid || !tooltip) return;
  
  courses.forEach((course, courseIndex) => {
    const row = document.createElement('div');
    row.className = 'roadmap-row';
    
    semesters.forEach(sem => {
      const isActive = sem >= course.startSemester && sem <= course.endSemester;
      const isStart = sem === course.startSemester;
      const isEnd = sem === course.endSemester;
      
      const cell = document.createElement('div');
      cell.className = 'roadmap-cell';
      
      if (isActive) {
        cell.classList.add('active', course.color);
        if (isStart) cell.classList.add('start');
        if (isEnd) cell.classList.add('end');
        cell.dataset.courseIndex = courseIndex;
        
        if (isStart) {
          const text = document.createElement('span');
          text.className = 'roadmap-cell-text';
          text.textContent = course.name;
          cell.appendChild(text);
        }
      } else {
        cell.classList.add('inactive');
      }
      
      row.appendChild(cell);
    });
    
    grid.appendChild(row);
  });
  
  grid.addEventListener('mouseenter', (e) => {
    const cell = e.target.closest('.roadmap-cell.active');
    if (cell && cell.dataset.courseIndex !== undefined) {
      const course = courses[parseInt(cell.dataset.courseIndex)];
      showTooltip(course, tooltip);
    }
  }, true);
  
  grid.addEventListener('mouseleave', (e) => {
    const cell = e.target.closest('.roadmap-cell.active');
    if (cell) {
      hideTooltip(tooltip);
    }
  }, true);
}

function showTooltip(course, tooltip) {
  const colorClass = course.color.replace('bg-', '');
  const colorMap = {
    'pastel-sky': 'var(--pastel-sky)',
    'pastel-mint': 'var(--pastel-mint)',
    'pastel-peach': 'var(--pastel-peach)',
    'pastel-lavender': 'var(--pastel-lavender)',
    'pastel-coral': 'var(--pastel-coral)',
    'pastel-sage': 'var(--pastel-sage)',
  };
  
  const duration = course.endSemester - course.startSemester + 1;
  
  tooltip.innerHTML = `
    <div class="tooltip-icon" style="background-color: ${colorMap[colorClass]}"></div>
    <div class="tooltip-title">${course.name}</div>
    <div class="tooltip-description">${course.description}</div>
    <div class="tooltip-meta">Семестры ${course.startSemester}–${course.endSemester} (${duration} сем.)</div>
  `;
  tooltip.style.display = 'block';
}

function hideTooltip(tooltip) {
  tooltip.style.display = 'none';
}

// ============================================
// ТЕКУЩИЙ ГОД
// ============================================
function setCurrentYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// ============================================
// ДОСТИЖЕНИЯ
// ============================================
const achievementsData = [
  {
    title: 'II место в Первенстве РФ',
    desc: 'Сборная университета завоевала серебро на национальном первенстве и золото Чемпионата ЦФО в дисциплине «Продуктовое программирование».',
    tag: 'Спорт.программирование',
    color: 'bg-pastel-sky',
    borderColor: 'border-sky'
  },
  {
    title: 'III место «Лесное многоборье»',
    desc: 'Команда магистров БГИТУ вошла в тройку лидеров среди вузов страны, успешно пройдя испытания по воспроизводству и защите лесов.',
    tag: 'Экология',
    color: 'bg-pastel-mint',
    borderColor: 'border-mint'
  },
  {
    title: 'Победы в конкурсе «УМНИК»',
    desc: 'Студенты регулярно выигрывают гранты на реализацию высокотехнологичных проектов. Успехи таких исследователей, как Вероника Смеян, обеспечивают коммерциализацию разработок.',
    tag: 'Наука',
    color: 'bg-pastel-lavender',
    borderColor: 'border-lavender'
  }
];

function initAchievements() {
  const grid = document.getElementById('achievementsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  achievementsData.forEach(item => {
    const card = document.createElement('div');
    card.className = `achievement-card ${item.borderColor} reveal`;
    
    const iconSvg = `<svg class="achievement-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>`;

    card.innerHTML = `
      <div class="achievement-header">
        <span class="achievement-tag ${item.color}">${item.tag}</span>
        ${iconSvg}
      </div>
      <h3 class="achievement-title">${item.title}</h3>
      <p class="achievement-desc">${item.desc}</p>
    `;
    grid.appendChild(card);
  });
}

// ============================================
// FAQ & FORM
// ============================================
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

function initApplyForm() {
  const form = document.getElementById('applyForm');
  const successMsg = document.getElementById('formSuccess');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    
    btn.disabled = true;
    btn.textContent = 'Отправка...';

    // Эмуляция отправки
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      form.reset();
      
      successMsg.style.display = 'flex';
      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 5000);
    }, 1000);
  });
}