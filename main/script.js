/* БГИТУ IT-Институт - Interactive Features */
// ============================================
// Course Data for Roadmap
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
// Directions (Carousel) Data
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

// Icons for direction cards (SVG strings)
const DIRECTION_ICONS = {
  qualification: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>',
  period: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  field: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
};

// ============================================
// DOM Ready
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initNavigation();
  initScrollReveal();
  initDirectionsCarousel();
  initRoadmap();
  initStaggerAnimations();
  setCurrentYear();
});
// ============================================
// Header Scroll Effect
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
// Navigation
// ============================================
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = ['directions', 'disciplines', 'features', 'faculty', 'roadmap'];
  
  // Smooth scroll on click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.dataset.target;
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Footer links smooth scroll
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
  
  // Active section tracking
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
// Scroll Reveal (IntersectionObserver)
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
// Directions Carousel
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

  // Build slides from data
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

  // Build dots
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
// Staggered Animations
// ============================================
function initStaggerAnimations() {
  // Group elements by their parent section
  const sections = document.querySelectorAll('.disciplines-grid, .features-grid, .faculty-grid');
  
  sections.forEach(section => {
    const items = section.querySelectorAll('[data-stagger]');
    items.forEach((el, i) => {
      el.style.animationDelay = `${0.1 * (i + 1)}s`;
    });
  });
}
// ============================================
// Roadmap Grid
// ============================================
function initRoadmap() {
  const grid = document.getElementById('roadmap-grid');
  const tooltip = document.getElementById('course-tooltip');
  
  if (!grid || !tooltip) return;
  
  // Build the grid
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
  
  // Tooltip handlers
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
// Current Year
// ============================================
function setCurrentYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}