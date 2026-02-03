import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const directions = [
  {
    code: '09.03.01',
    title: 'Кибербезопасность программных комплексов',
    track: 'ИВТ',
    description: 'Защита информационных систем, анализ уязвимостей, пентестинг и криптография.',
    color: 'bg-pastel-sky',
  },
  {
    code: '09.03.01',
    title: 'Искусственный интеллект',
    track: 'ИВТ',
    description: 'Машинное обучение, нейронные сети, обработка естественного языка и Big Data.',
    color: 'bg-pastel-mint',
  },
  {
    code: '09.03.01',
    title: 'Автоматизированное проектирование',
    track: 'ИВТ',
    description: 'Робототехнические системы, CAD-технологии и промышленная автоматизация.',
    color: 'bg-pastel-peach',
  },
  {
    code: '09.03.02',
    title: 'Информационные системы и технологии',
    track: 'ИСиТ',
    description: 'Проектирование и разработка корпоративных информационных систем.',
    color: 'bg-pastel-lavender',
  },
  {
    code: '09.03.04',
    title: 'Программная инженерия',
    track: 'ПИ',
    description: 'Полный цикл разработки ПО: от архитектуры до DevOps и тестирования.',
    color: 'bg-pastel-coral',
  },
];

export function Directions() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="directions" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Направления подготовки
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите свой путь в IT — 5 актуальных направлений с практикой в ведущих компаниях
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {directions.map((direction, index) => (
            <Card
              key={direction.title}
              className={`hover-lift border-0 shadow-sm ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 ${direction.color} rounded-lg`} />
                  <Badge variant="secondary" className="text-xs">
                    {direction.code}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-snug">{direction.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 text-sm">
                  <span>Бакалавр</span>
                  <span className="text-muted">•</span>
                  <span>4 года</span>
                  <span className="text-muted">•</span>
                  <span>{direction.track}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4">
                  {direction.description}
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://priem.bgitu.ru" target="_blank" rel="noopener noreferrer">
                    Подать заявление
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
