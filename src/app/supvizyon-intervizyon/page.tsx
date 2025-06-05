"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn, BackgroundGradient } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookOpen,
  Eye,
  Users,
  Lightbulb,
  ArrowRight,
  FileText,
  CheckCircle,
  Mail,
  FileCheck,
  BarChart,
  RefreshCw,
  User,
} from "lucide-react";

export default function SupervizyonIntervizyon() {
  const basliklar = [
    {
      id: "tanim",
      title: "Süpervizyon ve İntervizyonun Kısa Tanımı",
      icon: <Eye className="h-6 w-6 text-primary" />,
      content: (
        <>
          <p className="mb-4">
            Batı'da 'süpervizyon' kısaca, bir süpervizör (üst-danışman)
            eşliğinde iş tecrübesi üzerine refleksiyon yaparak 'öğrenme' olarak
            tanımlanmaktadır. Burada öğrenmeden maksat tutum ve davranışlarda
            değişimi ve dolayısıyla gelişim ve olgunlaşmayı öğrenmedir.
          </p>
          <p className="mb-4">
            Bizim geleneğimizde buna kişinin kendini murakabe (gözetim) ve
            muhasebeye (özeleştiriye) tabi tutarak geliştirmesi
            (terbiyetü'n-Nefs) denilir. Bunun yolu da başta kişinin kendini (iyi
            veya daha iyi) tanımasından geçmektedir (marifetün-Nefs).
          </p>
          <p>
            İntervizyon da eşit statüde meslektaşlar arasında yapılan bir çeşit
            süpervizyondur. Süpervizyon ve intervizyonda bütün mesele bu şimşeği
            çaktırabilmektir. Bunu öğrenmenin de öğretmenin de birtakım
            yöntemleri vardır.
          </p>
        </>
      ),
    },
    {
      id: "ogrenme",
      title: "Süpervizyon ve İntervizyonda Öğrenme Yöntemi",
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      content: (
        <>
          <p className="mb-4">
            Süpervizyon ve intervizon eğitiminde temel öğrenme yöntemi, mesleki
            çalışmada iki kademeli bir uyumu öğrenmektir. Bu da genelde iç içe
            girmiş iki üçgenle şekillendirilmektedir.
          </p>
          <p className="mb-4">
            Birinci üçgende kafa, kalp ve el arasında uyum aranırken, ikinci
            üçgende kişi, meslek ve iş yeri arasında uyum aranmaktadır. Burada
            birinci kademe üçgende kafa düşünceyi, kalp duyguyu, el ise
            davranışı sembolize etmektedir.
          </p>
          <p>
            Süpervizyon ve intervizyonda 'öğrenme'den maksat yaparak, tecrübe
            ederek öğrenme ve gelişimdir. Bu tür öğrenmenin püf noktası yapılan
            her işte edinilen tecrübe üzerine yazılı ve sözlü refleksiyon
            yaparak, yazılı ve sözlü olarak refleksiyon yapmayı da öğrenmektir.
          </p>
        </>
      ),
    },
    {
      id: "calisma",
      title: "Çalışma Şekli ve Amaç",
      icon: <FileCheck className="h-6 w-6 text-primary" />,
      content: (
        <>
          <p className="mb-4">
            Mesleki süpervizyonda standartlara uygun olarak belli aralıklarla,
            belli bir süre içinde düzenli birlikteliklerle özel bir eğitimden
            geçilmesi söz konusudur. Bu birlikteliklerde süpervizyon alanların
            kendi iş tecrübeleri (vakalar) üzerine bir süpervizör gözetiminde
            sistematik olarak yapılacak refleksiyon yoluyla öğrenme ve
            gelişimleri amaçlanmaktadır.
          </p>
          <p className="mb-4">
            Buradaki 'öğrenme'de ezbere dayalı zihinsel öğrenme yerine, yaparak
            yani 'uygulamaya dayalı' bir öğrenme söz konusudur. Bu tür bir
            öğrenme ise akşamdan sabaha, birkaç gün veya birkaç haftada olup
            bitebilecek bir öğrenme şekli değildir.
          </p>
          <p>
            Bu öğrenmede yapılan iki veya üç haftada bir ve on-onbeş
            beraberliklerde yapılacak yazılı ve sözlü analiz çalışmalarıdır. Bu
            anlamda süpervizyon ve intervizyonda temel amaç herhangi bir
            meslekte daha profesyonel ve fonksiyonel olarak çalışabilmenin
            yollarının öğrenilmesidir.
          </p>
        </>
      ),
    },
    {
      id: "genel-ozel",
      title: "Genel ve Özel Süpervizyon",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      content: (
        <>
          <p className="mb-4">
            Mesleki süpervizyon genel ve özel süpervizyon olarak ikiye
            ayrılmaktadır. Genel süpervizyonda öğrenme metotları her meslek
            sahibi için aynı iken, manevi destek, danışmanlık ve rehberlik gibi
            özel mesleki süpervizyonda işlenen konular sadece bu mesleğin
            uygulamalarını yapanlara özeldir.
          </p>
          <p>
            Dolayısıyla genel süpervizyonu her süpervizör verebilirken özel bir
            mesleğe ait süpervizyonu ancak o meslekte uzman bir süpervizör
            verebilmektedir.
          </p>
        </>
      ),
    },
  ];

  const bolumler = [
    {
      id: "bolum1",
      title: "BÖLÜM I: SÜPERVİZYON VE İNTERVİZYON",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      items: [
        "Tanım: Süpervizyon nedir?",
        "Süpervizyon çeşitleri",
        "Süpervizyonun temel özellikleri",
        "Süpervizyonda özel isimlendirmeler",
        "Batı'da süpervizyon tarihi",
        "Hollanda modeli süpervizyon",
        "Süpervizyonda öğrenme",
        "Süpervizyonda farkındalık",
        "İntervizyon nedir?",
        "İntervizyon ve süpervizyon farklılıkları",
        "İntervizyonda yapılanma",
        "İntervizyonda metodik çalışma",
      ],
    },
    {
      id: "bolum2",
      title: "BÖLÜM II: MANEVİ BAKIM HİZMETLERİ VE SÜPERVİZYON",
      icon: <Users className="h-5 w-5 text-primary" />,
      items: [
        "Manevi Bakım Hizmetleri nedir, ne değildir?",
        "Kapsam ve organize",
        "Kavramsal gelişim ve değişim",
        "Profesyonel manevi danışmanlık uygulamaları",
        "Manevi Bakım Hizmetleri ve süpervizyon tarihi",
        "Manevi Bakım Hizmetlerinde profesyonellik",
        "MDR eğitimi ve süpervizyon",
        "Temel stratejiler: Bilgi-Beceri-Bilinç",
      ],
    },
    {
      id: "bolum3",
      title: "BÖLÜM III: SÜPERVİZÖRLÜK EĞİTİMİ",
      icon: <FileText className="h-5 w-5 text-primary" />,
      items: [
        "Süpervizörlük eğitimi nedir?",
        "Süpervizörlük becerileri",
        "Süpervizörlük eğitimi değerlendirme kriterleri",
        "Akademik ve post akademik eğitim programları",
      ],
    },
  ];

  const sertifikalar = [
    {
      id: "genel-sup",
      title: "Genel Süpervizyon Eğitimi",
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
    },
    {
      id: "genel-supvizor",
      title: "Genel Süpervizörlük Eğitimi",
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
    },
    {
      id: "mdr-baslangic",
      title: "MDR Mesleki Formasyon ve Süpervizyon Başlangıç Eğitimi",
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
    },
    {
      id: "mdr-ihtisas",
      title: "MDR Mesleki Formasyon İhtisas Eğitimi ve Süpervizyon",
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
    },
    {
      id: "mdr-supvizor",
      title: "MDR Süpervizörlük Eğitimi",
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
    },
    {
      id: "intervizyon-koordinator",
      title: "İntervizyon Koordinatörlüğü",
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Başlık Bölümü */}
      <FadeIn direction="down">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 bg-gradient-to-r from-primary/20 to-blue-500/20 px-5 py-2 rounded-full">
            <p className="text-sm font-medium text-primary">
              Dr. Arslan Karagül
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Süpervizyon ve <span className="text-primary">İntervizyon</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            İnsana hizmete odaklı profesyonellikte yeni bir öğrenme ve gelişim
            metodu
          </p>
        </div>
      </FadeIn>

      {/* Kitap Hakkında */}
      <FadeIn delay={100}>
        <BackgroundGradient className="bg-primary/5" containerClassName="mb-16">
          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader>
              <CardTitle className="text-2xl text-center mt-6">Önsöz</CardTitle>
            </CardHeader>
            <CardContent className="text-pretty">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative h-72 w-56 rounded-md overflow-hidden shadow-xl">
                    <Image
                      src="/images/book-cover.jpg"
                      alt="Süpervizyon ve İntervizyon Kitabı"
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-md"
                      priority
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <blockquote className="border-l-4 border-primary/50 pl-4 italic mb-6">
                    <p className="text-muted-foreground">
                      "GÖZ
                      <br />
                      Göz kendini görmüyor
                      <br />
                      Aynaya bakmayınca
                      <br />
                      İnsan kendin bilmiyor
                      <br />
                      Bir şimşek çakmayınca"
                    </p>
                    <footer className="text-right text-sm text-muted-foreground">
                      — A.K.
                    </footer>
                  </blockquote>
                  <p className="mb-4">
                    Hayat baştan sona bir öğrenme ve gelişim yolculuğudur.
                    Süpervizyon ve intervizyon da etkili bir öğrenme ve gelişim
                    metodudur. Bu kitapta bu metodun teori ve pratiği genel ve
                    özel şekliyle Hollanda örneğinde ele alınmıştır.
                  </p>
                  <p className="mb-4">
                    Temel kural: Kötü iyi, iyi daha iyi, zayıf kuvvetli,
                    kuvvetli daha kuvvetli olabilir. Kötülük kötülüğü, iyilik
                    iyiliği doğurur. Akıllı insanlar daha kötüye gidebilecek bir
                    durumu daha iyiye götürebilenlerdir. Süpervizyon ve
                    intervizyon eğitimi de insana hizmete yönelik profesyonel
                    mesleklerde daha iyi bir fonksiyon gösterebilmek içindir.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </BackgroundGradient>
      </FadeIn>

      {/* Temel Başlıklar */}
      <div className="mb-16">
        <FadeIn delay={200}>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Temel <span className="text-primary">Kavramlar</span>
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {basliklar.map((baslik, index) => (
            <FadeIn
              key={baslik.id}
              delay={300 + index * 100}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <Card className="overflow-hidden border border-primary/10 shadow-md">
                <CardHeader className="bg-primary/5 border-b border-primary/10">
                  <CardTitle className="flex items-center gap-3 mt-6">
                    {baslik.icon}
                    {baslik.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">{baslik.content}</CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* İçindekiler */}
      <FadeIn delay={400}>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Kitap <span className="text-primary">İçeriği</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bolumler.map((bolum, index) => (
              <Card
                key={bolum.id}
                className="h-full border border-primary/10 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardHeader className="bg-primary/5 border-b border-primary/10">
                  <CardTitle className="flex items-center gap-2 mt-6">
                    {bolum.icon}
                    {bolum.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {bolum.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Sertifika Programları */}
      <FadeIn delay={500}>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Sertifika <span className="text-primary">Programları</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {sertifikalar.map((sertifika) => (
              <Card
                key={sertifika.id}
                className="border border-primary/10 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5">{sertifika.icon}</div>
                    <p className="font-medium text-sm sm:text-base">
                      {sertifika.title}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Süpervizyon Alma/Eğitime Katılma */}
      <FadeIn delay={600}>
        <BackgroundGradient className="bg-primary/5" containerClassName="mb-16">
          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Eğitim Programları
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <RefreshCw className="h-5 w-5 text-primary" />
                    Süpervizyon ve İntervizyon Eğitimi
                  </h3>
                  <p className="mb-6 text-pretty">
                    Post-Akademik mesleki süpervizyon/intervizyon ve
                    süpervizörlük eğitimlerimiz Hollanda modelinde profesyonel
                    bir şekilde sunulmaktadır. Eğitimler hem yüz yüze hem de
                    uzaktan görünümlü olarak verilebilmektedir.
                  </p>
                  <p className="mb-6 text-pretty">
                    Tamamı 160 sayfa olan "Süpervizyon ve İntervizyon" eserimiz
                    henüz yayınlanmamış olduğundan, eğitime katılmak isteyenlere
                    dijital olarak (PDF) gönderilebilecektir.
                  </p>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href="mailto:arslankaragul@hotmail.com"
                      className="text-primary hover:underline"
                    >
                      arslankaragul@hotmail.com
                    </a>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <Button size="lg" className="group">
                    <Link
                      href="/pak-ozel-egitim"
                      className="flex items-center gap-2"
                    >
                      Eğitim Programları Hakkında Detaylı Bilgi
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </BackgroundGradient>
      </FadeIn>

      {/* Güncelleme Bilgisi */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Son Güncelleme: 28.02.2025</p>
      </div>
    </div>
  );
}
