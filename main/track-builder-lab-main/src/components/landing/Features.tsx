import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Shield, Users, Briefcase, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Кибербезопасность',
    subtitle: 'Защита инфраструктуры',
    description: 'Изучение методов защиты программных комплексов и сетей. Анализ уязвимостей и пентестинг.',
    color: 'bg-pastel-sky',
  },
  {
    icon: Users,
    title: 'Проектная работа',
    subtitle: 'С 1 курса',
    description: 'Совместная работа над реальными IT-проектами в командах под руководством наставников.',
    color: 'bg-pastel-mint',
  },
  {
    icon: Briefcase,
    title: 'Практика',
    subtitle: 'С 3 курса',
    description: 'Оплачиваемые стажировки в компаниях-партнёрах. Зарплата от 20 000 ₽ в месяц.',
    color: 'bg-pastel-peach',
  },
  {
    icon: GraduationCap,
    title: 'Трудоустройство',
    subtitle: 'После выпуска',
    description: 'Карьерный трек с гарантией работы. Зарплата выпускников до 150 000 ₽ в месяц.',
    color: 'bg-pastel-lavender',
  },
];

export function Features() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Преимущества обучения
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            От первого курса до трудоустройства — непрерывный путь развития
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`flex gap-5 p-6 rounded-2xl bg-card border border-border/50 hover-lift ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className={`shrink-0 w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-foreground/70" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {feature.subtitle}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
