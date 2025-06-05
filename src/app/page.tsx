"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import YouTubePlayer from "@/components/YouTubePlayer";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  User,
  Video,
  School,
  ArrowDown,
} from "lucide-react";
import { FadeIn, BackgroundGradient } from "@/components/animations";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Bölümü */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-12 min-h-[80vh]">
        <FadeIn className="md:w-1/2 space-y-6" direction="left">
          <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
            Dr. Arslan <span className="text-primary">Karagül</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground">
            Psikolog, Yazar ve Eğitimci
          </h2>
          <p className="text-foreground/80 text-pretty">
            Ass.Profesör, Amsterdam (VU) üniversitesi İlahiyat Fakültesi, İslam
            ilahiyat merkezi Emekli Öğretim Üyesi. İslam Din Eğitimi ve Manevi
            Bakım Hizmetleri Uzmanı. Manevi danışmanlık, destek ve rehberlik
            eğitmeni, süpervizör.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="group">
              <Link href="/kimlik" className="flex items-center">
                Hakkımda Daha Fazla{" "}
                <span className="arrow-container ml-2">
                  <ArrowRight className="size-5 arrow-icon drop-shadow-glow group-hover:translate-x-1 text-white" />
                </span>
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="group">
              <Link href="/kitaplar" className="flex items-center">
                Kitaplarım{" "}
                <span className="arrow-container ml-2">
                  <ArrowRight className="size-5 arrow-icon group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn className="md:w-1/2 relative" direction="right" delay={200}>
          <BackgroundGradient
            className="bg-primary/20"
            containerClassName="max-w-md mx-auto"
          >
            <div className="aspect-square relative max-w-md mx-auto rounded-xl overflow-hidden shadow-xl ring-1 ring-black/5 dark:ring-white/10">
              <Image
                src="/profile.jpg"
                alt="Dr. Arslan Karagül"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
                priority
              />
            </div>
          </BackgroundGradient>
        </FadeIn>
      </section>

      <div className="flex justify-center py-6">
        <FadeIn delay={800}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full animate-bounce p-3 bg-primary/15 hover:bg-primary/30 transition-colors duration-300 group"
          >
            <span className="arrow-container">
              <ArrowDown className="h-10 w-10 text-primary drop-shadow-glow" />
            </span>
            <span className="sr-only">Aşağı kaydır</span>
          </Button>
        </FadeIn>
      </div>

      {/* Video Bölümü */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-60 rounded-3xl" />

        <FadeIn>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                Tanıtım Videosu
              </span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Dr. Arslan Karagül hakkında fazla bilgi edinmek için tanıtım
              videomuzu izleyebilirsiniz.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative ring-1 ring-black/10 dark:ring-white/10 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-blue-500/30 pointer-events-none z-10 opacity-40" />
                <YouTubePlayer
                  videoId="I80a6V0nyNw"
                  title="Dr. Arslan Karagül - PAK Özel Eğitim Merkezi Tanıtımı"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Öne Çıkan Çalışmalar */}
      <section className="py-20 relative">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Öne Çıkan <span className="text-primary">Çalışmalar</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Psikoloji alanında yaptığım çalışmalar, verdiğim hizmetler ve
            sunduğum kaynaklar hakkında daha fazla bilgi edinebilirsiniz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={100} direction="up">
              <div className="group h-full">
                <BackgroundGradient
                  className="bg-primary/5 group-hover:bg-primary/10"
                  containerClassName="h-full"
                >
                  <Card className="border-0 shadow-none bg-transparent h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-2">
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      <div className="rounded-full bg-primary/10 p-4 mb-5 transition-colors duration-300">
                        <School className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-primary">
                        PAK Özel Eğitim
                      </h3>
                      <p className="text-muted-foreground mb-6 flex-grow">
                        Özel eğitim merkezimizde sunduğumuz hizmetler, terapiler
                        ve değerlendirme programları hakkında detaylı bilgi
                        alın.
                      </p>
                      <Button
                        variant="outline"
                        asChild
                        className="group-hover:bg-primary/10 transition-colors duration-300 w-full"
                      >
                        <Link
                          href="/pak-ozel-egitim"
                          className="flex items-center justify-center"
                        >
                          Daha Fazla Bilgi
                          <span className="arrow-container ml-2">
                            <ArrowRight className="h-5 w-5 arrow-icon group-hover:translate-x-1 group-hover:scale-110" />
                          </span>
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </BackgroundGradient>
              </div>
            </FadeIn>

            <FadeIn delay={200} direction="up">
              <div className="group h-full">
                <BackgroundGradient
                  className="bg-primary/5 group-hover:bg-primary/10"
                  containerClassName="h-full"
                >
                  <Card className="border-0 shadow-none bg-transparent h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-2">
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      <div className="rounded-full bg-primary/10 p-4 mb-5 transition-colors duration-300">
                        <User className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-primary">
                        Süpervizyon
                      </h3>
                      <p className="text-muted-foreground mb-6 flex-grow">
                        Psikoloji alanında çalışan profesyonellere sunduğumuz
                        süpervizyon ve intervizyon hizmetleri hakkında bilgi
                        alın.
                      </p>
                      <Button
                        variant="outline"
                        asChild
                        className="group-hover:bg-primary/10 transition-colors duration-300 w-full"
                      >
                        <Link
                          href="/supvizyon-intervizyon"
                          className="flex items-center justify-center"
                        >
                          Daha Fazla Bilgi
                          <span className="arrow-container ml-2">
                            <ArrowRight className="h-5 w-5 arrow-icon group-hover:translate-x-1 group-hover:scale-110" />
                          </span>
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </BackgroundGradient>
              </div>
            </FadeIn>

            <FadeIn delay={300} direction="up">
              <div className="group h-full">
                <BackgroundGradient
                  className="bg-primary/5 group-hover:bg-primary/10"
                  containerClassName="h-full"
                >
                  <Card className="border-0 shadow-none bg-transparent h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-2">
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      <div className="rounded-full bg-primary/10 p-4 mb-5 transition-colors duration-300">
                        <BookOpen className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-primary">
                        Kitaplar
                      </h3>
                      <p className="text-muted-foreground mb-6 flex-grow">
                        Psikoloji alanında yazdığım kitaplar, makaleler ve
                        akademik çalışmalarım hakkında bilgi edinin.
                      </p>
                      <Button
                        variant="outline"
                        asChild
                        className="group-hover:bg-primary/10 transition-colors duration-300 w-full"
                      >
                        <Link
                          href="/kitaplar"
                          className="flex items-center justify-center"
                        >
                          Kitaplarımı Keşfedin
                          <span className="arrow-container ml-2">
                            <ArrowRight className="h-5 w-5 arrow-icon group-hover:translate-x-1 group-hover:scale-110" />
                          </span>
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </BackgroundGradient>
              </div>
            </FadeIn>

            <FadeIn delay={400} direction="up">
              <div className="group h-full">
                <BackgroundGradient
                  className="bg-primary/5 group-hover:bg-primary/10"
                  containerClassName="h-full"
                >
                  <Card className="border-0 shadow-none bg-transparent h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-2">
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      <div className="rounded-full bg-primary/10 p-4 mb-5 transition-colors duration-300">
                        <Video className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-primary">
                        Mülakatlar
                      </h3>
                      <p className="text-muted-foreground mb-6 flex-grow">
                        Katıldığım televizyon programları, röportajlar,
                        söyleşiler ve medya etkinlikleri hakkında bilgi alın.
                      </p>
                      <Button
                        variant="outline"
                        asChild
                        className="group-hover:bg-primary/10 transition-colors duration-300 w-full"
                      >
                        <Link
                          href="/mulakatlar"
                          className="flex items-center justify-center"
                        >
                          Tüm Mülakatlar
                          <span className="arrow-container ml-2">
                            <ArrowRight className="h-5 w-5 arrow-icon group-hover:translate-x-1 group-hover:scale-110" />
                          </span>
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </BackgroundGradient>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
