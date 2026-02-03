import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const disciplines = [
  {
    name: 'Java',
    description: 'Разработка серверных приложений, ООП, среды разработки',
    color: 'bg-pastel-coral',
  },
  {
    name: 'Python',
    description: 'Машинное обучение, нейросети, прикладная разработка',
    color: 'bg-pastel-mint',
  },
  {
    name: '1С',
    description: 'Разработка бизнес-приложений, адаптация конфигураций',
    color: 'bg-pastel-peach',
  },
  {
    name: 'Frontend',
    description: 'HTML/CSS, React, современные JavaScript-фреймворки',
    color: 'bg-pastel-sky',
  },
  {
    name: 'Mobile',
    description: 'Кроссплатформенная и нативная мобильная разработка',
    color: 'bg-pastel-lavender',
  },
  {
    name: 'QA & Testing',
    description: 'Тестирование ПО, автоматизация, контроль качества',
    color: 'bg-pastel-sage',
  },
];

export function Disciplines() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="disciplines" className="py-24">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Технологический стек
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Изучайте востребованные технологии под руководством практикующих специалистов
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {disciplines.map((discipline, index) => (
            <div
              key={discipline.name}
              className={`group p-6 rounded-2xl bg-card hover-lift border border-border/50 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className={`w-16 h-16 ${discipline.color} rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110`} />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {discipline.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {discipline.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
