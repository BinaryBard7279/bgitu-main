import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const faculty = [
  {
    name: 'Иванов И.И.',
    company: 'TechSoft',
    disciplines: ['Java', 'Backend архитектура'],
    color: 'bg-pastel-sky',
  },
  {
    name: 'Петрова А.С.',
    company: 'DataCorp',
    disciplines: ['Аналитика данных', 'Python'],
    color: 'bg-pastel-mint',
  },
  {
    name: 'Сидоров В.К.',
    company: 'SoftSol',
    disciplines: ['1С-разработка', 'Бизнес-аналитика'],
    color: 'bg-pastel-peach',
  },
  {
    name: 'Козлова М.А.',
    company: 'ГК Иннотех',
    disciplines: ['Frontend', 'JavaScript'],
    color: 'bg-pastel-lavender',
  },
];

export function Faculty() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faculty" className="py-24">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Преподаватели из IT-индустрии
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Занятия ведут практикующие специалисты ведущих IT-компаний региона
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((person, index) => (
            <div
              key={person.name}
              className={`text-center p-6 rounded-2xl bg-card border border-border/50 hover-lift ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Placeholder square for photo */}
              <div className={`w-24 h-24 ${person.color} rounded-2xl mx-auto mb-4 transition-transform duration-300 hover:scale-105`} />
              
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {person.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {person.company}
              </p>
              <div className="flex flex-wrap justify-center gap-1">
                {person.disciplines.map(discipline => (
                  <span
                    key={discipline}
                    className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                  >
                    {discipline}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
