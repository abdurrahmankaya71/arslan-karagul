"use client";

import { FadeIn, BackgroundGradient } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Mail,
  Phone,
  BookOpen,
  ExternalLink,
  Info,
  User,
} from "lucide-react";
import Link from "next/link";

export default function Iletisim() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Başlık Bölümü */}
      <FadeIn direction="down">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 bg-gradient-to-r from-primary/20 to-blue-500/20 px-5 py-2 rounded-full">
            <p className="text-sm font-medium text-primary">İletişim</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-primary">Dr. Arslan Karagül</span> ile
            İletişim
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Kitaplar, eğitimler ve diğer konular hakkında bilgi almak için
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
        {/* İletişim Bilgileri */}
        <div>
          <FadeIn direction="left">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 mt-6">
                  <Info className="h-5 w-5 text-primary" />
                  İletişim Bilgileri
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <a
                      href="tel:+905362228827"
                      className="text-primary hover:underline"
                    >
                      0536 222 88 27
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">E-posta</p>
                    <a
                      href="mailto:arslankaragul@hotmail.com"
                      className="text-primary hover:underline"
                    >
                      arslankaragul@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Konum</p>
                    <p className="text-muted-foreground">
                      Ünye, Ordu / Türkiye
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/kimlik">
                      <span className="flex items-center justify-center gap-2">
                        <User className="h-4 w-4" />
                        Özgeçmiş Sayfasına Git
                      </span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Kitaplar Hakkında Not */}
        <div>
          <FadeIn direction="right">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 mt-6">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Kitaplar Hakkında Not
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <BackgroundGradient className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-muted-foreground italic">
                    "Kitaplarımız Türkiye ve Avrupa'da Diyanet kitabevlerinden
                    de ısmarlanabilir."
                  </p>
                </BackgroundGradient>
                <p className="text-muted-foreground">
                  Kitaplar hakkında detaylı bilgi için kitaplar sayfasını
                  ziyaret edebilirsiniz.
                </p>
                <div className="pt-2">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/kitaplar">
                      <span className="flex items-center justify-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Kitaplar Sayfasına Git
                      </span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>

      {/* Dip Not */}
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <p className="text-muted-foreground">
            İletişim bilgileriniz sadece tarafınızla iletişim kurulması amacıyla
            kullanılacaktır.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
