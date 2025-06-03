import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { FadeIn } from "./animations";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 text-foreground border-t border-border/40 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo ve Bilgi */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                Dr. Arslan <span className="text-primary">Karagül</span>
              </h2>
              <p className="text-muted-foreground text-pretty">
                Psikoloji alanında uzman, yazar ve eğitimci olarak hizmet
                vermekteyim. Süpervizyon, eğitim ve danışmanlık hizmetleri için
                iletişime geçebilirsiniz.
              </p>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Youtube"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Hızlı Linkler */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Hızlı Linkler</h3>
              <ul className="space-y-3">
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
                  <span>İstanbul, Türkiye</span>
                </li>
                <li className="flex items-start gap-2.5 text-muted-foreground">
                  <Phone size={18} className="mt-0.5 text-primary" />
                  <span>+90 555 123 4567</span>
                </li>
                <li className="flex items-start gap-2.5 text-muted-foreground">
                  <Mail size={18} className="mt-0.5 text-primary" />
                  <span>iletisim@arslankaragul.com</span>
                </li>
              </ul>
            </div>

            {/* Bülten */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Bültene Abone Olun</h3>
              <p className="text-muted-foreground">
                Makaleler, etkinlikler ve yeni hizmetlerden haberdar olmak için
                bültene abone olun.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 mt-2">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="bg-background px-3 py-2 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary flex-1"
                />
                <Button size="sm" className="shrink-0">
                  Abone Ol
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="border-t border-border/40 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Dr. Arslan Karagül. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <span>Sevgiyle hazırlandı</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
          </div>
          <div className="flex gap-5">
            <Link
              href="/gizlilik-politikasi"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/kullanim-sartlari"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
