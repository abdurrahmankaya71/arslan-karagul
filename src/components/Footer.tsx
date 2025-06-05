import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  BookOpen,
  User,
} from "lucide-react";
import { FadeIn } from "./animations";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 text-foreground border-t border-border/40 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Logo ve Bilgi */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                Dr. Arslan <span className="text-primary">Karagül</span>
              </h2>
              <p className="text-muted-foreground text-pretty">
                İslami Manevi Bakım ve Din Eğitimi Uzmanı, Süpervizör olarak
                hizmet vermekteyim. Süpervizyon, eğitim ve danışmanlık
                hizmetleri için iletişime geçebilirsiniz.
              </p>
            </div>

            {/* Hızlı Linkler */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Hızlı Linkler</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/kimlik"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <User size={16} className="mr-2 text-primary/70" />
                    <span>Kimlik</span>
                    <ArrowUpRight className="ml-1.5 size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pak-ozel-egitim"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <span>PAK Özel Eğitim Merkezi</span>
                    <ArrowUpRight className="ml-1.5 size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/supvizyon-intervizyon"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <span>Süpervizyon ve İntervizyon</span>
                    <ArrowUpRight className="ml-1.5 size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kitaplar"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <BookOpen size={16} className="mr-2 text-primary/70" />
                    <span>Kitaplar</span>
                    <ArrowUpRight className="ml-1.5 size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mulakatlar"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <span>Mülakatlar</span>
                    <ArrowUpRight className="ml-1.5 size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* İletişim */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">İletişim</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-muted-foreground">
                  <MapPin size={18} className="mt-0.5 text-primary" />
                  <span>Ünye, Ordu / Türkiye</span>
                </li>
                <li className="flex items-start gap-2.5 text-muted-foreground">
                  <Phone size={18} className="mt-0.5 text-primary" />
                  <a
                    href="tel:+905362228827"
                    className="hover:text-primary transition-colors"
                  >
                    0536 222 88 27
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-muted-foreground">
                  <Mail size={18} className="mt-0.5 text-primary" />
                  <a
                    href="mailto:arslankaragul@hotmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    arslankaragul@hotmail.com
                  </a>
                </li>
                <li className="pt-2">
                  <Link
                    href="/iletisim"
                    className="text-primary hover:underline flex items-center group"
                  >
                    <span>İletişim Sayfasına Git</span>
                    <ArrowUpRight className="ml-1.5 size-3.5 opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>

        <div className="border-t border-border/40 mt-10 pt-6 flex justify-center items-center">
          <div className="text-sm text-muted-foreground">
            <p>© {currentYear} Dr. Arslan Karagül. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
