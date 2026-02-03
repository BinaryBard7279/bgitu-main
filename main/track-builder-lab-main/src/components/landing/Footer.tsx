import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              БГИТУ <span className="text-muted-foreground font-normal">IT-Институт</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Образовательный и карьерный трек в IT с гарантией трудоустройства
            </p>
            <Button asChild className="mt-4">
              <a href="https://priem.bgitu.ru" target="_blank" rel="noopener noreferrer">
                Подать заявление
              </a>
            </Button>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Контакты
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:it@bgitu.ru" className="hover:text-foreground transition-colors">
                  it@bgitu.ru
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+7 (4832) XX-XX-XX</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>г. Брянск, пр-т Станке Димитрова, 3</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Разделы
            </h4>
            <ul className="space-y-2">
              {[
                { href: '#directions', label: 'Направления' },
                { href: '#disciplines', label: 'Дисциплины' },
                { href: '#features', label: 'Преимущества' },
                { href: '#roadmap', label: 'Учебный план' },
              ].map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Decoration */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Мы в соцсетях
            </h4>
            <a
              href="https://vk.com/it_bgitu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.657 4 8.18c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.18-3.61 2.18-3.61.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
              </svg>
              vk.com/it_bgitu
            </a>

            {/* Decorative squares */}
            <div className="flex gap-2 pt-4">
              <div className="w-8 h-8 bg-pastel-sky rounded-lg" />
              <div className="w-8 h-8 bg-pastel-mint rounded-lg" />
              <div className="w-8 h-8 bg-pastel-peach rounded-lg" />
              <div className="w-8 h-8 bg-pastel-lavender rounded-lg" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} БГИТУ IT-Институт. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
