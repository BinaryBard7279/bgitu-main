import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Directions } from '@/components/landing/Directions';
import { Disciplines } from '@/components/landing/Disciplines';
import { Features } from '@/components/landing/Features';
import { Faculty } from '@/components/landing/Faculty';
import { Roadmap } from '@/components/landing/Roadmap';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Directions />
        <Disciplines />
        <Features />
        <Faculty />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
