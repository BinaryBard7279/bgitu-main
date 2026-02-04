/* БГИТУ IT-Институт - Interactive Features */

// ============================================
// ДАННЫЕ: КУРСЫ (Для дорожной карты)
// Массив объектов с информацией о каждом блоке учебного плана.
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
// Информация для карточек направлений подготовки.
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

// ============================================
// ДАННЫЕ: ПРЕПОДАВАТЕЛИ (Для второго слайдера-ленты)
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

// SVG иконки для карточек направлений (храним как строки)
const DIRECTION_ICONS = {
  qualification: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>',
  period: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  field: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
};

// ============================================
// ЗАПУСК (DOM Ready)
// Этот код срабатывает, когда HTML полностью загружен браузером.
// Здесь мы инициализируем все функции.
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initAchievements(); // Загружаем достижения
  initHeader();       // Запускаем эффект шапки
  initNavigation();   // Включаем навигацию
  initScrollReveal(); // Включаем анимацию при скролле
  initDirectionsCarousel(); // Собираем слайдер направлений
  initFacultyTape();  // Собираем ленту преподавателей
  initRoadmap();      // Строим дорожную карту
  initStaggerAnimations(); // Настраиваем задержки анимаций
  setCurrentYear();   // Ставим текущий год в футере
  initFAQ();          // Включаем аккордеон вопросов
  initApplyForm();    // Включаем обработку формы
});

// ============================================
// ЭФФЕКТ ШАПКИ (Header Scroll Effect)
// Добавляет тень и фон к шапке, когда пользователь прокручивает страницу вниз.
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
// Обрабатывает клики по меню и плавный скролл к секциям.
// Также подсвечивает активный пункт меню.
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
// SCROLL REVEAL (Появление при скролле)
// Использует IntersectionObserver, чтобы отслеживать, когда элементы появляются на экране,
// и добавляет им класс .visible для запуска CSS анимации.
// ============================================
function initScrollReveal() {
  const observerOptions = {
    threshold: 0.1, // Срабатывать, когда видно 10% элемента
    rootMargin: '0px 0px -50px 0px' // Отступ снизу
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Перестаем следить после первого появления
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}

// ============================================
// КАРУСЕЛЬ НАПРАВЛЕНИЙ
// Логика переключения слайдов, точек навигации и генерации HTML для слайдов.
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

// Вспомогательная функция для безопасности (защита от XSS)
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function initDirectionsCarousel() {
  const track = document.getElementById('directionsTrack');
  const dotsContainer = document.getElementById('directionsDots');
  const prevBtn = document.getElementById('directionsPrev');
  const nextBtn = document.getElementById('directionsNext');

  if (!track || !dotsContainer) return;

  // Создаем слайды из данных
  directions.forEach((data) => {
    track.appendChild(buildDirectionSlide(data));
  });

  const slides = track.querySelectorAll('.direction-slide');
  const total = slides.length;
  let currentIndex = 0;

  function goToSlide(index) {
    currentIndex = (index + total) % total; // Зацикливание
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === currentIndex);
    });
    dotsContainer.querySelectorAll('.directions-dot').forEach((dot, i) => {
      dot.classList.toggle('is-active', i === currentIndex);
      dot.setAttribute('aria-current', i === currentIndex ? 'true' : 'false');
    });
  }

  // Создаем точки навигации
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
// ЛЕНТА ПРЕПОДАВАТЕЛЕЙ (Слайдер с перетаскиванием)
// Реализует логику "перетащи и брось" (drag-and-drop) и инерцию после отпускания мыши.
// ============================================
function buildFacultyCard(data) {
  const card = document.createElement('div');
  card.className = 'faculty-card';
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

  const inner = document.createElement('div');
  inner.className = 'faculty-track-inner';
  faculty.forEach((person) => {
    inner.appendChild(buildFacultyCard(person));
  });
  track.appendChild(inner);

  const CARD_GAP = 24;
  let currentOffset = 0;
  let maxOffset = 0;

  function getCardWidth() {
    const first = inner.querySelector('.faculty-card');
    return first ? first.offsetWidth + CARD_GAP : 384 + CARD_GAP;
  }

  function updateMaxOffset() {
    maxOffset = Math.max(0, inner.offsetWidth - track.clientWidth);
  }

  function applyOffset() {
    inner.style.transform = `translateX(-${currentOffset}px)`;
  }

  function scrollBy(delta) {
    currentOffset = Math.max(0, Math.min(maxOffset, currentOffset + delta));
    applyOffset();
  }

  if (prevBtn) prevBtn.addEventListener('click', () => scrollBy(-getCardWidth()));
  if (nextBtn) nextBtn.addEventListener('click', () => scrollBy(getCardWidth()));

  updateMaxOffset();
  applyOffset();
  window.addEventListener('resize', () => {
    updateMaxOffset();
    currentOffset = Math.min(currentOffset, maxOffset);
    applyOffset();
  });

  // --- ИНЕРЦИЯ ЛЕНТЫ (настройка физики) ---
  const INERTIA_FRICTION = 0.92; // Трение (чем ближе к 1, тем дольше скользит)
  const INERTIA_STRENGTH = 1.2;  // Сила броска

  let isDown = false;
  let startX;
  let startOffset;
  let lastOffset = 0;
  let lastTime = 0;
  let inertiaId = null;

  function stopInertia() {
    if (inertiaId != null) {
      cancelAnimationFrame(inertiaId);
      inertiaId = null;
    }
    track.classList.remove('faculty-inertia');
  }

  function runInertia(velocityPxPerMs) {
    stopInertia();
    let v = velocityPxPerMs * INERTIA_STRENGTH;
    track.classList.add('faculty-inertia');

    function step() {
      currentOffset = Math.max(0, Math.min(maxOffset, currentOffset + v));
      applyOffset();
      v *= INERTIA_FRICTION;
      if (Math.abs(v) > 0.15) {
        inertiaId = requestAnimationFrame(step);
      } else {
        inertiaId = null;
        track.classList.remove('faculty-inertia');
      }
    }
    inertiaId = requestAnimationFrame(step);
  }

  // События мыши для перетаскивания
  track.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    stopInertia();
    isDown = true;
    startX = e.pageX;
    startOffset = currentOffset;
    lastOffset = currentOffset;
    lastTime = performance.now();
    track.classList.add('faculty-dragging');
    track.style.cursor = 'grabbing';
    e.preventDefault();
  });

  window.addEventListener('mouseleave', () => {
    if (!isDown) return;
    const now = performance.now();
    const dt = now - lastTime;
    const velocity = dt > 0 ? (currentOffset - lastOffset) / dt : 0;
    isDown = false;
    track.classList.remove('faculty-dragging');
    track.style.cursor = 'grab';
    runInertia(velocity);
  });

  window.addEventListener('mouseup', () => {
    if (!isDown) return;
    const now = performance.now();
    const dt = now - lastTime;
    const velocity = dt > 0 ? (currentOffset - lastOffset) / dt : 0;
    isDown = false;
    track.classList.remove('faculty-dragging');
    track.style.cursor = 'grab';
    runInertia(velocity);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const drag = e.pageX - startX;
    lastOffset = currentOffset;
    lastTime = performance.now();
    currentOffset = Math.max(0, Math.min(maxOffset, startOffset - drag));
    applyOffset();
    e.preventDefault();
  });
}

// ============================================
// КАСКАДНАЯ АНИМАЦИЯ (Stagger)
// Добавляет задержку animation-delay для элементов внутри сетки,
// чтобы они появлялись по очереди, а не все сразу.
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
// ДОРОЖНАЯ КАРТА (Roadmap Grid)
// Генерирует сетку курсов и управляет всплывающей подсказкой.
// ============================================
function initRoadmap() {
  const grid = document.getElementById('roadmap-grid');
  const tooltip = document.getElementById('course-tooltip');
  
  if (!grid || !tooltip) return;
  
  // Построение сетки
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
  
  // Обработчики для Tooltip (подсказки)
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
// Автоматически обновляет год в копирайте футера.
// ============================================
function setCurrentYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// ============================================
// ДАННЫЕ И ЛОГИКА ДОСТИЖЕНИЙ
// ============================================
const achievementsData = [
  {
    title: 'II место в Первенстве РФ',
    desc: 'Сборная университета завоевала серебро на национальном первенстве и золото Чемпионата ЦФО в дисциплине «Продуктовое программирование». Этот результат подтвердил статус вуза как одного из сильнейших центров ИТ-подготовки в регионе.',
    tag: 'Спорт.программирование',
    color: 'bg-pastel-sky',
    borderColor: 'border-sky'
  },
  {
    title: 'III место «Лесное многоборье»',
    desc: 'Команда магистров БГИТУ вошла в тройку лидеров среди вузов страны, успешно пройдя испытания по воспроизводству и защите лесов. Студенты также заняли второе место на специализированном этапе по имитации тушения лесного пожара.',
    tag: 'Экология',
    color: 'bg-pastel-mint',
    borderColor: 'border-mint'
  },
  {
    title: 'Победы в конкурсе «УМНИК»',
    desc: 'Студенты регулярно выигрывают гранты на реализацию высокотехнологичных проектов. Успехи таких исследователей, как Вероника Смеян, обеспечивают коммерциализацию молодежных научных разработок вуза.',
    tag: 'Наука',
    color: 'bg-pastel-lavender',
    borderColor: 'border-lavender'
  }
];

function initAchievements() {
  const grid = document.getElementById('achievementsGrid');
  if (!grid) return;

  // Очищаем содержимое перед рендером
  grid.innerHTML = '';

  achievementsData.forEach(item => {
    const card = document.createElement('div');
    card.className = `achievement-card ${item.borderColor} reveal`;
    
    // Иконка (кубок)
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
// СЕКЦИЯ "АБИТУРИЕНТУ" (FAQ и Форма)
// ============================================

// Инициализация аккордеона (FAQ)
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Закрываем все остальные пункты (чтобы был открыт только один)
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      // Переключаем текущий пункт
      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px"; // Динамическая высота
      }
    });
  });
}

// Обработка отправки формы
function initApplyForm() {
  const form = document.getElementById('applyForm');
  const successMsg = document.getElementById('formSuccess');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    
    // Имитация отправки (здесь можно подключить API)
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    
    btn.disabled = true;
    btn.textContent = 'Отправка...';

    // Собираем данные формы
    const formData = {
      name: document.getElementById('leadName').value,
      phone: document.getElementById('leadPhone').value,
      direction: document.getElementById('leadDirection').value
    };
    console.log('Lead Data:', formData);

    // Имитация задержки сети
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      form.reset(); // Очистка полей
      
      // Показать сообщение об успехе
      successMsg.style.display = 'flex';
      
      // Скрыть сообщение через 5 секунд
      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 5000);
    }, 1000);
  });
}