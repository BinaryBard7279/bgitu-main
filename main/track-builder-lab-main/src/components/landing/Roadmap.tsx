import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Course {
  name: string;
  startSemester: number;
  endSemester: number;
  color: string;
  description: string;
}

const courses: Course[] = [
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

export function Roadmap() {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredCourse, setHoveredCourse] = useState<Course | null>(null);

  return (
    <section id="roadmap" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Учебный план
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            8 семестров интенсивного обучения — от основ до профессиональной разработки
          </p>
        </div>

        {/* Course details tooltip */}
        {hoveredCourse && (
          <div className="fixed top-4 right-4 z-50 p-4 bg-card rounded-xl shadow-lg border border-border max-w-xs animate-scale-in">
            <div className={`w-8 h-8 ${hoveredCourse.color} rounded-lg mb-3`} />
            <h4 className="font-semibold text-foreground mb-1">{hoveredCourse.name}</h4>
            <p className="text-sm text-muted-foreground mb-2">{hoveredCourse.description}</p>
            <p className="text-xs text-muted-foreground">
              Семестры {hoveredCourse.startSemester}–{hoveredCourse.endSemester} ({hoveredCourse.endSemester - hoveredCourse.startSemester + 1} сем.)
            </p>
          </div>
        )}

        {/* Interactive grid */}
        <div
          className={`overflow-x-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <div className="min-w-[800px]">
            {/* Semester headers */}
            <div className="grid grid-cols-8 gap-2 mb-4">
              {semesters.map(sem => (
                <div key={sem} className="text-center text-sm font-medium text-muted-foreground py-2">
                  {sem} сем.
                </div>
              ))}
            </div>

            {/* Course rows */}
            <div className="space-y-3">
              {courses.map((course, index) => (
                <div key={course.name} className="grid grid-cols-8 gap-2">
                  {semesters.map(sem => {
                    const isActive = sem >= course.startSemester && sem <= course.endSemester;
                    const isStart = sem === course.startSemester;
                    const isEnd = sem === course.endSemester;

                    return (
                      <div
                        key={sem}
                        className={`h-14 flex items-center justify-center transition-all duration-300 cursor-pointer ${
                          isActive
                            ? `${course.color} ${isStart ? 'rounded-l-xl' : ''} ${isEnd ? 'rounded-r-xl' : ''} hover:opacity-80`
                            : 'bg-muted/30 rounded-lg'
                        }`}
                        onMouseEnter={() => isActive && setHoveredCourse(course)}
                        onMouseLeave={() => setHoveredCourse(null)}
                        style={{ animationDelay: `${0.05 * index}s` }}
                      >
                        {isStart && (
                          <span className="text-xs font-medium text-foreground/80 px-2 truncate">
                            {course.name}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Year markers */}
            <div className="grid grid-cols-4 gap-4 mt-6 pt-4 border-t border-border">
              {[1, 2, 3, 4].map(year => (
                <div key={year} className="text-center text-sm text-muted-foreground">
                  {year} курс
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
