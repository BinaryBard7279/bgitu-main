import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Hero() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div
            ref={ref}
            className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              IT-образование
              <br />
              <span className="text-muted-foreground">в БГИТУ</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Образовательный и карьерный трек с последующим трудоустройством. 
              Практика с 3 курса, работа в IT-компаниях региона.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="text-base">
                <a href="https://priem.bgitu.ru" target="_blank" rel="noopener noreferrer">
                  Подать заявление
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base" asChild>
                <a href="#directions">
                  Узнать больше
                </a>
              </Button>
            </div>
          </div>

          {/* Abstract colored squares composition */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-96 h-96">
              {/* Main large square */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-pastel-sky rounded-2xl animate-scale-in" style={{ animationDelay: '0.2s' }} />
              
              {/* Medium squares */}
              <div className="absolute top-24 left-8 w-32 h-32 bg-pastel-mint rounded-xl animate-scale-in" style={{ animationDelay: '0.4s' }} />
              <div className="absolute bottom-8 right-16 w-36 h-36 bg-pastel-peach rounded-xl animate-scale-in" style={{ animationDelay: '0.3s' }} />
              
              {/* Small accent squares */}
              <div className="absolute top-48 right-4 w-20 h-20 bg-pastel-lavender rounded-lg animate-scale-in" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-24 left-0 w-24 h-24 bg-pastel-coral rounded-lg animate-scale-in" style={{ animationDelay: '0.6s' }} />
              
              {/* Tiny decorative squares */}
              <div className="absolute top-8 left-24 w-12 h-12 bg-pastel-sage rounded-md animate-scale-in" style={{ animationDelay: '0.7s' }} />
              <div className="absolute bottom-0 right-48 w-16 h-16 bg-secondary rounded-md animate-scale-in" style={{ animationDelay: '0.8s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
